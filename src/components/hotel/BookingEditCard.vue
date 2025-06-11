<template>

    <!-- Booking Details -->
    <div
        :class="remainingTime === '00:00:00'? 'bg-gray-900/20 mb-2 rounded-xl shadow-lg p-6 mt-6' : 'bg-white rounded-xl p-6 mt-8 hover:shadow-lg transition duration-300 ease-in-out'">
        <div class="flex justify-end mt-4 mb-2">
            <div class="flex items-center gap-3">
                <div v-if="remainingTime !== '00:00:00'" class="relative">
                    <!-- Cercle animé -->
                    <div class="w-4 h-4 rounded-full bg-red-500 animate-ping absolute top-0 left-0"></div>
                    <div class="w-4 h-4 rounded-full bg-red-500 relative z-10"></div>
                </div>

                <!-- Temps restant -->
                <div v-if="remainingTime !== '00:00:00'" class="text-sm text-red-600 font-semibold animate-pulse">
                    {{ remainingTime }} {{ $t('appServices.hotel.timeBeforeAutoCancel') }}
                </div>

            </div>
        </div>

        <h3 class="text-lg font-semibold text-gray-900 mb-8">{{ $t('appServices.hotel.bookingDetails') }} <span
                class="text-gray-700">•</span> hotel le soleil <span class="text-gray-700">•</span> Room 100</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex items-center gap-3">
                <div>
                    <p class="text-sm text-gray-500 mb-1">DESTINATION</p>
                    <p class="text-sm text-muted-foreground">123 Rue de la Paix, Paris</p>
                </div>
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.guest') }}</div>
                <div class="font-medium">{{ guestName }}</div>
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.checkIn') }}</div>
                <div class="font-medium">{{ formatDate(checkIn.date) }}</div>
                <!-- <div class="text-sm text-gray-500">{{ checkIn.time }}</div> -->
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.checkOut') }}</div>
                <div class="font-medium">{{ formatDate(checkOut.date) }}</div>
                <!-- <div class="text-sm text-gray-500">{{ checkOut.time }}</div> -->
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.yourReservation') }}</div>
                <div class="font-medium">{{ reservation }}</div>
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.phone') }}</div>
                <div class="font-medium">{{ phone }}</div>
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.email') }}</div>
                <div class="font-medium">{{ email }}</div>
            </div>

        </div>

        <div v-if="remainingTime !== '00:00:00'" class="mt-6 pt-6 border-t">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <!-- Partie gauche : label et numéro de réservation -->
                <div>
                    <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.bookingNumber') }}</div>
                    <div class="font-medium">{{ bookingNumber }}</div>
                </div>
                <!-- Partie droite : boutons -->
                <div class="flex gap-2">
                    <button @click="handleEditBooking"
                        class="bg-amber-500 rounded px-4 py-2 text-white hover:bg-amber-600">{{ $t('edit') }}
                        Reservation</button>
                    <button class="bg-red-500/30 border border-red-500 rounded px-4 py-2 text-red-700 hover:bg-white">{{
                        $t('cancel') }} Reservation</button>
                </div>
            </div>
        </div>
        <div v-if="remainingTime === '00:00:00'" class="mt-6 pt-6 border-t">
            <div class="flex flex-col md:flex-row md:items-center md:justify-end gap-2">
                <div class="flex gap-2">
                    <button @click="handleDeleteBooking" class="bg-red-500/30 border border-red-500 rounded px-4 py-2 text-red-700 hover:bg-white">{{
                        $t('delete') }} Reservation</button>
                </div>
            </div>
        </div>
    </div>
    <CustomModal :isOpen="isModalOpen">
        <EditBooking @submit="handleSubmit" @cancel="toggleModal" />
    </CustomModal>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useDataStore } from '@/stores/dataStore';
import { useMIHStore } from '@/stores/manageHotelInterface';
import { useI18n } from 'vue-i18n';
import CustomModal from '../CustomModal.vue';
import EditBooking from './EditBooking.vue';
const emit = defineEmits(['delete'])

const { locale } = useI18n();
const remainingTime = ref('')
// const targetTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000) // 24h from now
const isModalOpen = ref(false)
const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
}

const handleDeleteBooking = () => {
  emit('delete')
  console.log('Booking deleted')
}
const handleEditBooking = () => {
    toggleModal()
    console.log('checkIn', checkIn.value.date)
    console.log('checkOut', checkOut.value.date)
}
const formatDate = (date) => {
    const currentYear = new Date().getFullYear();
    const originalDate = new Date(date);

    // Crée une nouvelle date avec l'année actuelle
    const adjustedDate = new Date(currentYear, originalDate.getMonth(), originalDate.getDate());

    return new Intl.DateTimeFormat(locale.value, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(adjustedDate);
};

const handleSubmit = (data) => {
    // Handle the form submission logic here
    console.log('Form submitted with data:', data);
    toggleModal();
}
const updateTimer = () => {
    const now = new Date();
    const checkInDate = new Date(checkIn.value.date);
    console.log('checkOutDate', checkInDate)

    // Cible = 1 jour avant la date de check-out à minuit
    const targetTime = new Date(checkInDate.getTime() - 24 * 60 * 60 * 1000);

    const diff = targetTime - now;
    console.log('diff', diff)
    if (diff <= 0) {
        // On est dans la dernière journée → affichage du compte à rebours jusqu’à le check-out
        const remainingMs = new Date(checkInDate) - now;

        if (remainingMs <= 0) {
            remainingTime.value = '00:00:00';
            return;
        }

        const hours = String(Math.floor(remainingMs / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((remainingMs % (1000 * 60)) / 1000)).padStart(2, '0');

        remainingTime.value = `${hours}:${minutes}:${seconds}`;
    } else {
        // Plus d'un jour restant → affichage du nombre de jours restants
        const remainingDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
        remainingTime.value = `${remainingDays} ${remainingDays > 1 ? t('days') : t('day')}`;
    }
};


onMounted(() => {
    updateTimer()
    setInterval(updateTimer, 1000)
})
const { t } = useI18n();

const hotelStore = useMIHStore();
const dataStore = useDataStore();
// import {dataStore} from '@/stores/dataStore.js'
// data confirm booking
const props = defineProps({
    // searchFrom: {
    //   Object,
    //   required: false,
    //   default: () => ({})
    // },
    bookingData: {
        Object,
        required: false,
        default: () => ({})
    }
});
const guestName = ref(props.bookingData?.roomDetails?.guestInfo?.firstName || 'Maciej Kuropatwa');
const checkIn = ref({ date: dataStore.searchFrom.dateAller, time: 'from 16:00' })
const checkOut = ref({ date: dataStore.searchFrom.dateRetour, time: 'by 11:00' })
const reservation = ref(
    `${hotelStore.stayLength} ${t('appServices.hotel.nights')}, ${hotelStore.getRoomNumber(dataStore.searchFrom.rooms)} ${t('appServices.hotel.room')}, ${hotelStore.getRoomNumber(dataStore.searchFrom.rooms)} ${t('appServices.hotel.person')}`
);
const phone = ref(
    props.bookingData?.roomDetails?.guestInfo?.phone?.countryCode && props.bookingData?.roomDetails?.guestInfo?.phone?.number
        ? `${props.bookingData.roomDetails.guestInfo.phone.countryCode} ${props.bookingData.roomDetails.guestInfo.phone.number}`
        : '+48 567 890 123'
);
const email = ref(props.bookingData?.roomDetails?.guestInfo?.email || 'kuropatwamaciej@gmail.com')
const bookingNumber = ref('#54237982')

onMounted(() => {
    // Scroll en haut de la page quand le composant est monté
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>