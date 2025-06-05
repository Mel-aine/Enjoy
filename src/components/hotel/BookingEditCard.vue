<template>
<div><p class="text-3xl font-bold">{{ $t('listReservations') }} </p></div>
    <!-- Booking Details -->
    <div class="bg-white rounded-xl shadow-sm p-6 mt-6">
        <div class="flex justify-end mt-4">
            <div class="flex items-center gap-3">
                <div class="relative">
                    <!-- Cercle animé -->
                    <div class="w-4 h-4 rounded-full bg-red-500 animate-ping absolute top-0 left-0"></div>
                    <div class="w-4 h-4 rounded-full bg-red-500 relative z-10"></div>
                </div>

                <!-- Temps restant -->
                <div class="text-sm text-red-600 font-semibold animate-pulse">
                    {{ remainingTime }} {{ $t('appServices.hotel.timeBeforeAutoCancel') }}
                </div>
            </div>
        </div>

        <h3 class="text-lg font-semibold text-gray-900 mb-6">{{ $t('appServices.hotel.bookingDetails') }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.guest') }}</div>
                <div class="font-medium">{{ guestName }}</div>
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.checkIn') }}</div>
                <div class="font-medium">{{ checkIn.date }}</div>
                <!-- <div class="text-sm text-gray-500">{{ checkIn.time }}</div> -->
            </div>
            <div>
                <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.checkOut') }}</div>
                <div class="font-medium">{{ checkOut.date }}</div>
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
        <div class="mt-6 pt-6 border-t">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <!-- Partie gauche : label et numéro de réservation -->
                <div>
                    <div class="text-sm text-gray-500 mb-1">{{ $t('appServices.hotel.bookingNumber') }}</div>
                    <div class="font-medium">{{ bookingNumber }}</div>
                </div>
                <!-- Partie droite : boutons -->
                <div class="flex gap-2">
                    <button @click="handleEditBooking" class="bg-amber-500 rounded px-4 py-2 text-white hover:bg-amber-600">{{ $t('edit') }} Reservation</button>
                    <button class="bg-red-500/30 border border-red-500 rounded px-4 py-2 text-red-700 hover:bg-white">{{ $t('cancel') }} Reservation</button>
                </div>
            </div>
        </div>
    </div>
    <CustomModal :isOpen="isModalOpen">
        <EditBooking @submit="handleSubmit" @cancel="toggleModal"/>
    </CustomModal>

</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useDataStore } from '@/stores/dataStore';
import { useMIHStore } from '@/stores/manageHotelInterface';
import { useI18n } from 'vue-i18n';
import CustomModal from '../CustomModal.vue';
import EditBooking from './EditBooking.vue';
const remainingTime = ref('')
const targetTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000) // 24h from now
const isModalOpen = ref(false)
const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
}
const handleEditBooking = () => {
    toggleModal()
}

const handleSubmit = (data) => {
    // Handle the form submission logic here
    console.log('Form submitted with data:', data);
    toggleModal();
}
const updateTimer = () => {
    const now = new Date()
    const diff = targetTime - now

    if (diff <= 0) {
        remainingTime.value = '00:00:00'
        return
    }

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0')
    const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0')

    remainingTime.value = `${hours}:${minutes}:${seconds}`
}

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
    `${hotelStore.stayLength} ${t('appServices.hotel.nights')}, ${hotelStore.getRoomNumber(dataStore.searchFrom.rooms)} ${t('appServices.hotel.rooms')}, ${hotelStore.getRoomNumber(dataStore.searchFrom.rooms)} ${t('appServices.hotel.persons')}`
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