<script setup>
import { ref, computed, onMounted } from 'vue'
import HotelCard from './HotelCard.vue'
import { ArrowUpDownIcon } from 'lucide-vue-next'
import "vue-skeletor/dist/vue-skeletor.css"
import { Skeletor } from "vue-skeletor"
import { getServiceProductByDate } from '@/servicesApi/hotelServicesApi.js'
// import { useMIHStore } from '@/stores/manageHotelInterface'
import { useDataStore } from '@/stores/dataStore'
// const hotelStore = useMIHStore();

const dataStore = useDataStore()
const services = ref([]);
const isLoading = ref(true);
const props = defineProps({
  searchParams: Object,
  filters: Object,
  sortOption: { type: String, default: 'recommended' }
})

const emit = defineEmits(['sortChange'])

const filteredHotels = computed(() => {
  if (!services.value.data || !Array.isArray(services.value.data)) return []

  let hotels = [...services.value.data]

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
    address: dataStore.searchFrom.destination,
    start_date: formatDate(dataStore.searchFrom.dateAller),
    end_date: formatDate(dataStore.searchFrom.dateRetour),
    guest_count,
  };
  try {
    isLoading.value = true
    console.log("Params envoyés à l'API :", params);
    const response = await getServiceProductByDate(params); console.log('Réponse du service:', response)
    console.log('Réponse brute du service:', response)
    // Assurez-vous que la réponse contient bien un tableau data
    services.value = response.data ? response : { data: response }

    console.log('Services chargés (raw):', JSON.parse(JSON.stringify(services.value)))
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
        <span v-if="sortedHotels.length">{{ sortedHotels.length }} {{ $t('appServices.hotel.hotelsFound') }} </span>
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

    <!-- Squelettes de chargement -->
    <div v-if="isLoading" class="space-y-4">
      <div v-for="i in 4" :key="`skeleton-${i}`" class="flex items-center p-4 bg-white rounded-lg shadow">
        <Skeletor circle size="60" />
        <div class="ml-4 flex-1">
          <Skeletor width="60%" height="20px" />
          <Skeletor width="40%" height="16px" class="mt-2" />
          <Skeletor width="80%" height="14px" class="mt-2" />
        </div>
      </div>
    </div>

    <!-- Liste des hôtels -->
    <div v-else class="space-y-4">
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
</template>