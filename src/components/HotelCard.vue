<script setup>
import { ref, computed, } from 'vue'
import {
  // BedDoubleIcon,
  // PlaneIcon,
  // CarIcon,
  WifiIcon,
  UtensilsIcon,
  DumbbellIcon,
  HeartIcon,
  MapPinIcon,
} from 'lucide-vue-next'
import { useMIHStore } from '@/stores/manageHotelInterface';


const props = defineProps({
  hotel: Object
})

// Extraire les valeurs de l'hôtel
const {
  image,
  rating,
  reviews,
  location,
  amenities,
  stars,
  price,
  name
} = props.hotel

// Définir les icônes des équipements
const iconMap = {
  wifi: WifiIcon,
  breakfast: UtensilsIcon,
  gym: DumbbellIcon
}
const isFavorite = ref(false)

// const starsArray = computed(() => {
//   return [...Array(5)].map((_, i) => (i < props.hotel.stars ? 'filled' : 'empty'))
// })
const hotelStore = useMIHStore();


const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}
const handleViewDeal = () => {
  hotelStore.singleBooking();
  // hotelStore.setHotel(props.hotel)
  // hotelStore.setViewDeal(true)

}

</script>

<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <!-- Image -->
        <div class="relative w-full md:w-1/3 h-48 md:h-auto flex-shrink-0">
          <img 
            :src="hotel.image" 
            :alt="hotel.name" 
            class="w-full h-full object-cover"
          />
          <button 
            @click="toggleFavorite" 
            class="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <HeartIcon :class="{ 'text-red-500': isFavorite, 'text-gray-500': !isFavorite }" size="20" />
          </button>
        </div>
  
        <!-- Informations sur l'hôtel -->
        <div class="flex-grow p-4">
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-lg font-bold">{{ hotel.name }}</h3>
              <div class="flex items-center space-x-1">
                <span v-for="(star, index) in renderStars" :key="index">
                  <StarIcon :size="16" :class="star === 'filled' ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'" />
                </span>
                <span class="ml-2 text-sm text-gray-600">
                  {{ hotel.rating }} ({{ hotel.reviews }} {{ $t('appServices.hotel.review') }})
                </span>
              </div>
            </div>
          </div>
  
          <div class="flex items-center text-gray-600 text-sm mt-2">
            <MapPinIcon size="16" class="mr-1" />
            <span>{{ hotel.location }}</span>
          </div>
  
          <p class="mt-2 text-sm text-gray-600">{{ hotel.description }}</p>
  
          <div class="mt-2 flex space-x-2">
            <div v-for="amenity in hotel.amenities" :key="amenity" class="flex items-center">
              <component :is="iconMap[amenity]" size="16" class="text-gray-600" v-if="iconMap[amenity]" />
            </div>
          </div>
        </div>
  
        <!-- Prix et bouton -->
        <div class="w-full md:w-1/3 flex flex-col items-end justify-between p-4">
          <div class="flex items-center bg-green-100 px-2 py-1 rounded text-sm text-green-700">
            <span>{{ $t('appServices.hotel.rating') }}: {{ hotel.rating }} ({{ hotel.reviews }} {{ $t('appServices.hotel.review') }})</span>
          </div>
          <div class="text-right mt-2">
            <div class="text-sm text-gray-500">{{ $t('appServices.hotel.pricePerNight') }}</div>
            <div class="text-xl font-bold">FCFA {{ hotel.price }}</div>
            <div class="text-xs text-gray-500">{{ $t('appServices.hotel.includeTaxesFees') }}</div>
            <button @click="handleViewDeal" class="bg-customRed text-white px-4 py-2 rounded-md hover:text-black mt-2">
              {{ $t('appServices.hotel.viewDeal') }}            
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
