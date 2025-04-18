<template>
    <!-- confirmed Reservation start -->

<div class="space-y-6">
    <!-- Success Message -->
    <div class="bg-green-50 border border-green-100 rounded-xl p-6">
      <div class="flex items-start">
        <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckIcon class="text-white" size="24" />
        </div>
        <div class="ml-4">
          <h2 class="text-lg font-semibold text-gray-900 mb-2">{{$t('appServices.hotel.bookingConfirmed')}}</h2>
          <p class="text-gray-600">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
            Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
          </p>
        </div>
      </div>
    </div>
    </div>
    <!-- Booking Details -->
    <div class="bg-white rounded-xl shadow-sm p-6 mt-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-6">{{$t('appServices.hotel.bookingDetails')}}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.guest')}}</div>
          <div class="font-medium">{{ guestName }}</div>
        </div>
        <div>
          <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.checkIn')}}</div>
          <div class="font-medium">{{ checkIn.date }}</div>
          <!-- <div class="text-sm text-gray-500">{{ checkIn.time }}</div> -->
        </div>
        <div>
          <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.checkOut')}}</div>
          <div class="font-medium">{{ checkOut.date }}</div>
          <!-- <div class="text-sm text-gray-500">{{ checkOut.time }}</div> -->
        </div>
        <div>
          <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.yourReservation')}}</div>
          <div class="font-medium">{{ reservation }}</div>
        </div>
        <div>
          <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.phone')}}</div>
          <div class="font-medium">{{ phone }}</div>
        </div>
        <div>
          <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.email')}}</div>
          <div class="font-medium">{{ email }}</div>
        </div>
      </div>
      <div class="mt-6 pt-6 border-t">
        <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.bookingNumber')}}</div>
        <div class="font-medium">{{ bookingNumber }}</div>
      </div>
    </div>

    <!-- Parking Ticket -->
    <div v-if="isParkingChoice" class="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">
      <div class="flex-col">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">{{$t('appServices.hotel.parkingTicket')}}</h3>
      <p class="text-gray-500 text-sm mb-6">
        {{$t('appServices.hotel.parkingInfo')}}        <br />
        {{$t('appServices.hotel.parkingInfo1')}}      </p>
      </div>

      <div class="flex items-center space-x-8">
        <img :src="parkingDetails.qrCodeUrl" alt="Parking QR Code" class="w-32 h-32" />
        <div>
          <div class="text-sm text-gray-500 mb-1">{{$t('appServices.hotel.carPark')}}</div>
          <div class="font-medium mb-1">{{ parkingDetails.type }}</div>
          <div class="text-sm text-gray-600 mb-4">{{ parkingDetails.place }}</div>
          <!-- <button class="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
            {{$t('appServices.hotel.downloadParkingTicket')}}
          </button> -->
        </div>
      </div>
    </div>
    <div class="flex justify-end">
  <button v-if="isParkingChoice" class="inline-flex px-4 py-2 mt-4 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition-colors">
    {{$t('appServices.hotel.downloadParkingTicket')}}
  </button>
</div>
    
</template>
<script setup>
import { ref, } from 'vue';
import { CheckIcon } from 'lucide-vue-next';
import {useDataStore} from '@/stores/dataStore';
import { useMIHStore } from '@/stores/manageHotelInterface';

const hotelStore = useMIHStore();
const isParkingChoice = ref(hotelStore.isCarParkSelected)
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
const reservation = ref('3 Nights, 1 Apartment')
const phone = ref(
  props.bookingData?.roomDetails?.guestInfo?.phone?.countryCode && props.bookingData?.roomDetails?.guestInfo?.phone?.number
    ? `${props.bookingData.roomDetails.guestInfo.phone.countryCode} ${props.bookingData.roomDetails.guestInfo.phone.number}`
    : '+48 567 890 123'
);
const email = ref(props.bookingData?.roomDetails?.guestInfo?.email || 'kuropatwamaciej@gmail.com')
const bookingNumber = ref('#54237982')
const parkingDetails = ref({
  type: 'Car, 3 nights',
  place: 'Place C-124 on 1st Floor',
  qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example'
})
// const emit = defineEmits(['back']);

// const handleBack = () => {
//   emit('back');
// };
</script>