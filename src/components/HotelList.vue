<script setup>
import { ref, computed } from 'vue'
import HotelCard from './HotelCard.vue'
import { ArrowUpDownIcon } from 'lucide-vue-next'

// Mock data
const hotels = ref([
  {
    id: 1,
    name: 'Grand Plaza Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 4.8,
    reviews: 1243,
    price: 299,
    location: 'Downtown',
    amenities: ['wifi', 'breakfast', 'pool', 'gym'],
    stars: 5,
    description: 'Luxury hotel in the heart of the city with panoramic views.'
  },
  {
    id: 2,
    name: 'Seaside Resort & Spa',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 4.6,
    reviews: 879,
    price: 349,
    location: 'Beachfront',
    amenities: ['wifi', 'pool', 'gym'],
    stars: 5,
    description: 'Beachfront resort with full-service spa and multiple dining options.'
  },
  {
    id: 3,
    name: 'City Comfort Inn',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 4.2,
    reviews: 543,
    price: 129,
    location: 'Midtown',
    amenities: ['wifi', 'breakfast'],
    stars: 3,
    description: 'Comfortable and affordable accommodation with modern amenities.'
  },
  {
    id: 4,
    name: 'Mountain View Lodge',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 4.5,
    reviews: 328,
    price: 189,
    location: 'Mountain Range',
    amenities: ['wifi', 'breakfast', 'gym'],
    stars: 4,
    description: 'Rustic lodge with stunning mountain views and outdoor activities.'
  }
])

const props = defineProps({
  searchParams: Object,
  filters: Object,
  sortOption: String
})

const emit = defineEmits(['sortChange'])

// Filtrage des hôtels
const filteredHotels = computed(() => {
  return hotels.value.filter(hotel => {
    if (hotel.price < props.filters.priceRange[0] || hotel.price > props.filters.priceRange[1]) {
      return false
    }
    if (props.filters.starRating.length > 0 && !props.filters.starRating.includes(hotel.stars)) {
      return false
    }
    if (props.filters.amenities.length > 0) {
      const hasAllAmenities = props.filters.amenities.every(amenity => hotel.amenities.includes(amenity))
      if (!hasAllAmenities) return false
    }
    return true
  })
})

// Tri des hôtels
const sortedHotels = computed(() => {
  return [...filteredHotels.value].sort((a, b) => {
    switch (props.sortOption) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">
        {{ filteredHotels.length }} hotels found
        <span v-if="searchParams.location"> in {{ searchParams.location }}</span>
      </h2>
      
      <div class="flex items-center">
        <span class="mr-2 text-sm">Sort by:</span>
        <div class="relative">
          <select 
            :value="sortOption"
            @change="emit('sortChange', $event.target.value)"
            class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-customRed focus:border-transparent"
          >
            <option value="recommended">Recommended</option>
            <option value="price-low">Price (low to high)</option>
            <option value="price-high">Price (high to low)</option>
            <option value="rating">Guest Rating</option>
          </select>
          <ArrowUpDownIcon 
            size="16"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-customRed"
          />
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <template v-if="sortedHotels.length > 0">
        <div v-for="hotel in sortedHotels" :key="hotel.id" >
            <HotelCard :hotel="hotel" />
        </div>
        <!-- <HotelCard v-for="hotel in sortedHotels" :key="hotel.id" :hotel="hotel" /> -->
      </template>
      <div v-else class="bg-white p-6 rounded-lg shadow-md text-center">
        <p class="text-lg text-gray-600">
          No hotels match your current filters.
        </p>
        <p class="text-sm text-gray-500 mt-2">
          Try adjusting your filters to see more results.
        </p>
      </div>
    </div>
  </div>
</template>
