<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

// import Header from '@/components/HeaderHotel.vue'
import HotelList from '@/components/hotel/HotelList.vue'
import Filters from '@/components/hotel/FilterHotel.vue'
import Map from '@/components/map/Map.vue'
import SearchHotel from '@/components/search/SearchHotel.vue'
import { useMIHStore } from '@/stores/manageHotelInterface';
import BookingFlow from '@/components/hotel/BookingFlow.vue'
import { useRouter } from 'vue-router';
import { useDataStore } from '@/stores/dataStore'
import MapView from '../../components/services/MapView.vue';


const router = useRouter();
const route = useRoute();
const hotelStore = useMIHStore();
const dataStore = useDataStore()

const totalPages = ref(0)

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
  amenities: [],
  propertyTypes: [],
  capacity: 0,
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

const handleFilterChange = (filters) => {
  activeFilters.value = filters
}

const handleSearch = (params) => {
  const city = params.destination?.toLowerCase() || 'all';
  console.log('city', city)
  router.push(`/hotelList/${city}`);
  dataStore.setSearchParams(params);
  hotelStore.listHotel();
  console.log("data store zhere E hotel view", dataStore.searchFrom);
};
const handleSortChange = (option) => {
  sortOption.value = option
}

watch(() => route.params.city, (newCity) => {
  // chaque fois que la ville change => tu mets à jour les données
  console.log("🔁 Ville changée :", newCity); // Ajoute ceci

  searchParams.value.location = newCity;
  // ici tu peux relancer la recherche ou un appel API
}, { immediate: true });
</script>

<template>
  <div class="pt-20  border-t pb-20 ">
    <SearchHotel @search="handleSearch" />
  </div>



  <div class="flex flex-col md:flex-row h-auto md:h-[90vh]">
    <!-- Première div -->
    <div class=" w-full md:w-2/12 bg-white pt-2">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Sidebar Filters -->

        <div v-show="hotelStore.isListed" class="w-full">
           <router-link to="/viewInMap" class="relative hidden md:block">
            <div class="max-w-sm rounded-md mb-4 border bg-white ">
              <div class="w-full rounded border border-gray-300"> <Map :places="hotels" size="sm"
                  :showMarkers="false" /></div>
              <div class="border-b"></div>
              <div class="px-6 py-4">
                <div class="font-bold text-center mb-2">{{ $t('appServices.hotel.displayCard') }}</div>
              </div>
            </div>
          </router-link>

         <router-link to="/viewInMap" class="md:hidden">
            <div class="max-w-sm rounded-md mb-4 border bg-white">
             <div class="w-full h-[200px] md:h-[500px] lg:h-[100px] ">
                <MapView />
            </div>  
              <div class="border-b"></div>
              <div class="px-6 py-4">
                <div class="font-bold text-center mb-2">{{ $t('appServices.hotel.displayCard') }}</div>
              </div>
            </div>
          </router-link> 
          <div class=" md:sticky">
            <Filters @filterChange="handleFilterChange" :activeFilters="activeFilters" />
          </div>
        </div>


      </div>
    </div>

    <!-- Deuxième div -->
    <div class="w-full md:w-5/12 bg-white p-4 pt-2">
      <div class="flex flex-col z-0 lg:flex-row w-full  bg-white">
        <!-- Bouton Hamburger pour les petites tailles -->
        <button @click="toggleMenu"
          class="md:block absolute right-5 px-2 items-center p-1 bg-gray-200 rounded-full mt-2 lg:hidden space-x-1 ">
          <BaseIcon name="Filter" size="20" stroke-width="2" class="text-black inline-flex" />
          <span class="text-sm font-medium">{{ $t('filter') }}</span>
        </button>
        <!-- Sidebar filtre en md (tablette) -->
        <transition name="slide">
          <div v-if="showMenu" class="fixed inset-0 bg-black bg-opacity-40 z-50 overflow-y-auto scrollbar-hidden">
            <div
              class="w-[450px]  text-white transition-all bg-white  border-gray-100 sm:p-4 p-3 rounded-r-lg  "
              @click.stop>
              <button @click="showMenu = false" class="flex  top-5 text-black bg-gray-200 rounded-full">
                <svg class="h-7 w-7 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="11 7 6 12 11 17" />
                  <polyline points="17 7 12 12 17 17" />
                </svg>
              </button>
              <Filter @optionFilter="optionToSort" @nothing="reDoSort" @price="priceFilter" />
              <div class="space-x-8  pb-8 translate-x-10">
                <button class=" text-purple-500 rounded-full text-lg font-normal px-2">{{ $t('cancel') }}</button>
                <button class=" text-black rounded-full text-lg font-normal px-4 py-2 bg-orange-500">{{
                  $t('applyFilter') }}</button>
              </div>
            </div>
          </div>
        </transition>

        <!-- Contenu principal -->
        <div class="flex-1 flex flex-col  items-start mx-auto px-2  border-gray-100 ">
          <div class="z-0 mx-auto overflow-y-auto scrollbar-hidden">
            <!-- Hotel List -->
            <div v-show="hotelStore.isListed" class="w-full ">
              <HotelList :key="searchParams.location" :searchParams="searchParams" :filters="activeFilters"
                :sortOption="sortOption" @sortChange="handleSortChange" />
            </div>
            <div class="flex justify-center items-center space-x-2 mt-6" v-if="totalPages>1">
              <!-- Bouton Précédent -->
              <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="px-4 py-1 text-sm font-semibold rounded-lg transition duration-300
              hover:bg-gray-200 disabled:text-gray-400 disabled:bg-gray-100">
                <!-- {{ $t('previous') }} -->
                <svg class="h-8 w-8 text-orange-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>

              <!-- Pagination Numérotée -->
              <button v-for="page in totalPages" :key="page" @click="changePage(page)" class="px-3 py-2 text-sm font-semibold rounded-lg transition duration-300
              hover:bg-gray-200"
                :class="{ 'bg-purple-500 text-white': currentPage === page, 'text-gray-700': currentPage !== page }">
                {{ page }}
              </button>

              <!-- Bouton Suivant -->
              <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="px-4 py-1 text-sm font-semibold rounded-lg transition duration-300
            hover:bg-gray-200 disabled:text-gray-400 disabled:bg-gray-100">
                <!-- {{ $t('next') }} -->
                <svg class="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>

    <!-- Troisième div (masquée sur mobile/tablette) -->
    <div class="hidden md:block md:w-5/12 pt-2">
      <div class="h-full w-full">
        <MapView />
      </div>
    </div>
  </div>
</template>
