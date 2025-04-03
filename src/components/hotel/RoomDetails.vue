<template>
  <div class="bg-white rounded-xl shadow-sm overflow-hidden">
    <div class="p-6">
      <div class="flex items-start">
        <!-- Image at the beginning -->
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1470"
          alt="Room" class="w-48 h-40 object-cover rounded-lg mr-6" />

        <!-- Content beside the image -->
        <div class="flex-1">

          <div class="flex items-start justify-between space-x-3">
            <span class=" px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-md mb-2">
              {{ $t('appServices.hotel.bestChoice') }}</span>
            <div class="flex space-x-3 mt-1 ">
              <WifiIcon v-if="amenitiesStatus.wifi" size="18" class="text-gray-600" />
              <CoffeeIcon v-if="amenitiesStatus.breakfast" size="18" class="text-gray-600" />
              <WavesLadderIcon v-if="amenitiesStatus.pool" size="18" class="text-gray-600" />
              <DumbbellIcon v-if="amenitiesStatus.gym" size="18" class="text-gray-600" />
            </div>

          </div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2 mt-2" role="title">
            {{ hotelStore.this_hotel?.name || 'Nom indisponible' }}
          </h2>
          <div class="flex items-center space-x-2 mb-4 mt-2">
            <div class="flex">
              <StarIcon v-for="star in stars" :key="star" size="16" class="text-yellow-400 fill-yellow-400" />
            </div>
            <span class="font-medium text-gray-900">4.87</span>
            <span class="text-gray-500">(262 {{ $t('appServices.hotel.review') }}s )</span>
          </div>

          <!-- Icons section (beds, guests, etc.) - moved inside the flex container -->
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2 mt-8">
            <div class="flex items-center space-x-2">
              <BedDoubleIcon size="20" class="text-slate-600" />
              <div>
                <div class="text-sm font-medium text-gray-900">3</div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.beds') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"
                stroke="#475569" stroke-width="2">
                <!-- Carré avec coins arrondis -->
                <rect x="1" y="1" width="18" height="18" rx="3" ry="3" stroke="#475569" />

                <!-- Ligne diagonale -->
                <line x1="4" y1="16" x2="16" y2="4" stroke="#475569" />

                <!-- Pointe de flèche en haut -->
                <polyline points="16,4 14,4 15,6" fill="none" stroke="#475569" />

                <!-- Pointe de flèche en bas -->
                <polyline points="4,16 6,16 5,14" fill="none" stroke="#475569" />
              </svg>
              <div>
                <div class="text-sm font-medium text-gray-900">12 m² </div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.area') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Users2Icon size="20" class="text-slate-600" />
              <div>
                <div class="text-sm font-medium text-gray-900">6</div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.guests') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <Bath size="20" class="text-slate-600" />
              <div>
                <div class="text-sm font-medium text-gray-900">1</div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.bathroom') }} </div>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"
                stroke="#475569" stroke-width="2">
                <path d="M1 16 H6 M6 12 H10 M10 8 H14 M14 4 H18" />
              </svg>
              <div>
                <div class="text-sm font-medium text-gray-900">4</div>
                <div class="text-xs text-gray-500">{{ $t('appServices.hotel.floor') }} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6 py-2">
      <h2 class="font-semibold text-lg -900 mb-4">{{ $t('appServices.hotel.getStarted') }} :</h2>
      <div class="space-y-3 text-gray-600 text-sm">
        <p>Free cancellation until 11:59 PM on May 21, 2022</p>
        <p>
          Your account will be charged on Sunday, May 22, 2022. If you cancel
          by 11:59 PM on Tuesday, May 31, 2022 you'll get your money back!.....
        </p>

        <template v-if="expanded">
          <p>
            You're booking the last available Double or Twin Room with Balcony
            we have at King bed stylish Apartment with Loft style family.
          </p>
          <p>
            Again, by clicking the "BOOK NOW" button you agree to the processing
            of your personal data effected in order to complete this booking.
          </p>
        </template>

        <button class="text-customBlue font-medium flex items-center" @click="toggleExpanded">
          {{ $t('read') }} {{ expanded ? $t('less') : $t('more') }}
          <ChevronDownIcon size="16" class="ml-1 mt-1.5 transform transition-transform"
            :class="{ 'rotate-180': expanded }" />
        </button>
      </div>
    </div>
    <!-- User Details Form start-->
    <div class="bg-white rounded-xl px-6 py-2 shadow-sm">
      <h2 class="font-semibold text-lg text-gray-900 mb-4">{{ $t('appServices.hotel.enterYourDetails') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- First Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            FIRST NAME <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="text" v-model="firstName"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              value="John" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
        </div>

        <!-- Last Name -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            LAST NAME <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="text" v-model="lastName"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              value="Doe" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
        </div>

        <!-- Email Address -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            EMAIL ADDRESS <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input type="email" v-model="emaiAdress"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              value="doejohn@gmail.com" />
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            PHONE NUMBER <span class="text-red-500">*</span>
          </label>
          <div class="relative flex">
            <!-- Country Code Dropdown -->
            <select
              class="px-3 py-2 border border-gray-300 rounded-lg rounded-r-none border-r-0 bg-gray-50 text-gray-500">
              <option>+237</option>
              <option>+33</option>
              <option>+1</option>
            </select>

            <!-- Phone Number Input -->
            <input type="tel" v-model="phoneNumber"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg rounded-l-none focus:ring-2 focus:ring-indigo-500"
              value="567 890 123" />

            <!-- Validation Icon -->
            <div class="absolute right-3 top-1/2 -translate-y-1/2">
              <div class="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon size="12" class="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- User Details Form end-->

    <!-- Additional ways to booking start -->

    <div class="bg-white rounded-xl p-6 shadow-sm">
      <h2 class="font-semibold text-lg text-gray-900 mb-4">Add to your stay</h2>

      <!-- Car Park Section -->
      <div class="border-b" :class="selectedParkingType ? 'pb-6 mb-6' : ''">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <input @click="toggleExtraOption" type="checkbox" class="w-4 h-4 rounded border-customRed" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span> Car park </span>
                <ChevronDownIcon size="16" class="ml-1 mt-1.5" />
              </div>
              <div class="text-sm text-gray-500">The choice of families</div>
            </div>
          </div>
          <div class="text-right">
            <!-- <div class="text-sm text-gray-500">from</div> -->
            <div class="font-medium">
              $20 <span class="text-sm text-gray-500">/night</span>
            </div>
          </div>
        </div>

        <!-- Vehicle Type Selection -->
        <div class="space-y-4" :class="selectedParkingType ? '' : 'hidden'">
          <div>
            <div class="text-sm font-medium text-gray-700 mb-2">VEHICLE TYPE</div>
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
                <div>Motorcycle</div>
                <div class="text-gray-500">$20/night</div>
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
                <div class="text-gray-500">$30/night</div>
              </button>

              <!-- Bus -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedVehicle === 'bus'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedVehicle('bus')">
                <BusFrontIcon class="mb-1" size="30" />
                <div>Bus</div>
                <div class="text-gray-500">$50/night</div>
              </button>
            </div>
          </div>

          <!-- Parking Type Selection -->
          <div>
            <div class="text-sm font-medium text-gray-700 mb-2">PLACE TYPE</div>
            <div class="grid grid-cols-2 gap-3">
              <!-- Default Parking -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedParkingType === 'default'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedParkingType('default')">
                <CarFrontIcon class="mb-1" size="30" />
                <div>Default</div>
              </button>

              <!-- Disabled Parking -->
              <button :class="[
                'p-4 border rounded-lg flex flex-col items-center justify-center text-sm',
                selectedParkingType === 'disabled'
                  ? 'border-customBlue bg-indigo-50'
                  : 'border-gray-200',
              ]" @click="setSelectedParkingType('disabled')">
                <Accessibility class="mb-1" size="30" />
                <div>Disabled Parking spot</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottle of Wine Section -->
      <div class="border-b pb-6">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3 mt-2">
            <input @click="toggleExtraOption" type="checkbox" class="w-4 h-4 rounded text-customRed" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span>Bottle of wine</span>
                <ChevronDownIcon size="16" class="ml-1 mt-1.5" />
              </div>
              <div class="text-sm text-gray-500">
                Ventisquero Reserva Chardonnay/Valle de Casablanca Aconcagua
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-right mt-2">
              <!-- <div class="text-sm text-gray-500">from</div> -->
              <div class="font-medium">
                $50 <span class="text-sm text-gray-500">/piece</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stay of a Pet Section -->
      <div>
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3 mt-2">
            <input @click="toggleExtraOption" type="checkbox" class="w-4 h-4 rounded text-customRed" />
            <div>
              <div class="font-medium flex items-start justify-start">
                <span>Stay of a pet</span>
                <ChevronDownIcon size="16" class="ml-1 mt-1.5" />

              </div>
              <div class="text-sm text-gray-500">
                Traveling with pets can seem like a daunting task
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-right mt-2">
              <!-- <div class="text-sm text-gray-500">from</div> -->
              <div class="font-medium">
                $50 <span class="text-sm text-gray-500">/night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-center">
    <button @click="handleBack"
    class="w-full max-w-60  bg-gray-400 text-white  py-3 rounded-lg mt-4 hover:text-black  transition duration-200">
    Precedent
  </button>
  <h1 class="w-full border border-top mt-4"></h1>
  <button @click="handleNext"
    class="w-full max-w-60 bg-customRed text-white  py-3 rounded-lg mt-4 hover:text-black  transition duration-200">
    {{ $t('appServices.hotel.requestToBook') }}
  </button>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import {
  DumbbellIcon,
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
} from 'lucide-vue-next';
import { useMIHStore } from '@/stores/manageHotelInterface';
// import { useI18n } from 'vue-i18n';
const hotelStore = useMIHStore();
// const { t } = useI18n();
const roomData = ref({
  // Vos données de formulaire ici
});
const emit = defineEmits(['next','back']);

const handleBack = () => {
  emit('back'); 
};
const handleNext = () => {
  emit('next', roomData.value); // Émet les données du formulaire
};
const expanded = ref(false);
const selectedParkingType = ref(false);
const selectedVehicle = ref('motorcycle');
const firstName = ref('');
const lastName = ref('');
const phoneNumber = ref('');
const emaiAdress = ref('');
// Fonction pour basculer entre affiché/caché
const toggleExpanded = () => {
  expanded.value = !expanded.value
}
const toggleExtraOption = () => {
  selectedParkingType.value = !selectedParkingType.value
}
const setSelectedParkingType = (type) => {
  selectedParkingType.value = type
}

const setSelectedVehicle = (vehicle) => {
  selectedVehicle.value = vehicle
}
const stars = ref([1, 2, 3, 4, 5]);

const amenitiesStatus = computed(() => {
  return {
    wifi: hotelStore.this_hotel?.amenities?.includes('wifi') || false,
    breakfast: hotelStore.this_hotel?.amenities?.includes('breakfast') || false,
    pool: hotelStore.this_hotel?.amenities?.includes('pool') || false,
    gym: hotelStore.this_hotel?.amenities?.includes('gym') || false
  };
});



</script>
