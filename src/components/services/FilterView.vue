<template>
<div class="flex flex-col z-0 lg:flex-row w-full min-h-screen bg-white ">
  <!-- Bouton Hamburger -->
  <!-- <button
    @click="toggleMenu"
    class="md:block absolute  right-5 px-2 items-center p-1 bg-gray-200 rounded-full mt-2 lg:hidden space-x-1">
  <BaseIcon name="Filter" size="20" stroke-width="2" class="text-black inline-flex" />
  <span class="text-sm font-medium">{{ $t('filter') }}</span>
  </button> -->

  <!-- category (filtre) -->

  <!-- <div :class="['lg:w-1/7 lg:min-w-[200px] p-6  text-white transition-all bg-white border-t border-gray-100',
       showMenu ? 'block absolute  left-0 w-full h-screen z-50 ' : 'hidden lg:block  ']">
       <button
          @click="showMenu = false"
          class="md:block absolute text-black right-5 bg-gray-200 rounded-full lg:hidden">
        <svg class="h-7 w-7 text-gray-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="11 7 6 12 11 17" />  <polyline points="17 7 12 12 17 17" /></svg>
        </button>
           <Filter />

  </div> -->

  <div class="hidden lg:block lg:w-1/7 lg:min-w-[200px] p-6  text-white transition-all bg-white border-t border-gray-100 sm:hidden ">
       <Filter />
       </div>


  <!-- Contenu principal -->
  <div class="flex-1 flex flex-col p-5 items-start mx-auto px-2 border-t border-gray-100">

    <div class="z-0 mx-auto">
      <div class="flex justify-between ">
      <div class="text-gray-700 text-sm">
      <span >
        {{ $t('categories.' + textSearch) }}
      </span>
         <h1 class="text-gray-950 font-bold text-xl"> {{$t('les_meilleurs')}} {{ $t('categories.' + textSearch) }} </h1>
    </div>
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
      </div>
      <button
    @click="toggleMenu"
        class="flex  right-5 px-2 items-center p-1 bg-gray-200 rounded-full mt-8  space-x-1">
      <BaseIcon name="Filter" size="20" stroke-width="2" class="text-black inline-flex" />
      <span class="text-sm font-medium">{{ $t('filter') }}</span>
  </button>
  <div class="mt-7 lg:translate-x-8 translate-x-0 space-y-4">
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
import BaseIcon from '../icons/BaseIcon.vue';
import MapView from './MapView.vue'
import { useRoute } from 'vue-router';
import { ref,onMounted,computed } from 'vue';
import { useI18n } from "vue-i18n";


const showMenu = ref(false)
const showDropDown = ref(false)
const selectedOption = ref(null);
const route = useRoute();
const category = ref('');
const filteredPlaces = ref([]);
const textSearch = ref('');
const { t } = useI18n();
const categoryId = route.params.id;
const city = route.query.city;

console.log("Catégorie ID:", categoryId);
console.log("Ville:", city);




function selectOption(option) {
  selectedOption.value = option;
  showDropDown.value = false;
}

const options = computed(()=>[t('recommanded'), t('numberReview'),t('positive_review')])
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
