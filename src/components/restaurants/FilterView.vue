<template>
<div class=" flex">

    <div class="flex w-full h-full bg-white">
        <!-- category -->
        <div class="w-1/7 min-w-[200px] text-white p-6 ">
            <Filter/>
        </div>
        <!-- Menu -->
        <div class="flex-1 flex flex-col p-6 items-start">
          <div class="text-gray-700 text text-sm">
            <span v-for="(tab, i) in pathSegments" :key="i">
              {{ tab }} <span v-if="i !== pathSegments.length - 1"> >
              </span>
            </span>
            <h1 class="text-gray-950 font-bold text-xl"> {{ textSearch }} </h1>
          </div>
          <div class="mt-7">
            <RestaurantView />
          </div>
        </div>

        <!-- carte -->
        <div class="w-[550px] min-w-[250px] text-white  flex items-center justify-center">
            <MapView />
        </div>
    </div>
</div>
</template>

<script setup>
import Filter from './Filter.vue'
import  RestaurantView from './RestaurantView.vue'
import MapView from './MapView.vue'
import { computed,ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t } = useI18n();

// const pathSegments = computed(() =>
//   route.path.split('/').filter(segment => segment.trim() !== '')
// );
const path = '/Restaurants /Burger'
const pathSegments = computed(() =>
  path.split('/').filter(segment => segment.trim() !== '')
);
const textSearch = computed(() => t('les_meilleurs_burgers'));
</script>
<style scoped>

.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
