<script setup>
import { ref } from 'vue'
// import Header from '@/components/HeaderHotel.vue'
import HotelList from '@/components/HotelList.vue'
import Filters from '@/components/FilterHotel.vue'
import MapView from '@/components/services/MapView.vue'
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

    <!-- <Header /> -->
    <main class="container mx-auto px-4 py-20">
      <!-- <SearchHotel /> -->
      <div class="flex flex-col md:flex-row gap-6 mt-6">
        <!-- Sidebar Filters -->

        <div v-show="hotelStore.isListed" class="w-full  md:w-1/4 ">
          <router-link to="/viewInMap" class="relative hidden md:block">
          <div class="max-w-sm rounded-md mb-4 border bg-white ">
            <div class=" w-full h-[200px] md:h-[500px] lg:h-[100px] ">
                <MapView />
            </div>
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
