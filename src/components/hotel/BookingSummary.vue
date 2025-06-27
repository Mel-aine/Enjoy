<script setup>
import { ref, computed, watch } from "vue";
import {
  CalendarIcon,
  // LockIcon,
  // ArrowLeftFromLine,
} from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
// import { useMIHStore } from '@/stores/manageHotelInterface';
import { useDataStore } from '@/stores/dataStore';
import { useMIHStore } from '@/stores/manageHotelInterface';
import { useLanguageStore } from "@/lang/language";
import { storeToRefs } from 'pinia';

const props = defineProps({
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  }
})
const useLanguage = useLanguageStore()
const { locale } = storeToRefs(useLanguage); // ✅ Conserve la réactivité
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { formatPrice } from "../../utils/functions";
import StarIcon from "../../icons/StarIcon.vue";
import LoginPrompt from "../ui/LoginPrompt.vue";

const hotelStore = useMIHStore();
const dataStore = useDataStore();

// Rendre les dates réactives en utilisant storeToRefs pour maintenir la réactivité
const { searchFrom } = storeToRefs(dataStore);

// Utiliser correctement computed pour les dates qui doivent être réactives
const checkInDate = computed(() => searchFrom.value.dateAller);
const checkOutDate = computed(() => searchFrom.value.dateRetour);

// Transformer totalDays en computed pour qu'il se mette à jour automatiquement
const stayLength = computed(() => {
  const checkIn = new Date(checkInDate.value);
  const checkOut = new Date(checkOutDate.value);

  console.log('checkIn computed', checkIn);
  console.log('checkOut computed', checkOut);

  if (isNaN(checkIn.getTime()) || isNaN(checkOut.getTime())) return 0;

  const timeDiff = checkOut.getTime() - checkIn.getTime();
  if (timeDiff == 0) {
    return 1;
  }

  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
});

// Mettre à jour le hotelStore quand les valeurs changent
watch(stayLength, (newValue) => {
  hotelStore.stayLength = newValue;
});

watch([checkInDate, checkOutDate], ([newCheckIn, newCheckOut]) => {
  hotelStore.dateArrived = newCheckIn;
  hotelStore.dateDepart = newCheckOut;
});

const { t } = useI18n();

function getTotalPersons(rooms) {
  return rooms.reduce((total, room) => {
    return total + (room.adults || 0) + (room.childrens || 0)
  }, 0)
}

// Mettre à jour totalPersons quand les chambres changent
watch(() => searchFrom.value.rooms, (newRooms) => {
  hotelStore.totalPerson = getTotalPersons(newRooms);
}, { deep: true });

const priceDetails = computed(() => [
  {
    label: t('appServices.hotel.RoomsAndOffer'),
    price: (Number(hotelStore?.roomPrice) || 0) * stayLength.value,
  },
]);

watch(
  () => dataStore.searchFrom,
  (newValue) => {
    hotelStore.dateArrived = newValue.dateAller;
    hotelStore.dateDepart = newValue.dateRetour;
  },
  { deep: true }
);
const totalPrice = computed(() =>
  priceDetails.value.reduce((sum, item) => sum + Number(item.price || 0), 0)
);

// Mettre à jour le prix total quand il change
watch(totalPrice, (newTotalPrice) => {
  hotelStore.totalPrice = newTotalPrice;
});

// Initialiser les valeurs au démarrage
hotelStore.stayLength = stayLength.value;
hotelStore.totalPrice = totalPrice.value;
hotelStore.dateArrived = checkInDate.value;
hotelStore.dateDepart = checkOutDate.value;
hotelStore.totalPerson = getTotalPersons(searchFrom.value.rooms);
console.log("hotelStore.dateArrived", hotelStore.dateArrived);
console.log("hotelStore.dateDepart", hotelStore.dateDepart);
const invoiceRef = ref(null);

const downloadBillBooking = () => {
  const node = invoiceRef.value;
  if (!node) return;

  // D'abord, on récupère les dimensions du DOM réel
  const pixelToMm = (px) => px * 0.264583; // Conversion pixels → mm (1 px ≈ 0.2646 mm)
  const domRect = node.getBoundingClientRect();
  const domWidthMm = pixelToMm(domRect.width);
  const domHeightMm = pixelToMm(domRect.height);

  domtoimage.toPng(node)
    .then((dataUrl) => {
      const pdf = new jsPDF('p', 'mm', [domHeightMm, domWidthMm]); // Taille exacte du DOM
      pdf.addImage(dataUrl, 'PNG', 0, 0, domWidthMm, domHeightMm);
      pdf.save(t('appServices.hotel.bill-Booking.pdf'));
    })
    .catch((error) => {
      console.error('Erreur lors du téléchargement du PDF:', error);
    });
};

const formatDate = (dateValue) => {
  const currentLocale = locale.value === "fr" ? "fr-FR" : "en-US";
  const today = new Date();
  const inputDate = dateValue instanceof Date ? dateValue : new Date(dateValue);

  if (isNaN(inputDate.getTime())) return "Invalid date";


  inputDate.setFullYear(today.getFullYear()); // on corrige l'année si nécessaire


  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat(currentLocale, options).format(inputDate);

  return formattedDate;
};
const amenitiesStatus = computed(() => {
  return {
    wifi: hotelStore.this_hotel?.amenities?.includes('wifi') || false,
    breakfast: hotelStore.this_hotel?.amenities?.includes('breakfast') || false,
    pool: hotelStore.this_hotel?.amenities?.includes('pool') || false,
    gym: hotelStore.this_hotel?.amenities?.includes('gym') || false
  };
});

const reservationItems = computed(() => {
  return hotelStore.reservationItems;
});
const totalReservationPrice = computed(() => {
  return reservationItems.value.reduce((sum, item) => {
    return sum + (item.quantity * (item.room.price || 0))
  }, 0)
})
</script>

<template>
  <div class="bg-white rounded-xl mb-2">
    <LoginPrompt/>
    </div>
  <div class="bg-white rounded-xl shadow-sm mb-2 p-3">
    <div class="flex items-start">
      <div class="flex flex-col">
        <div class="flex gap-3">
          <span>{{ $t('hotel') }}</span>
          <div class="flex gap-1">
            <span v-for="star in 5" :key="star" class="">
              <StarIcon />
            </span>
          </div>
        </div>

        <h2 class="text-xl font-semibold text-gray-900 mb-2 mt-2" role="title">
          {{ hotelStore.this_hotel?.name || $t("notAvaible") }} <span class="text-gray-700">•</span>
        </h2>
        <div class="text-gray-700">
          {{ hotelStore.this_hotel?.location }}
        </div>
        <div class="flex items-start justify-between space-x-3">

          <div class="flex space-x-3 mt-1 ">
            <WifiIcon v-if="amenitiesStatus.wifi" size="18" class="text-gray-600" />
            <CoffeeIcon v-if="amenitiesStatus.breakfast" size="18" class="text-gray-600" />
            <WavesLadderIcon v-if="amenitiesStatus.pool" size="18" class="text-gray-600" />
            <DumbbellIcon v-if="amenitiesStatus.gym" size="18" class="text-gray-600" />
          </div>

        </div>

      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-sm ">
    <div ref="invoiceRef" class="p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ $t('appServices.hotel.reservationSummary') }}</h3>
      <div class="flex justify-between pb-4 border-b">
        <div>
          <div class="text-sm text-gray-600 mb-1">{{ $t('appServices.hotel.checkIn') }}</div>
          <div class="font-medium">{{ formatDate(checkInDate) }}</div>
          <!-- <div class="text-sm text-gray-600">from 16:00</div> -->
        </div>
        <div class="text-right">
          <div class="text-sm text-gray-600 mb-1">{{ $t('appServices.hotel.checkOut') }}</div>
          <div class="font-medium">{{ formatDate(checkOutDate) }}</div>
          <!-- <div class="text-sm text-gray-600">by 11:00</div> -->
        </div>
      </div>

      <div class="py-4 border-b">
        <div class="text-sm text-gray-600 mb-1">{{ $t('appServices.hotel.totalLengthOfStay') }}
        </div>
        <div class="font-medium flex items-center">
          <div class="self-center items-center h-full">
            <span>{{ stayLength }} {{ $t('night(s)') }}</span>
          </div>
        </div>
      </div>
      <div class="py-4 border-b">
        <div class="text-sm text-gray-600 mb-1">{{ $t('youSelect') }}
        </div>
        <div class="font-medium flex flex-col">
          <div class="h-full">
            {{ $t('roomsForAdults', { count: reservationItems.length, adults: hotelStore.totalPerson }) }}
          </div>
          <div class="mt-3">
            <button class="text-primary font-bold cursor-pointer hover:text-primary/25">
              {{ $t('changeSelection') }}
            </button>
          </div>
        </div>
      </div>

      <div class="py-4">
        <h4 class="font-medium text-gray-600 mb-2">{{ $t('appServices.hotel.yourPriceSummary') }}</h4>
        <div class="space-y-2">
          <div v-for="(item, index) in priceDetails" :key="index" class="flex justify-between text-sm">
            <span>{{ item.label }}</span>
            <span>{{ formatPrice(totalReservationPrice) }}</span>
          </div>
          <div class="flex justify-between font-medium text-customRed pt-2 border-t">
            <span> {{ $t('appServices.hotel.total') }} {{ $t('appServices.hotel.price') }}
            </span>
            <span> <span class="text-xl font-bold">{{ formatPrice(totalReservationPrice) }} </span> </span>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-6 -my-6">
      <button v-if="props.isPaid" @click="downloadBillBooking"
        class="w-full bg-customRed text-white py-3 rounded-lg mt-4 hover:text-black transition duration-200">
        {{ $t('appServices.hotel.downloadInvoice') }}
      </button>
      <div class="text-center text-xs text-gray-500 mt-4 pb-6">
        {{ $t('appServices.hotel.weRunOnEnjoyInc') }}
      </div>
    </div>

  </div>
</template>