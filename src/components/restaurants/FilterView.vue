<template>
<div class="flex flex-col lg:flex-row w-full min-h-screen bg-white relative">
  <!-- Bouton Hamburger -->
  <button
    @click="toggleMenu"
    class="md:block absolute top-4 right-2 z-50 p-2 bg-gray-200 rounded lg:hidden"
  >
    ☰
  </button>

  <!-- category (filtre) -->
  <div :class="['lg:w-1/7 lg:min-w-[200px] p-6 bg-white text-white transition-all',
       showMenu ? 'block absolute top-0 left-0 w-[90%] h-full z-40' : 'hidden lg:block']">
    <Filter />
  </div>

  <!-- Contenu principal -->
  <div class="flex-1 flex flex-col p-5 items-start">

    <div class="text-gray-700 text-sm">
      <span v-for="(tab, i) in pathSegments" :key="i">
        {{ tab }} <span v-if="i !== pathSegments.length - 1"> > </span>
      </span>
         <h1 class="text-gray-950 font-bold text-xl"> {{ textSearch }} </h1>
    </div>

    <div class="">
      <div class="relative flex flex-wrap md:flex-wrap items-start justify-end space-x-2 md:space-x-4 p-2  right-8 w-full md:w-auto">
        <span class="flex items-center space-x-2 gap-2 text-right text-xs md:text-sm">
        {{$t('trie')}} :
        <button class="text-xs md:text-sm font-semibold flex items-center">
            {{$t('recommand')}}
            <svg data-accordion-icon class="w-3 h-3 md:w-2 md:h-2 rotate-180 shrink-0 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"/>
        </svg>
    </span>

  </div>
  <div class="mt-7">
      <RestaurantView />
  </div>
    </div>

  </div>


  <!-- Carte (map) -->
  <div  class="lg:w-[550px] lg:min-w-[250px] text-black flex items-center justify-center lg:relative lg:mt-0 md:mt-5 md:w-full md:min-h-[500px]">
  <MapView />
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
const showMenu = ref(false)

function toggleMenu() {
  showMenu.value =!showMenu.value;
}

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
