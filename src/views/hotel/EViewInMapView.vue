<template>
    <router-link to="/all_service/PLACE-HOTEL-001"
        class="fixed top-0 left-0 w-full px-10 py-5 flex items-center bg-red-200 justify-end z-[999]">
        <X size="16" class="bg-red-400 rounded-full w-7 h-7 m-1.5" />
        <span>Quitter la carte</span>
    </router-link>
    <div class="relative w-full h-[1030px] items-center sm:w-full lg:w-full xl:w-full">
        <MapView />
    </div>
    <div class="fixed bottom-12 md:bottom-0 w-full flex items-center bg-transparent justify-center z-[999]">
        <div v-for="hotel in hotels" :key="hotel.id" class="w-[500px] h-[250px] sm:w-[300px] lg:w-[1000px] p-3 ">
            <HotelCard :hotel="hotel" />
        </div>
    </div>
</template>

<script setup>
// import MapView from '@/components/services/MapView.vue'
import { ref } from 'vue';
import MapView from '@/components/services/MapView.vue';
import HotelCard from '@/components/HotelCard.vue';
import {
    X,
} from 'lucide-vue-next';

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
    }
])
</script>