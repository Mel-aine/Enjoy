<template>
  <!-- <div v-if="isLoading">

    <div v-if="isLoading" class="space-y-6">
      <div v-for="i in 4" :key="`skeleton-${i}`" class="flex items-start p-6 bg-white rounded-xl shadow-sm">
        <Skeletor circle size="96px" />

        <div class="ml-6 flex-1 space-y-3">
          <Skeletor width="40%" height="20px" />
          <Skeletor width="60%" height="16px" />
          <Skeletor width="80%" height="14px" />

          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <Skeletor v-for="j in 5" :key="`icon-${j}`" width="100%" height="40px" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div v-for="k in 4" :key="`input-${k}`" class="space-y-2">
              <Skeletor width="30%" height="16px" />
              <Skeletor width="100%" height="36px" />
            </div>
          </div>

          <div class="mt-6">
            <Skeletor width="50%" height="20px" />
            <div v-for="l in 2" :key="`addon-${l}`" class="flex items-center justify-between mt-4">
              <div class="flex items-center space-x-3">
                <Skeletor circle size="16px" />
                <div class="space-y-1">
                  <Skeletor width="100px" height="14px" />
                  <Skeletor width="80px" height="12px" />
                </div>
              </div>
              <Skeletor width="50px" height="16px" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div> -->
  <div class="bg-white rounded-xl shadow-sm overflow-hidden">
  
    <!-- User Details Form start-->
    <div class="bg-white  px-6 py-2">
      <h2 class="font-semibold text-lg text-gray-900 mb-4">{{ $t('appServices.hotel.enterYourDetails') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- First Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.firstName') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="text" v-model="firstName" @input="firstNameTouched = true" :class="[
              'w-full px-3 py-2 border rounded-lg focus:ring-2',
              !firstNameTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validateFirstName(firstName)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="firstNameTouched && validateFirstName(firstName)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="firstNameTouched && !validateFirstName(firstName)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="firstNameTouched && !validateFirstName(firstName)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.firstNameError') }}
          </p>
        </div>

        <!-- Last Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.lastName') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="text" v-model="lastName" @input="lastNameTouched = true" :class="[
              'w-full px-3 py-2 border rounded-lg focus:ring-2',
              !lastNameTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validateLastName(lastName)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="lastNameTouched && validateLastName(lastName)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="lastNameTouched && !validateLastName(lastName)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="lastNameTouched && !validateLastName(lastName)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.lastNameError') }}
          </p>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.email') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="email" v-model="emailAddress" @input="emailTouched = true" :class="[
              'w-full px-3 py-2 border rounded-lg focus:ring-2',
              !emailTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validateEmail(emailAddress)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="emailTouched && validateEmail(emailAddress)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="emailTouched && !validateEmail(emailAddress)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="emailTouched && !validateEmail(emailAddress)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.emailError') }}
          </p>
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {{ $t('appServices.hotel.phone') }}
            <span class="text-red-500">*</span>
          </label>
          <div class="relative flex">
            <select v-model="countryCode"
              class="px-3 py-2 border border-gray-300 rounded-lg rounded-r-none border-r-0 bg-gray-50 text-gray-500">
              <option value="+237">+237</option>
              <option value="+33">+33</option>
              <option value="+1">+1</option>
            </select>
            <input type="tel" v-model="phoneNumber" @input="phoneTouched = true" :class="[
              'flex-1 px-3 py-2 border rounded-lg rounded-l-none focus:ring-2',
              !phoneTouched
                ? 'border-gray-300 focus:ring-indigo-500'
                : validatePhoneNumber(phoneNumber)
                  ? 'border-green-500 focus:ring-indigo-500'
                  : 'border-red-500 focus:ring-red-200'
            ]" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div v-if="phoneTouched && validatePhoneNumber(phoneNumber)"
                class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
              <div v-else-if="phoneTouched && !validatePhoneNumber(phoneNumber)"
                class="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <XIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
          <p v-if="phoneTouched && !validatePhoneNumber(phoneNumber)" class="mt-1 text-sm text-red-600">
            {{ $t('appServices.hotel.phoneError') }}
          </p>
        </div>
      </div>
    </div>
    <!-- User Details Form end-->
    <SpecialRequestAvail/>
    <div class="bg-white rounded-xl p-6 shadow-sm">
      <h2 v-if="isPresentInDB" class="font-semibold text-lg text-gray-900 mb-4">{{ $t('appServices.hotel.addToYourStay')
      }}
      </h2>
      <!-- Car Park Section -->
      <div v-if="isPresentInDB" class="border-b" :class="selectedOptions.carPark ? 'pb-6 mb-6' : ''">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <input type="checkbox" class="w-4 h-4 rounded border-customRed" :checked="selectedOptions.carPark"
              @click="toggleOption('carPark')" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span> {{ $t('appServices.hotel.carPark') }}
                </span>
                <!-- <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform"
                  :class="{ 'rotate-180': selectedOptions.carPark }" /> -->
              </div>
              <div class="text-sm text-gray-500">{{ $t('appServices.hotel.familyChoice') }}
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="font-medium">
              FCFA 20000 <span class="text-sm text-gray-500">/{{ $t('appServices.hotel.night') }}
              </span>
            </div>
          </div>
        </div>

        <!-- Vehicle Type Selection - Only shown when carPark is selected -->
        <div class="space-y-4" v-if="selectedOptions.carPark">
          <div>
            <div class="text-sm font-medium text-gray-700 mb-2">{{ $t('appServices.hotel.vehicleType') }}
            </div>
            <div class="grid grid-cols-3 gap-3">
              <!-- Motorcycle -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedVehicle === 'motorcycle'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedVehicle('motorcycle')">
                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <!-- Guidon -->
                  <path d="M4 5h3l3 5h4l3-5h3" />
                  <!-- Phare -->
                  <circle cx="12" cy="10" r="2" />
                  <!-- Cadre -->
                  <path d="M12 12v4" />
                  <!-- Roues -->
                  <circle cx="7" cy="19" r="3" />
                  <circle cx="17" cy="19" r="3" />
                  <!-- Fourche et suspension -->
                  <path d="M7 19h10" />
                  <path d="M12 14l-5 5" />
                  <path d="M12 14l5 5" />
                </svg>
                <div>{{ $t('appServices.hotel.motorcycle') }}
                </div>
                <div class="text-gray-500">FCFA 20000/{{ $t('appServices.hotel.night') }}
                </div>
              </button>

              <!-- Car -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedVehicle === 'car'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedVehicle('car')">
                <CarFrontIcon class="mb-1" size="30" />
                <div>Car</div>
                <div class="text-gray-500">FCFA 30000/{{ $t('appServices.hotel.night') }}
                </div>
              </button>

              <!-- Bus -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedVehicle === 'bus'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedVehicle('bus')">
                <BusFrontIcon class="mb-1" size="30" />
                <div>{{ $t('appServices.hotel.bus') }}
                </div>
                <div class="text-gray-500">FCFA 50000/{{ $t('appServices.hotel.night') }}
                </div>
              </button>
            </div>
          </div>

          <!-- Parking Type Selection -->
          <div>
            <div class="text-sm font-medium text-gray-700 mb-2">{{ $t('appServices.hotel.placeType') }}
            </div>
            <div class="grid grid-cols-2 gap-3">
              <!-- Default Parking -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedParkingType === 'default'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedParkingType('default')">
                <CarFrontIcon class="mb-1" size="30" />
                <div>{{ $t('appServices.hotel.default') }}
                </div>
              </button>

              <!-- Disabled Parking -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedParkingType === 'disabled'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedParkingType('disabled')">
                <Accessibility class="mb-1" size="30" />
                <div>{{ $t('appServices.hotel.disabledParking') }}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottle of Wine Section -->
      <div v-if="isPresentInDB" class="border-b" :class="selectedOptions.wine ? 'pb-6 mb-6' : ''">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3 mt-2">
            <input type="checkbox" class="w-4 h-4 rounded text-customRed" :checked="selectedOptions.wine"
              @click="toggleOption('wine')" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span>{{ $t('appServices.hotel.bottle') }}
                </span>
                <!-- <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform"
                  :class="{ 'rotate-180': selectedOptions.wine }" /> -->
              </div>
              <div class="text-sm text-gray-500">
                Ventisquero Reserva Chardonnay/Valle de Casablanca Aconcagua
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-right mt-2">
              <div class="font-medium">
                FCFA 50000 <span class="text-sm text-gray-500">/{{ $t('appServices.hotel.piece') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional wine info - Only shown when wine is selected -->
        <div v-if="selectedOptions.wine" class="mt-4">
          <p class="text-sm text-gray-600">
            This premium Chardonnay comes from the Casablanca Valley and pairs perfectly with seafood and poultry.
          </p>
        </div>
      </div>

      <!-- Stay of a Pet Section -->
      <div v-if="isPresentInDB" :class="selectedOptions.pet ? 'pb-6' : ''">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3 mt-2">
            <input type="checkbox" class="w-4 h-4 rounded text-customRed" :checked="selectedOptions.pet"
              @click="toggleOption('pet')" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span>Stay of a pet</span>
                <!-- <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform"
                  :class="{ 'rotate-180': selectedOptions.pet }" /> -->
              </div>
              <div class="text-sm text-gray-500">
                Traveling with pets can seem like a daunting task
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-right mt-2">
              <div class="font-medium">
                FCFA 50000 <span class="text-sm text-gray-500">/{{ $t('appServices.hotel.night') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional pet info - Only shown when pet is selected -->
        <div v-if="selectedOptions === 'pet'" class="mt-4">
          <p class="text-sm text-gray-600">
            Please inform us about the type and size of your pet. Additional cleaning fees may apply.
          </p>
        </div>
      </div>
      <!-- Navigation Buttons -->
      <div class="mx-auto max-w-5xl mt-12 justify">
        <!-- Version mobile -->
        <div class="flex justify-between flex-1 sm:hidden">
          <button @click="handleBack"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
            {{ $t('appServices.hotel.previous') }}

          </button>
          <button @click="handleNext"
            class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            {{ $t('appServices.hotel.requestToBook') }}
            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 ml-2" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Version desktop -->
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div class="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Navigation">
            <button @click="handleBack"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 sm:rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="isFirstPage">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-2"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              {{ $t('appServices.hotel.previous') }}

            </button>
            <button @click="handleNext"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 sm:rounded-r-md hover:bg-gray-50">
              {{ $t('appServices.hotel.requestToBook') }}
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 ml-2"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <LoadingSpinner v-if="hotelStore.isSpinnerDisplayed" /> -->

</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
import SpecialRequestAvail from '../ui/SpecialRequestAvail.vue';
import {
  DumbbellIcon,
  XIcon,
  WifiIcon,
  WavesLadderIcon,
  CoffeeIcon,
  BedDoubleIcon,
  Users2Icon,
  Bath,
  Accessibility,
  CheckIcon,
  BusFrontIcon,
  CarFrontIcon,
  ChevronDownIcon,
  StarIcon,
  BadgeCheck
} from 'lucide-vue-next';
import { useMIHStore } from '@/stores/manageHotelInterface';
import { getAllServicesByServiceId, getOptionsByServiceId } from '@/servicesApi/hotelServicesApi.js';
import "vue-skeletor/dist/vue-skeletor.css"
// import { Skeletor } from "vue-skeletor"
import LoadingSpinner from '@/components/spiner/LoaodingSpinner.vue';
import { validateFirstName, validateLastName, validateEmail, validatePhoneNumber } from '@/utils/functions';
// import { useI18n } from 'vue-i18n';
const router = useRouter()
const { t } = useI18n()
const defaultValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  emailAddress: '',
  countryCode: '+237'
}
const reservationItems = computed(()=>{
  return hotelStore.reservationItems;
})
const props = defineProps({
  roomId: {
    type: Number
  },
  roomData: {
    type: Object,
    required: false,
    default: () => ({})
  }
})

// Initialisation avec fallback vers les valeurs par défaut
const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const emailAddress = ref('')
const countryCode = ref('')
const isLoading = ref(false)
const isPresentInDB = ref(false)
const firstNameTouched = ref(false)
const lastNameTouched = ref(false)
const emailTouched = ref(false)
const phoneTouched = ref(false)
const initializeForm = () => {
  const guestInfo = props.roomData?.guestInfo || {}

  firstName.value = guestInfo.firstName ?? defaultValues.firstName
  lastName.value = guestInfo.lastName ?? defaultValues.lastName
  phoneNumber.value = guestInfo.phone?.number ?? defaultValues.phoneNumber
  emailAddress.value = guestInfo.email ?? defaultValues.emailAddress
  countryCode.value = guestInfo.phone?.countryCode ?? defaultValues.countryCode
}

// Appel initial
initializeForm()

const hotelStore = useMIHStore();
const emit = defineEmits(['next', 'back']);
const Rooms = ref([]);
const options = ref([]);
const sizeValue = ref(0);

const selectedOptions = ref({
  carPark: false,
  wine: false,
  pet: false,
});
const verifyCarParkOptionSelected = () => {
  if (selectedOptions.value.carPark) {
    hotelStore.setIsCarParkSelected();
  }
}

const selectedVehicle = ref('motorcycle');
const selectedParkingType = ref('default');
const expanded = ref(false);

const toggleOption = (option) => {
  selectedOptions.value[option] = !selectedOptions.value[option];
  if (option === 'carPark') {
    hotelStore.carParkPrice = getOptionPrice(option);
    setSelectedVehicle(selectedVehicle.value)
    console.log('carParkPrice', hotelStore.carParkPrice);
  } else if (option === 'wine') {
    hotelStore.winePrice = getOptionPrice(option);
  } else if (option === 'pet') {
    hotelStore.petPrice = getOptionPrice(option);
  }

};

const setSelectedVehicle = (vehicle) => {
  selectedVehicle.value = vehicle;
  if (selectedOptions.value.carPark) {
    hotelStore.carParkPrice = getOptionPrice('carPark');
    console.log('carParkPrice', hotelStore.carParkPrice);
  }
};

const setSelectedParkingType = (type) => {
  selectedParkingType.value = type;
};

const handleBack = () => {
  emit('back');
  hotelStore.listHotel();
  router.back()
  console.log('handleBack');
};
const handleNext = () => {
  firstNameTouched.value = true;
  lastNameTouched.value = true;
  emailTouched.value = true;
  phoneTouched.value = true;

  if (validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validateEmail(emailAddress) &&
    validatePhoneNumber(phoneNumber)) {
    return console.log('handleBack');

  }
  const roomData = {
    guestInfo: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailAddress.value,
      phone: {
        countryCode: countryCode.value,
        number: phoneNumber.value
      }
    },

    // Options supplémentaires sélectionnées
    additionalOptions: {
      carPark: selectedOptions.value === 'carPark' ? {
        vehicleType: selectedVehicle.value,
        parkingType: selectedParkingType.value,
        price: getOptionPrice('carPark')
      } : null,

      wine: selectedOptions.value === 'wine' ? {
        price: getOptionPrice('wine')
      } : null,

      pet: selectedOptions.value === 'pet' ? {
        price: getOptionPrice('pet')
      } : null
    },


    // Détails de la réservation
    bookingDetails: {
      hotelName: hotelStore.this_hotel?.name || t('notAvaible'),
      rating: 4.87,
      reviewCount: 262,
      amenities:[],
      cancellationPolicy: expanded.value ?
        "Free cancellation until 11:59 PM on May 21, 2022. Your account will be charged on Sunday, May 22, 2022. If you cancel by 11:59 PM on Tuesday, May 31, 2022 you'll get your money back!" :
        "Free cancellation until 11:59 PM on May 21, 2022"
    }
  };

  console.log('selectedOption:', selectedOptions.value);
  if (isPresentInDB.value) {
    verifyCarParkOptionSelected();
  }
  emit('next', roomData, RoomsWithLowPrice.value.id);
};

// Helper function to get option prices
const getOptionPrice = (option) => {
  if (!selectedOptions.value[option]) return 0;

  if (option === 'carPark') {
    switch (selectedVehicle.value) {
      case 'motorcycle': return 20000;
      case 'car': return 30000;
      case 'bus': return 50000;
      default: return 0;
    }
  }

  if (option === 'wine' || option === 'pet') {
    return 50000;
  }

  return 0;
};
console.log('gets', getOptionPrice('carPark'), getOptionPrice('wine'), getOptionPrice('pet'));

const serviceId = ref(0);
const RoomsWithLowPrice = ref({})
// Fonction pour charger les chambres
const loadRooms = async () => {
  try {
    isLoading.value = true;
    const roomsResponse = await getAllServicesByServiceId(hotelStore.hotelId);
    Rooms.value = roomsResponse.data;
   

  } catch (error) {
    console.error('Erreur lors du chargement:', error);
  } finally {
    isLoading.value = false;
  }
};

const loadOptions = async () => {
  try {
    const optionIds = RoomsWithLowPrice.value.options?.map(opt => opt.optionId) || [];

    if (!optionIds.length) {
      console.warn('Aucune option à charger');
      options.value = [];
      return;
    }

    console.log('Chargement des options pour IDs:', optionIds);

    const responses = await Promise.all(
      optionIds.map(id => getOptionsByServiceId(id))
    );

    // Fusionner toutes les options retournées
    options.value = responses.flatMap(res => res.data || []);
    console.log('Options chargées:', options.value);

  } catch (error) {
    console.error('Erreur lors du chargement des options:', error);
  }
};

// Observer les changements de l'ID depuis le store
watch(
  () => hotelStore.this_hotel?.id,
  (newId, oldId) => {
    if (newId && newId !== oldId) {
      console.log('serviceId changed:', newId);
      serviceId.value = newId;
      loadRooms();
    }
  },
  { immediate: true }
);

onMounted(() => {
  // Scroll en haut de la page quand le composant est monté
  window.scrollTo({ top: 0, behavior: 'smooth' });
console.log('hotelStore.this_hotel',hotelStore.this_hotel);
});


const accommodationOptions = [
  { optionId: 1, optionName: "Accommodation Type", value: "Single Room" },
  { optionId: 2, optionName: "Bed Type", value: "Single Bed" },
  { optionId: 3, optionName: "View", value: "Sea View" },
  { optionId: 4, optionName: "Balcony", value: "Yes" },
  { optionId: 5, optionName: "Terrace", value: "Yes" },
  { optionId: 6, optionName: "Air Conditioning", value: "Yes" },
  { optionId: 7, optionName: "Wi-Fi", value: "Free" },
  { optionId: 8, optionName: "Breakfast Included", value: "Yes" },
  { optionId: 9, optionName: "Private Bathroom", value: "Yes" },
  { optionId: 10, optionName: "Kitchen / Kitchenette", value: "Yes" },
  { optionId: 11, optionName: "Washing Machine", value: "Yes" },
  { optionId: 12, optionName: "Room Size (sqm)", value: "15" },
  { optionId: 13, optionName: "Number of Rooms", value: "1" },
  { optionId: 14, optionName: "Maximum Occupancy", value: "1" },
  { optionId: 15, optionName: "TV", value: "None" },
  { optionId: 16, optionName: "Mini Bar", value: "Yes" },
  { optionId: 17, optionName: "Safe Deposit Box", value: "Yes" },
  { optionId: 18, optionName: "Extra Bed", value: "Yes" },
  { optionId: 19, optionName: "Wheelchair Accessible", value: "Yes" },
  { optionId: 20, optionName: "Private Pool", value: "Yes" },
  { optionId: 21, optionName: "Jacuzzi / Spa", value: "Yes" },
  { optionId: 22, optionName: "Smoking Allowed", value: "Smoking" },
  { optionId: 23, optionName: "Pets Allowed", value: "Yes" },
  { optionId: 24, optionName: "Housekeeping", value: "Daily" },
  { optionId: 25, optionName: "Parking", value: "Free" },
  { optionId: 26, optionName: "Room Service", value: "Yes" },
  { optionId: 27, optionName: "Self Check-in", value: "Yes" },
  { optionId: 30, optionName: "House Rules", value: "Quiet Hours" },
  { optionId: 31, optionName: "Number of beds", value: "1" },
  { optionId: 32, optionName: "Number of bathrooms", value: "3" },
]

const getIcon = (optionName) => {
  const iconMap = {
    "Accommodation Type": "🏠",
    "Bed Type": "🛏️",
    "View": "👁️",
    "Balcony": "🚪",
    "Terrace": "🌿",
    "Air Conditioning": "❄️",
    "Wi-Fi": "📶",
    "Breakfast Included": "☕",
    "Private Bathroom": "🚿",
    "Kitchen / Kitchenette": "👨‍🍳",
    "Washing Machine": "🧺",
    "Room Size (sqm)": "📏",
    "Number of Rooms": "🏠",
    "Maximum Occupancy": "👥",
    "TV": "📺",
    "Mini Bar": "🍷",
    "Safe Deposit Box": "🔒",
    "Extra Bed": "🛏️",
    "Wheelchair Accessible": "♿",
    "Private Pool": "🏊",
    "Jacuzzi / Spa": "✨",
    "Smoking Allowed": "🚬",
    "Pets Allowed": "🐾",
    "Housekeeping": "🧹",
    "Parking": "🚗",
    "Room Service": "🛎️",
    "Self Check-in": "🔑",
    "House Rules": "⏰",
    "Number of beds": "🛏️",
    "Number of bathrooms": "🚿",
  }
  return iconMap[optionName] || "🏠"
}

const getValueColor = (value) => {
  if (value === "Yes" || value === "Free" || value === "Daily") {
    return "bg-green-100 text-green-800 hover:bg-green-200"
  }
  if (value === "None") {
    return "bg-gray-100 text-gray-600 hover:bg-gray-200"
  }
  if (value === "Smoking") {
    return "bg-orange-100 text-orange-800 hover:bg-orange-200"
  }
  return "bg-blue-100 text-blue-800 hover:bg-blue-200"
}

const categories = computed(() => [
  {
    title: "Accommodation Details",
    options: accommodationOptions.filter((opt) =>
      [
        "Accommodation Type",
        "Room Size (sqm)",
        "Number of Rooms",
        "Maximum Occupancy",
        "Number of beds",
        "Number of bathrooms",
      ].includes(opt.optionName)
    ),
  },
  {
    title: "Room Features",
    options: accommodationOptions.filter((opt) =>
      ["Bed Type", "View", "Balcony", "Terrace", "Private Bathroom", "Kitchen / Kitchenette", "Extra Bed"].includes(
        opt.optionName
      )
    ),
  },
  {
    title: "Amenities & Comfort",
    options: accommodationOptions.filter((opt) =>
      ["Air Conditioning", "Wi-Fi", "TV", "Mini Bar", "Safe Deposit Box", "Washing Machine"].includes(opt.optionName)
    ),
  },
  {
    title: "Premium Features",
    options: accommodationOptions.filter((opt) => ["Private Pool", "Jacuzzi / Spa"].includes(opt.optionName)),
  },
  {
    title: "Services",
    options: accommodationOptions.filter((opt) =>
      ["Breakfast Included", "Housekeeping", "Room Service", "Parking", "Self Check-in"].includes(opt.optionName)
    ),
  },
  {
    title: "Policies & Accessibility",
    options: accommodationOptions.filter((opt) =>
      ["Wheelchair Accessible", "Smoking Allowed", "Pets Allowed", "House Rules"].includes(opt.optionName)
    ),
  },
])

const includedFeaturesCount = computed(() =>
  accommodationOptions.filter((opt) => opt.value === "Yes").length
)
</script>
