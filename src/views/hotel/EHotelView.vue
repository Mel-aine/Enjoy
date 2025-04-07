<script setup>
import { ref } from 'vue'
// import Header from '@/components/HeaderHotel.vue'
import HotelList from '@/components/HotelList.vue'
import Filters from '@/components/FilterHotel.vue'
import Map from '@/components/map/Map.vue'
import SearchHotel from '@/components/search/SearchHotel.vue'
import { useMIHStore } from '@/stores/manageHotelInterface';
import BookingFlow from '@/components/hotel/BookingFlow.vue'
import { useRouter } from 'vue-router';


const router = useRouter();

const hotelStore = useMIHStore();

// Reactive state
const searchParams = ref({
  location: '',
  checkIn: null,
  checkOut: null,
  guests: 1,
  rooms: 1
})

const activeFilters = ref({
  priceRange: [20000, 40000],
  starRating: [],
  amenities: []
})
const hotels = [
  {
    name: "Hôtel le Mbayang",
    lat: 3.8485,
    lng: 11.5022,
    address: "Yaoundé, Cameroun, Avenue Mbayang",
    rating: 4.5, // Note de l'hôtel
    category: "Luxury",
  },
  {
    name: "Hôtel Central",
    lat: 4.0523,
    lng: 9.7085,
    address: "Douala, Cameroun, Rue Deido",
    rating: 3.8,
    category: "Mid-range",
  },
  {
    name: "Hôtel Kribi Beach Resort",
    lat: 2.9443,
    lng: 9.9072,
    address: "Kribi, Cameroun, Plage de Kribi",
    rating: 4.2,
    category: "Resort",
  },
  {
    name: "Hôtel des Lacs",
    lat: 5.9667,
    lng: 10.1500,
    address: "Bafoussam, Cameroun, Quartier des Lacs",
    rating: 3.5,
    category: "Budget",
  },
  {
    name: "Grand Hôtel Douala",
    lat: 4.0500,
    lng: 9.7070,
    address: "Douala, Cameroun, Boulevard de la République",
    rating: 4.7,
    category: "Luxury",
  },
  {
    name: "Hôtel La Palm",
    lat: 3.9200,
    lng: 11.4576,
    address: "Yaoundé, Cameroun, Boulevard du 20 Mai",
    rating: 4.0,
    category: "Mid-range",
  },
];
const sortOption = ref('recommended')

// Event handlers
// const handleSearch = (params) => {
//   searchParams.value = params
// }

const handleFilterChange = (filters) => {
  activeFilters.value = filters
}

const handleSearch = () =>{
  router.push('/hotelList'); // Redirige vers la route /bookingHotel

}
const handleSortChange = (option) => {
  sortOption.value = option
}
</script>

<template>
    <div class="mt-20"><SearchHotel @search="handleSearch"/></div>
  <div class="min-h-screen bg-gray-50">
    <main class="container mx-auto px-4 py-20">
      <!-- <SearchHotel /> -->
      <div class="flex flex-col md:flex-row gap-6 mt-6">
        <!-- Sidebar Filters -->

        <div v-show="hotelStore.isListed" class="w-full  md:w-1/4 ">
          <router-link to="/viewInMap" class="relative hidden md:block">
          <div class="max-w-sm rounded-md mb-4 border bg-white ">
            <div class="w-full rounded border border-gray-300"> <Map :places="hotels" size="sm" :showMarkers="false"/></div>
            <div class="border-b"></div>
            <div class="px-6 py-4">
              <div class="font-bold text-center mb-2">{{ $t('appServices.hotel.displayCard') }}</div>
            </div>
          </div>
        </router-link>

        <router-link to="/viewInMap" class="md:hidden">
          <div class="max-w-sm rounded-md mb-4 border bg-white">
            <!-- <div class="w-full h-[200px] md:h-[500px] lg:h-[100px] ">
                <MapView />
            </div> -->
            <div class="border-b"></div>
            <div class="px-6 py-4">
              <div class="font-bold text-center mb-2">{{ $t('appServices.hotel.displayCard') }}</div>
            </div>
          </div>
        </router-link>
          <Filters @filterChange="handleFilterChange" :activeFilters="activeFilters" />
        </div>

        <!-- Hotel List -->
        <div v-show="hotelStore.isListed" class="w-full md:w-3/4">
          <HotelList :searchParams="searchParams" :filters="activeFilters" :sortOption="sortOption"
            @sortChange="handleSortChange" />
        </div>
      </div>
       <div v-show="hotelStore.isSingleBooking">
          <BookingFlow></BookingFlow>
      </div>
      <!-- <div v-show="hotelStore.isPaymentStepBooking">

      </div>
      <div v-show="hotelStore.isConfirmedBooking">

      </div> -->
    </main>
  </div>


</template>
