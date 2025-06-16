<script setup>
import { ref, computed, onMounted } from 'vue'
import HotelCard from './HotelCard.vue'
import { ArrowUpDownIcon } from 'lucide-vue-next'
import "vue-skeletor/dist/vue-skeletor.css"
import { Skeletor } from "vue-skeletor"
import { getServiceProductByDate } from '@/servicesApi/hotelServicesApi.js'
// import { useMIHStore } from '@/stores/manageHotelInterface'
import { useDataStore } from '@/stores/dataStore'
import LoaodingSpinner from '../spiner/LoaodingSpinner.vue'
import { useServiceStore } from '@/stores/useServiceStore'
// const hotelStore = useMIHStore();
// const rooms = ref([]);
const sercivesHotels = ref([]);
const dataStore = useDataStore()
const services = ref([]);
const isLoading = ref(true);
const isListed = ref(false)
const props = defineProps({
  searchParams: Object,
  filters: Object,
  sortOption: { type: String, default: 'recommended' }
})

const emit = defineEmits(['sortChange'])

const filteredHotels = computed(() => {

  if (!sercivesHotels.value || !Array.isArray(sercivesHotels.value))  return []
  let hotels = [...sercivesHotels.value]
console.log('filteredHotels', hotels)
  const selectedRanges = props.filters?.priceRange || []
  const selectedAmenities = props.filters?.amenities || []

  // Ne filtrer que si les valeurs sont des chaînes comme '$$', '$$$$', etc.
  const isSymbolRange = selectedRanges.every(val => typeof val === 'string' && val.includes('$'))

  if (selectedRanges.length && isSymbolRange) {
    hotels = hotels.filter(hotel =>
      selectedRanges.includes(hotel.priceRange)
    )
  }

  if (selectedAmenities.length) {
    const amenityLabels = {
      wifi: "Wi-Fi",
      parking: "Parking",
      pmr: "Accessible PMR",
      ac: "Climatisation",
      terrace: "Terrasse",
      pool: "Pool",
      gym: "Gym",
      spa: "Spa",
      restaurant: "Restaurant",
      bar: "Bar",
      kids: "Kids",
      pets: "Pets",
      meeting: "Room Meeting"
    }

    hotels = hotels.filter(hotel => {
      if (!Array.isArray(hotel.facilities)) return false
      isListed.value = true
      return selectedAmenities.every(amenityId => {
        const facilityName = amenityLabels[amenityId]

        if (!facilityName) {
          console.warn(`Amenity ID "${amenityId}" not found in amenityLabels.`)
          return false
        }

        const facilityFound = hotel.facilities.includes(facilityName)

        console.log(`Checking hotel "${hotel.name}" for facility "${facilityName}": ${facilityFound}`)
        return facilityFound
      })
    })
  }

  return hotels
})


const sortedHotels = computed(() => {
  console.log('sortedHotels', filteredHotels.value)
  const hotels = filteredHotels.value
  if (!hotels.length) return []

  // Créer une copie pour le tri
  const sorted = [...hotels]

  switch (props.sortOption) {
    case 'price-low':
      return sorted.sort((a, b) => (a.price || 0) - (b.price || 0))
    case 'price-high':
      return sorted.sort((a, b) => (b.price || 0) - (a.price || 0))
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    default:
      return sorted
  }
})

function formatDate(dateStr) {
  const today = new Date();
  const year = today.getFullYear();

  if (dateStr.startsWith("Today")) {
    return today.toISOString().split("T")[0];
  }

  if (dateStr.startsWith("Tomorrow")) {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }

  // Cas normal : extraire "Jun 10"
  const [_, monthStr, dayStr] = dateStr.match(/(\w+)\s(\d+)/) || [];
  if (monthStr && dayStr) {
    const date = new Date(`${monthStr} ${dayStr}, ${year}`);
    return date.toISOString().split("T")[0];
  }

  return null;
}

const serviceStore = useServiceStore()


onMounted(async () => {
  console.log('Chargement des services avec les paramètres:', dataStore.searchFrom)

  // Vérification des données de recherche
  if (!dataStore.searchFrom.destination || !dataStore.searchFrom.dateAller || !dataStore.searchFrom.dateRetour) {
    console.warn('Données de recherche manquantes, impossible de charger les services.')
    return
  }
  // Total guest count
  const guest_count = dataStore.searchFrom.rooms.reduce((sum, room) => {
    return sum + (room.adults || 0) + (room.childrens || 0);
  }, 0);

  // Construction des params
  const params = {
    address: encodeURIComponent(dataStore.searchFrom.destination),
    start_date: formatDate(dataStore.searchFrom.dateAller),
    end_date: formatDate(dataStore.searchFrom.dateRetour),
    guest_count,
  };
  try {
    isLoading.value = true
    console.log("Params envoyés à l'API :", params);
    const response = await getServiceProductByDate(params);
    console.log('Réponse du service:', response)
    console.log('Réponse brute du service:', response)
    // Assurez-vous que la réponse contient bien un tableau data
    services.value = response.data ? response : { data: response }
    sercivesHotels.value = services.value.data.hotels || []
    const servicesData = response.data ? response.data : response
      serviceStore.setServices(servicesData)
      console.log('Services hotel:', serviceStore.hotels)


    // rooms.value = services.value.data.serviceProducts || []
    console.log('Services hotel:', sercivesHotels.value)
    console.log('Services chargés (raw):', JSON.parse(JSON.stringify(services.value.data)))
    console.log('Services chargés utilisation:', services.value.data.hotels)
  } catch (error) {
    console.error('Erreur lors du chargement:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">
        <!-- <span v-if="!sortedHotels.length">{{ $t('appServices.hotel.justAMoment') }}</span> -->
        <span v-if="sortedHotels.length">{{ sortedHotels.length }} {{ $t('appServices.hotel.hotel') }}<span v-if="sortedHotels.length>1">s</span> {{ $t('appServices.hotel.found') }}<span v-if="sortedHotels.length>1">s </span></span>
        <span v-if="searchParams?.location && sortedHotels.length"> {{ $t('to') }} {{ searchParams.location }}</span>
      </h2>

      <div class="flex items-center">
        <span class="mr-2 text-sm">{{ $t('appServices.hotel.sortBy') }}</span>
        <div class="relative">
          <select :value="sortOption" @change="emit('sortChange', $event.target.value)"
            class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent">
            <option value="recommended">{{ $t('appServices.hotel.recommended') }}</option>
            <option value="price-low">{{ $t('appServices.hotel.priceLowToHigh') }}</option>
            <option value="price-high">{{ $t('appServices.hotel.priceHighToLow') }}</option>
            <option value="rating">{{ $t('appServices.hotel.guestRating') }}</option>
          </select>
          <ArrowUpDownIcon size="16"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-customRed" />
        </div>
      </div>
    </div>
    <div >

    <!-- Liste des hôtels -->
    <div class="space-y-4">
      <template v-if="sortedHotels.length > 0">
        <HotelCard v-for="hotel in sortedHotels" :key="hotel.id || hotel._id || Math.random()" :hotel="hotel" />
      </template>

      <div v-else class="bg-white p-6 rounded-lg shadow-md text-center">
        <p class="text-lg text-gray-600">
          {{ $t('appServices.hotel.noHotelsMatch') }}
        </p>
        <p class="text-sm text-gray-500 mt-2">
          {{ $t('appServices.hotel.adjustFilters') }}
        </p>
      </div>
    </div>
    </div>
    <!-- Squelettes de chargement -->
  <LoaodingSpinner v-if="isLoading"/>
  </div>
</template>
