<template>
  <div class="bg-white rounded-lg shadow-md p-4 space-y-6">
    <h2 class="font-bold text-lg mb-4">{{ $t('appServices.hotel.filterBy') }} :</h2>

    <!-- Price Range -->
    <div>
      <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('price')">
        <h3 class="font-medium text-lg">{{ $t('appServices.hotel.priceRange') }}</h3>
        <span  class="bg-customRed text-white pt-0.5 rounded-full w-4 h-4 flex items-center justify-center text-sm">
          {{ expanded.price ? '-' : '+' }}
        </span>
      </div>
      <div v-show="expanded.price" class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
        <div v-for="option in priceRangeOptions" :key="option.id" class="flex items-center">
          <input type="checkbox" :id="'price-' + option.id" v-model="priceRange" :value="option.id"
            class="accent-purple-500 mr-2" @change="updateFilters" />
          <label :for="'price-' + option.id" class="cursor-pointer">
            {{ option.label }}
          </label>
        </div>
      </div>
    </div>
    <hr />

    <!-- Capacity -->
    <div>
      <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('capacity')">
        <h3 class="font-medium text-lg">{{ $t('capacity') }}</h3>
        <span class="bg-customRed text-white pt-0.5 rounded-full w-4 h-4 flex items-center justify-center text-sm">{{ expanded.capacity ? '-' : '+' }}</span>
      </div>
      <div v-show="expanded.capacity" class="mt-2">
        <input type="number" name="capacity" id="capacity" min="1"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm" placeholder="Ex: 5"
          v-model="capacity" @change="updateFilters" />
      </div>
    </div>
    <hr />

    <!-- Arrival & Departure -->
    <!-- <div>
      <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('dates')">
        <h3 class="font-medium text-lg">{{ $t('dates') }}</h3>
        <span  class="bg-customRed text-white pt-0.5 rounded-full w-4 h-4 flex items-center justify-center text-sm" >{{ expanded.dates ? '-' : '+' }}</span>
      </div>
      <div v-show="expanded.dates" class="mt-2 space-y-2">
        <div>
          <label for="arrival">{{ $t('arrival') }}</label>
          <input type="date" id="arrival" v-model="arrival"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
            @change="updateFilters" />
        </div>
        <div>
          <label for="departure">{{ $t('departure') }}</label>
          <input type="date" id="departure" v-model="departure"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
            @change="updateFilters" />
        </div>
      </div>
    </div>
    <hr /> -->

    <!-- Star Rating -->
    <div>
      <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('stars')">
        <h3 class="font-medium text-lg">{{ $t('appServices.hotel.starRating') }}</h3>
        <span  class="bg-customRed text-white pt-0.5 rounded-full w-4 h-4 flex items-center justify-center text-sm">{{ expanded.stars ? '-' : '+' }}</span>
      </div>
      <div v-show="expanded.stars" class="mt-2 space-y-2">
        <div v-for="rating in [5, 4, 3, 2, 1]" :key="rating" class="flex items-center space-x-2">
          <input type="checkbox" :id="`star-${rating}`" v-model="starRating" :value="rating"
            class="accent-purple-500 cursor-pointer" @change="updateFilters" />
          <label :for="`star-${rating}`" class="flex items-center cursor-pointer space-x-1">
            <template v-for="i in 5" :key="i">
              <StarIcon size="16" :class="i <= rating ? 'text-customRed fill-customRed' : 'text-gray-300'" />
            </template>
          </label>
        </div>
      </div>
    </div>
    <hr />

    <!-- Amenities -->
    <div>
      <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('amenities')">
        <h3 class="font-medium text-lg">{{ $t('appServices.hotel.amenities') }}</h3>
        <span  class="bg-customRed text-white pt-0.5 rounded-full w-4 h-4 flex items-center justify-center text-sm">{{ expanded.amenities ? '-' : '+' }}</span>
      </div>
      <div v-show="expanded.amenities" class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
        <div v-for="amenity in amenitiesList" :key="amenity.id" class="flex items-center">
          <input type="checkbox" :id="amenity.id" v-model="amenities" :value="amenity.id" class="accent-purple-500 mr-2"
            @change="updateFilters" />
          <label :for="amenity.id" class="flex items-center cursor-pointer">
            <component :is="amenity.icon" size="16" class="mr-2" />
            <span>{{ amenity.label }}</span>
          </label>
        </div>
      </div>
    </div>
    <hr />

    <!-- Property Type -->
    <div>
      <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('property')">
        <h3 class="font-medium text-lg">{{ $t('appServices.hotel.propertyType') }}</h3>
        <span  class="bg-customRed text-white pt-0.5 rounded-full w-4 h-4 flex items-center justify-center text-sm">{{ expanded.property ? '-' : '+' }}</span>
      </div>
      <div v-show="expanded.property" class="mt-2 space-y-2">
        <div v-for="type in propertyTypeList" :key="type.id" class="flex items-center">
          <input type="checkbox" :id="type.id" v-model="propertyTypes" :value="type.id" class="accent-purple-500 mr-2"
            @change="updateFilters" />
          <label :for="type.id" class="cursor-pointer">{{ type.label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  WifiIcon, SquareParkingIcon, AccessibilityIcon, SnowflakeIcon,
  SunIcon, WavesLadderIcon, DumbbellIcon, SpadeIcon,
  UtensilsIcon, WineIcon, BabyIcon, DogIcon, BriefcaseIcon, StarIcon
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  activeFilters: Object,
  onFilterChange: Function
})

const expanded = ref({
  price: true,
  capacity: false,
  dates: false,
  stars: false,
  amenities: false,
  property: false
})

function toggleSection(section) {
  expanded.value[section] = !expanded.value[section]
}

const priceRangeOptions = [
  { id: '$', label: t('appServices.hotel.budget') },
  { id: '$$', label: t('appServices.hotel.standard') },
  { id: '$$$', label: t('appServices.hotel.premium') },
  { id: '$$$$', label: t('appServices.hotel.luxury') }
];

const starRating = ref([...(props.activeFilters?.starRating || [])]);
const amenities = ref([...(props.activeFilters?.amenities || [])]);
const propertyTypes = ref([...(props.activeFilters?.propertyTypes || [])]);
const priceRange = ref(
  (props.activeFilters?.priceRange || []).filter(r =>
    typeof r === 'string' && priceRangeOptions.some(o => o.id === r)
  )
);
const capacity = ref(props.activeFilters?.capacity || null);
const arrival = ref(props.activeFilters?.arrival || null);
const departure = ref(props.activeFilters?.departure || null);

const propertyTypeList = [
  { id: 'room', label: t('appServices.hotel.room') },
  { id: 'apartment', label: t('appServices.hotel.apartment') },
  { id: 'suite', label: t('appServices.hotel.suite') },
  { id: 'duplex', label: t('appServices.hotel.duplex') }
]

// amenitiesList for the hotel filter
// This list contains the amenities available for filtering hotels
const amenitiesList = computed(() => [
  { id: 'wifi', label: t('appServices.hotel.freeWifi'), icon: WifiIcon },
  { id: 'parking', label: t('appServices.hotel.parking'), icon: SquareParkingIcon },
  { id: 'pmr', label: t('appServices.hotel.accessiblePmr'), icon: AccessibilityIcon },
  { id: 'ac', label: t('appServices.hotel.airConditioning'), icon: SnowflakeIcon },
  { id: 'terrace', label: t('appServices.hotel.terrace'), icon: SunIcon },
  { id: 'pool', label: t('appServices.hotel.pool'), icon: WavesLadderIcon },
  { id: 'gym', label: t('appServices.hotel.fitnessCenter'), icon: DumbbellIcon },
  { id: 'spa', label: t('appServices.hotel.spa'), icon: SpadeIcon },
  { id: 'restaurant', label: t('appServices.hotel.restaurant'), icon: UtensilsIcon },
  { id: 'bar', label: t('appServices.hotel.bar'), icon: WineIcon },
  { id: 'kids', label: t('appServices.hotel.kidsSpace'), icon: BabyIcon },
  { id: 'pets', label: t('appServices.hotel.petsAllowed'), icon: DogIcon },
  { id: 'meeting', label: t('appServices.hotel.meetingRoom'), icon: BriefcaseIcon }
])

const updateFilters = () => {
  props.onFilterChange({
    priceRange: priceRange.value,
    starRating: starRating.value,
    amenities: amenities.value,
    propertyTypes: propertyTypes.value,
    capacity: capacity.value,
    arrival: arrival.value,
    departure: departure.value
  })
  console.log('Filters updated:', {
    priceRange: priceRange.value,
    starRating: starRating.value,
    amenities: amenities.value,
    propertyTypes: propertyTypes.value,
    capacity: capacity.value,
    arrival: arrival.value,
    departure: departure.value
  })
}
</script>

