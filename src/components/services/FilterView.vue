<template>
<div class="flex flex-col z-0 lg:flex-row w-full min-h-screen bg-white ">
  <!-- Bouton Hamburger -->
  <button
    @click="toggleMenu"
    class="md:block absolute  right-auto  p-2 bg-gray-200 rounded lg:hidden"
  >
    ☰
  </button>

  <!-- category (filtre) -->
  <div :class="['lg:w-1/7 lg:min-w-[200px] p-6 bg-white text-white transition-all',
       showMenu ? 'block absolute  left-0 w-full h-full z-50' : 'hidden lg:block']">
       <!-- <span class="text-gray-950">oiuiu</span> -->
       <button
          @click="toggleMenu"
          class="md:block absolute text-black right-auto bg-gray-200 rounded lg:hidden"
        >
          ☰
        </button> 
    <Filter />
  </div>

  <!-- Contenu principal -->
  <div class="flex-1 flex flex-col p-5 items-start">

    <div class="text-gray-700 text-sm">
      <!-- <span v-for="(tab, i) in pathSegments" :key="i">
    <div class="text-gray-700 text-sm ml-5">
      <span v-for="(tab, i) in pathSegments" :key="i">
        {{ tab }} <span v-if="i !== pathSegments.length - 1"> > </span>
      </span> -->
      <span >
        {{ $t('categories.' + textSearch) }}
      </span>
         <h1 class="text-gray-950 font-bold text-xl"> {{$t('les_meilleurs')}} {{ $t('categories.' + textSearch) }} </h1>
    </div>

    <div class="z-0">
      <div class="relative flex flex-wrap md:flex-wrap items-start justify-end space-x-2 md:space-x-4 p-2  right-8 w-full md:w-auto">
        <span class="flex items-center space-x-2 gap-2 text-right text-xs md:text-sm">
        {{$t('trie')}} :
        <button @click="showDropDown = !showDropDown" class="text-xs md:text-sm font-semibold flex items-center gap-1">
             {{ selectedOption ? selectedOption : $t('recommand') }}
            <svg data-accordion-icon class="w-3 h-3  rotate-180 shrink-0 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 md:w-5 md:h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"/>
        </svg>
    </span>
    <ul v-if="showDropDown"
        class="custom-scrollbar text-lg sm:text-base absolute top-full   bg-white border border-purple-500 shadow-lg border-t-0 rounded-b-lg max-h-40 overflow-y-auto z-50 mt-1">
        <li v-for="option in options" :key="option" @click="selectOption(option)" class="px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"  >
          {{ option }}
        </li>
      </ul>
  </div>
  <div class="mt-7 translate-x-8 space-y-4">
      <!-- <ServiceView /> -->
    <div  v-for =" item in filteredPlaces" :key="item.id">
    <ServiceCard
      :title=item.name
      :description=item.description
      :rating="item.rating"
      :localisation = item.address
      :hours=item.open_until
      :category="item.category"
      :image="item.images"
      :search="item.route"
    />
  </div>
  </div>
    </div>

  </div>


  <!-- Carte (map) -->
  <div  class="lg:w-[500px] lg:min-w-[250px] z-0 text-black flex items-center justify-center lg:relative lg:mt-0 md:mt-5 md:w-full md:min-h-[500px]">
  <MapView />
  </div>

</div>


</template>

<script setup>
import Filter from './Filter.vue'
import { Categories } from '@/mocks/categories';
import ServiceCard from '@/components/card/ServiceCard.vue' ;
import MapView from './MapView.vue'
import { useRoute } from 'vue-router';
import { computed,ref,onMounted } from 'vue';
import { useI18n } from "vue-i18n";


const { t } = useI18n();
const showMenu = ref(false)
const showDropDown = ref(false)
const selectedOption = ref(null);
const route = useRoute();
const category = ref('');
const filteredPlaces = ref([]);
const textSearch = ref('');




function selectOption(option) {
  selectedOption.value = option;
  showDropDown.value = false;
}

const options = ['Recommanded', 'Nombre d avis','Avis positifs']
function toggleMenu() {
  showMenu.value =!showMenu.value;
}

// const path = route.params.id
// const pathSegments = computed(() =>
//   path.split('/').filter(segment => segment.trim() !== '')
// );
//const textSearch = computed(() => t('les_meilleurs_burgers'));

onMounted(() => {
  category.value = route.params.id;
  console.log(category.value);
  const selectedCategory = Categories.find(cat => cat.id === category.value);
  textSearch.value = selectedCategory.label
  console.log(textSearch.value)
  console.log("selectedCategory", selectedCategory);
  if (selectedCategory) {
    filteredPlaces.value = selectedCategory.places;

  }

  console.log("filteredPlaces.value", filteredPlaces.value);

});


</script>
<style scoped>

.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
