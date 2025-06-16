<template>
  <router-link to="/hotelList" class="fixed top-3 justify-center right-14 z-10 bg-white p-1 py-2 ">
    <span>Quitter la carte</span>
  </router-link>
  <div class="flex w-screen h-screen  gap-3">
    <div class="w-full lg:w-2/12 overflow-y-scroll">
      <EServiceFilter></EServiceFilter>
    </div>
    <div class="w-full lg:w-5/12  pt-3 ">
      <EServiceList @address-change="addressChange" @hotels-loaded="onHotelsLoaded"></EServiceList>
    </div>
    <div class="w-full lg:w-5/12 h-screen">
      <EserviceMapList size="lg" :places="hotels" class="h-screen" :address="currentAddress"></EserviceMapList>
    </div>
  </div>
</template>

<script setup>

import EServiceList from '../../components/ui/EServiceList.vue';
import EserviceMapList from '../../components/ui/EserviceMapList.vue';
import EServiceFilter from '../../components/ui/EServiceFilter.vue';
import { ref } from 'vue';
const currentAddress = ref(null);
const addressChange = (address) => {
  currentAddress.value = address
}
const hotels = ref([]);
const onHotelsLoaded = (hs) => {
  hotels.value = hs;
}
</script>