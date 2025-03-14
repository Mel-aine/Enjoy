<script setup>
import { ref } from 'vue'
import Header from '@/components/HeaderHotel.vue'
import SearchBar from '@/components/SearchBarHotel.vue'
import HotelList from '@/components/HotelList.vue'
import Filters from '@/components/FilterHotel.vue'

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
const handleSearch = (params) => {
  searchParams.value = params
}

const handleFilterChange = (filters) => {
  activeFilters.value = filters
}

const handleSortChange = (option) => {
  sortOption.value = option
}
</script>

<template>
 <ol class="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base">
      <li class="flex w-full relative text-indigo-600  after:content-['']  after:w-full after:h-0.5  after:bg-indigo-600 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
         <div class="block whitespace-nowrap z-10">
             <span class="w-6 h-6 bg-indigo-600 border-2 border-transparent rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-white lg:w-10 lg:h-10">1</span> Step 1
         </div>
      </li>
      <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
         <div class="block whitespace-nowrap z-10">
             <span class="w-6 h-6 bg-indigo-50 border-2 border-indigo-600 rounded-full flex justify-center items-center mx-auto mb-3 text-sm text-indigo-600 lg:w-10 lg:h-10">2</span> Step 2
         </div>
      </li>
      <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5  after:top-3 after:left-4">
         <div class="block whitespace-nowrap z-10">
             <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">3</span> Step 3
         </div>
      </li>
      <li class="flex w-full relative text-gray-900  after:content-['']  after:w-full after:h-0.5  after:bg-gray-200 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4">
         <div class="block whitespace-nowrap z-10">
             <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">4</span> Step 4
         </div>
      </li>
      <li class="flex w-full relative text-gray-900  ">
         <div class="block whitespace-nowrap z-10">
             <span class="w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full flex justify-center items-center mx-auto mb-3 text-sm  lg:w-10 lg:h-10">5</span> Step 5
         </div>
      </li>
      </ol>

  <div class="min-h-screen bg-gray-50">
    <Header />
    <main class="container mx-auto px-4 py-6">
      <SearchBar @search="handleSearch" />
      <div class="flex flex-col md:flex-row gap-6 mt-6">
        <!-- Sidebar Filters -->
        <div class="w-full md:w-1/4">
          <Filters
            @filterChange="handleFilterChange"
            :activeFilters="activeFilters"
          />
        </div>

        <!-- Hotel List -->
        <div class="w-full md:w-3/4">
          <HotelList
            :searchParams="searchParams"
            :filters="activeFilters"
            :sortOption="sortOption"
            @sortChange="handleSortChange"
          />
        </div>
      </div>
    </main>
  </div>
</template>
