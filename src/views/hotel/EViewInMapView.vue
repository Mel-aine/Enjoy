<template>
    <router-link to="/hotelList"
        class="fixed top-0 left-0 w-full px-10 py-5 flex items-center bg-red-200 justify-end z-[999]">
        <X size="16" class="bg-red-400 rounded-full w-7 h-7 m-1.5" />
        <span>Quitter la carte</span>
    </router-link>
        <Map size="lg" :places="hotels"/>
    <div class="fixed bottom-12 md:bottom-0 w-full flex items-center bg-transparent justify-center z-[999]">
        <!-- <div v-for="hotel in hotels" :key="hotel.id" class="w-[500px] h-[250px] sm:w-[300px] lg:w-[1000px] p-3 ">
            <HotelCard :hotel="hotel" />
        </div> -->
    </div>
</template>

<script setup>
// import MapView from '@/components/services/MapView.vue'
// import { ref } from 'vue';
import Map from '@/components/map/Map.vue';
// import HotelCard from '@/components/HotelCard.vue';
import {
    X,
} from 'lucide-vue-next';

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
</script>