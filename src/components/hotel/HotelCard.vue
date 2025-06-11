<script setup>
import { ref, computed, } from 'vue'
import { WifiIcon, SquareParkingIcon, AccessibilityIcon, SpadeIcon, SnowflakeIcon, SunIcon, WavesLadderIcon, DumbbellIcon, UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon, HeartIcon, MapPinIcon, CreditCardIcon, DollarSignIcon, CheckIcon, AppleIcon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
import { useMIHStore } from '@/stores/manageHotelInterface';
import router from '@/router';
const iconMap = [
  { id: 'Wi-Fi', label: t('appServices.hotel.freeWifi'), icon: WifiIcon },
  { id: 'Parking', label: t('appServices.hotel.parking'), icon: SquareParkingIcon },
  { id: 'Acessible PMR', label: t('appServices.hotel.accessiblePmr'), icon: AccessibilityIcon },
  { id: 'Air Conditioning', label: t('appServices.hotel.airConditioning'), icon: SnowflakeIcon },
  { id: 'Terrace', label: t('appServices.hotel.terrace'), icon: SunIcon },
  { id: 'Pool', label: t('appServices.hotel.pool'), icon: WavesLadderIcon },
  { id: 'Gym', label: t('appServices.hotel.fitnessCenter'), icon: DumbbellIcon },
  { id: 'Spa', label: t('appServices.hotel.spa'), icon: SpadeIcon },
  { id: 'Restaurant', label: t('appServices.hotel.restaurant'), icon: UtensilsIcon },
  { id: 'Bar', label: t('appServices.hotel.bar'), icon: WineIcon },
  { id: 'Kids', label: t('appServices.hotel.kidsSpace'), icon: BabyIcon },
  { id: 'Pets', label: t('appServices.hotel.petsAllowed'), icon: DogIcon },
  { id: 'Roo Meeting', label: t('appServices.hotel.meetingRoom'), icon: BriefcaseIcon }
]
const iconMapById = computed(() => {
  return Object.fromEntries(iconMap.map(entry => [entry.id, entry]))
})
// let lengthAmenities = null

const dropdownOpen = ref(false)
const amenities = computed(() => {
  try {
    const parsedFacilities = props.hotel.facilities || []
    const filtered = parsedFacilities.filter(facility => iconMapById.value[facility])
    return filtered.slice(0, 5)
  } catch (error) {
    console.warn('Erreur de parsing des facilities:', error)
    return []
  }
})

const other_amenities = computed(() => {
  try {
    const parsedFacilities = props.hotel.facilities || []
    const filtered = parsedFacilities.filter(facility => iconMapById.value[facility])
    return filtered.slice(5)
  } catch (error) {
    console.warn('Erreur de parsing des facilities (other_amenities):', error)
    return []
  }
})

const displayPriceRange = computed(() => {
  switch (props.hotel.priceRange) {
    case '$':
      return t('appServices.hotel.budget')
    case '$$':
      return t('appServices.hotel.standard')
    case '$$$':
      return t('appServices.hotel.premium')
    case '$$$$':
      return t('appServices.hotel.luxury')
    default:
      return ''
  }
})
const props = defineProps({
  hotel: {
    type: Object,
    default: () => ({
      name: '',
      description: '',
      category_id: null,
      address: '',
      phone_number: '',
      email: '',
      website: '',
      openings: {},
      price_range: 0,
      facilities: [],
      policies: [],
      capacity: 0,
      payment_methods: [],
      status: '',
      rating: 0,
      reviews: 0,
      location: '',
      price: 0,
      amenities: []
    })
  }
})
const isFavorite = ref(false)
console.log('ameneties', amenities)
// const starsArray = computed(() => {
//   return [...Array(5)].map((_, i) => (i < props.hotel.stars ? 'filled' : 'empty'))
// })
const hotelStore = useMIHStore();
const location = (() => {
  try {
    const addr = typeof props.hotel.addressService === 'string'
      ? JSON.parse(props.hotel.addressService)
      : props.hotel.addressService;
    return addr?.text || 'Location not available';
  } catch {
    return 'Location not available';
  }
})();
console.log('location', location)
// const location = JSON.parse(props.hotel.address);


const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
const handleViewDeal = () => {
  // hotelStore.singleBooking();
  router.push({
    name: 'booking',
  })
  hotelStore.setHotel(props.hotel)
  console.log('hotel', props.hotel)
  // hotelStore.setViewDeal(true)
  hotelStore.getHotelId(props.hotel.id)
}

</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="flex flex-col md:flex-row">
      <!-- Image -->
      <div class="relative w-full md:w-1/3 h-48 md:h-auto flex-shrink-0">
        <img
          :src="hotel.images ? hotel.images : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1470'"
          :alt="hotel.name" class="w-full h-full object-cover" />
        <button @click="toggleFavorite"
          class="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
          <HeartIcon :class="{ 'text-red-500': isFavorite, 'text-gray-500': !isFavorite }" size="20" />
        </button>
      </div>

      <!-- Informations sur l'hôtel -->
      <div class="flex-grow p-4">
        <div class="flex items-start justify-between">
          <div>
            <router-link :to="`/all_service/${hotel.id}`">
              <h3 class="text-2xl font-bold">{{ hotel.name }}</h3>
            </router-link>
            <div class="flex items-center space-x-1">
              <span v-for="(star, index) in renderStars" :key="index">
                <StarIcon :size="16" :class="star === 'filled' ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'" />
              </span>
              <span class="ml-2 text-sm text-gray-600">
                {{ hotel.averageRating }} ({{ hotel.reviewCount }} {{ $t('appServices.hotel.review') }})
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center text-gray-600 text-md mt-2">
          <MapPinIcon size="16" class="mr-1" />
          <span v-if="location" class="text-sm">{{ location }}</span>
          <span v-if="location?.text">{{ location.text }}</span>

        </div>

        <p class="mt-2 text-sm text-gray-600">{{ hotel.description }}</p>
        <div class="mt-2 flex space-x-2 relative">
          <!-- Icônes visibles -->
          <div v-for="amenity in amenities" :key="amenity" class="flex items-center">
            <component :is="iconMapById[amenity]?.icon" v-if="iconMapById[amenity]" size="16" class="text-gray-600" />
          </div>
          <!-- Bouton -->
          <div v-if="other_amenities.length >= 6" class="relative group">
            <button @click="dropdownOpen = !dropdownOpen"
              class="text-sm text-customBlue border border-customBlue rounded px-2 py-1">
              +{{ other_amenities.length }} {{ t('other') }}
            </button>

            <!-- Infobulle / Dropdown -->
            <transition name="fade">
              <div v-if="dropdownOpen"
                class="absolute left-1/2 transform -translate-x-1/2 bottom-full  mt-2 w-64 bg-white shadow-lg rounded border p-2 z-[999] h-32 overflow-y-auto text-sm text-gray-700">

                <!-- Triangle -->
                <div
                  class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-gray-300 z-[-1]">
                </div>

                <ul>
                  <li v-for="item in other_amenities" :key="item" class="flex items-center space-x-2 mb-2">
                    <component :is="iconMapById[item]?.icon" v-if="iconMapById[item]" size="16" class="text-gray-600" />
                    <span>{{ iconMapById[item]?.label || item }}</span>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>

      </div>
      
      <!-- Prix et bouton -->
      <div class="w-full md:w-1/3 flex flex-col items-end justify-between p-4">
        <div class="flex items-center bg-green-100 px-2 py-1 rounded text-sm text-green-700">
          <span>{{ $t('appServices.hotel.rating') }}: {{ hotel.averageRating }} ({{ hotel.reviewCount }}
            {{ $t('appServices.hotel.review') }})</span>
        </div>
        <div class="text-right mt-2">

          <div class="text-sm text-gray-500">{{ $t('appServices.hotel.priceRange') }}</div>
          <div class="text-xl font-bold">{{ displayPriceRange }}</div>
          <div class="text-xs text-gray-500">{{ $t('appServices.hotel.includeTaxesFees') }}</div>
          <button @click="handleViewDeal" class="bg-customRed text-white px-4 py-2 rounded-md hover:text-black mt-2">
            {{ $t('appServices.hotel.checkAviabilty') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
