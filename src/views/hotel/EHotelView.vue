<script setup>
import { ref } from 'vue'
// import Header from '@/components/HeaderHotel.vue'
import HotelList from '@/components/HotelList.vue'
import Filters from '@/components/FilterHotel.vue'
import MapView from '@/components/services/MapView.vue'

// Reactive state
const searchParams = ref({
  location: '',
  checkIn: null,
  checkOut: null,
  guests: 1,
  rooms: 1
})

const activeFilters = ref({
  priceRange: [0, 1000],
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

const handleSortChange = (option) => {
  sortOption.value = option
}
</script>

<template>


  <div class="min-h-screen bg-gray-50">
    <!-- <Header /> -->
    <main class="container mx-auto px-4 py-6">
      <SearchHotel />
      <div class="flex flex-col md:flex-row gap-6 mt-6">
        <!-- Sidebar Filters -->

        <div class="w-full md:w-1/4 ">
          <router-link to="/viewInMap" >
          <div class="max-w-sm rounded-md mb-4 border bg-white hidden md:block">
            <div class="w-full h-[200px] md:h-[500px] lg:h-[100px] ">
                <MapView />
            </div>
            <div class="border-b"></div>
            <div class="px-6 py-4">
              <div class="font-bold text-center mb-2">Afficher la carte</div>
            </div>
          </div>
        </router-link>

        <router-link to="/viewInMap" >
          <div class="max-w-sm rounded-md mb-4 border bg-white md:hidden">
            <!-- <div class="w-full h-[200px] md:h-[500px] lg:h-[100px] ">
                <MapView />
            </div> -->
            <div class="border-b"></div>
            <div class="px-6 py-4">
              <div class="font-bold text-center mb-2">Afficher la carte</div>
            </div>
          </div>
        </router-link>


          <Filters @filterChange="handleFilterChange" :activeFilters="activeFilters" />
        </div>

        <!-- Hotel List -->
        <div class="w-full md:w-3/4">
          <HotelList :searchParams="searchParams" :filters="activeFilters" :sortOption="sortOption"
            @sortChange="handleSortChange" />
        </div>
      </div>
    </main>
  </div>


</template>
