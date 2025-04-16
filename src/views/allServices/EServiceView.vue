<template>
    <div class="w-full min-h-screen bg-gray-50">

      <div v-for="item in filteredPlaces" :key="item.id" class="w-full">
        <div class="mb-12">
          <div  class="relative w-full h-auto" >
          <!-- Carousel wrapper -->
            <div class="relative lg:h-[550px] overflow-hidden md:h-96 h-[200px] ">
              <!-- Items -->
              <div
                class="absolute inset-0 transition-opacity duration-700 ease-in-out"
                v-for="(item, index) in item.images"
                :key="index"
                :class="{ 'hidden': currentIndex !== index }"
                data-carousel-item
              >
                <img :src="item" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Carousel Image">
              </div>
            </div>

            <!-- Slider indicators -->
            <div class="absolute z-30 flex  -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                v-for="(item, index) in items"
                :key="index"
                type="button"
                class="w-3 h-3 rounded-full "
                :class="{ 'bg-white': currentIndex === index, 'bg-gray-400': currentIndex !== index }"
                @click="goToSlide(index)"
                aria-label="Slide {{ index + 1 }}"
              ></button>
            </div>

            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide">
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
          <div class="flex justify-start items-start mx-auto">
            <div class=" mx-auto mt-10">
              <h4 class="mb-3 text-4xl font-extrabold flex items-center">
                {{ item.name }}
                <span class="text-[#B57EDC] text-2xl ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                </span>
              </h4>
              <p class="text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star text-orange-500 inline"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg> Categories:
                <strong>
                  <template v-for="(cat, index) in item.category" :key="index">
                    <a href="#" class="text-dark hover:underline">{{ $t('Category.' + cat) }}</a>
                    <span v-if="index < item.category.length - 1">, </span>
                  </template>
                </strong>
              </p>
            </div>
          </div>
          <div class="flex lg:flex-row justify-between flex-col mx-auto px-8 mt-20">
            <div class="mx-auto w-full lg:w-2/3">
              <div class="mx-auto">
                <div class="flex flex-row items-center gap-4 px-8 mx-8 justify-between">
                  <span class="text-gray-950 font-semibold text-xl">{{ $t('location_schedule') }}</span>
                  <button
                    @click="isModalOpen = true"
                    class="text-black font-medium text-lg hover:underline inline-flex gap-2"
                  >
                  {{ $t('suggest_edit') }}
                  <svg class="h-5 w-5 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                  </svg>
                  </button>
                </div>
                <div class="flex sm:flex-row flex-col">
                  <div>
                    <div class="px-8 mx-8 my-7">
                      <a href="#">
                        <img src="@/assets/staticmap.png" />
                      </a>
                      <div class="flex flex-row gap-10">
                        <div class="flex flex-col mt-5">
                          <a href="#" class="text-purple-500 hover:underline text-md font-medium">{{ item.location }}</a>
                          <span class="text-gray-950 text-md font-medium">{{ item.address }}</span>
                        </div>
                        <div class="border rounded-md hover:bg-gray-200 items-center flex px-3 h-10 mt-5">
                          <a href="#" class="text-md font-normal tracking-tight leading-none text-gray-800 transition-transform duration-300 hover:scale-110">
                            {{ $t('get_direction') }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div v-if="item.opening_hours.length" class="p-3 bg-white px-8">
                      <table class="min-w-full table-auto border-collapse">
                        <thead>
                          <tr class="bg-gray-100">
                            <th class="py-3 px-3 text-left text-orange-500 font-semibold">{{ $t('day') }}</th>
                            <th class="py-3 px-3 text-left text-orange-500 font-semibold">{{ $t('openning') }}</th>
                            <th class="py-3 px-3 text-left text-orange-500 font-semibold">{{ $t('closing') }}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(schedule, index) in item.opening_hours" :key="index" class="border-b hover:bg-purple-50">
                            <td class="py-2 px-3 text-gray-800">{{ $t('schedule.' + schedule.day) }}</td>
                            <td class="py-2 px-3 text-gray-500">{{ schedule.open }}</td>
                            <td class="py-2 px-3 text-gray-500">{{ schedule.close }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div v-else class="p-3 bg-white">
                      <p class="text-gray-600 text-center">No schedule available for this service.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-[90%] mx-8 px-8">
                <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
              <RewiewView :rating=item.rating />
            </div>
            <div class="mx-auto px-8 space-y-3 p-5 shadow-lg rounded-lg border bg-white h-36 mb-2 w-[300px] hover:scale-105 hover:bg-orange-50 transition-all duration-300">
              <p class="text-gray-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-[#B57EDC]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          {{ item.email }}
              </p>
              <p class="text-gray-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone text-[#B57EDC]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {{ item.phone }}
              </p>
              <p class="text-gray-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-[#B57EDC]"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                          {{ item.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
<!-- modal -->
<ModalCategory :isOpen = "isModalOpen" @close="isModalOpen=false" :title="'What’s your relationship to this business?'" :showActionButton="true"
 :actionText="$t('continuer')" >
  <p class="text-md text-gray-500 font-medium">Any changes to a business page must be verified by Yelp’s moderators.</p>
  <div class="mt-5 space-y-4">
    <div class="flex items-center p-3 border-b border-gray-200 me-4">
        <input id="radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="radio" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I own this business</label>
    </div>
    <div class="flex items-center  p-3 border-b border-gray-200 me-4">
        <input id="radio1" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="radio1" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I work at this business</label>
    </div>
    <div class="flex items-center  p-3 border-b border-gray-200 me-4">
        <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I’m a customer</label>
    </div>
  </div>

 </ModalCategory>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import RewiewView from "@/components/review/RewiewView.vue";
import ModalCategory from "@/components/modals/ModalCategory.vue";
import { Categories } from '@/mocks/categories';
import { useRoute } from 'vue-router';

import inside1 from '@/assets/inside1.jpg';
import inside2 from '@/assets/burger1.jpg';
import inside3 from '@/assets/burger2.jpg';
const isModalOpen = ref(false)



const route = useRoute();
const serviceId = route.params.serviceId;
const placeId = route.params.placeId
const categoryId = route.params.id;
const city = route.query.city;

console.log("Catégorie ID:", categoryId);
console.log("Ville:", city);
const filteredPlaces = ref([]);


onMounted(() => {
const selectedCategory = Categories.find(category => category.id === serviceId);
console.log("selectedCategory", selectedCategory);

if (selectedCategory) {
      const place = selectedCategory.places.find(place => place.id === placeId);
      filteredPlaces.value = place ? [place] : [];
      console.log("filteredPlaces", filteredPlaces.value);

}


});

const items = [inside1, inside2, inside3];

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Fonction pour démarrer le changement automatique
const startAutoSlide = () => {
  intervalId = setInterval(nextSlide, 5000);
};

// Fonction pour arrêter le changement automatique
const stopAutoSlide = () => {
  clearInterval(intervalId);
};

// Démarrer l'auto-slide lorsque le composant est monté
onMounted(() => {
  startAutoSlide();
});

// Arrêter l'auto-slide lorsque le composant est démonté
onBeforeUnmount(() => {
  stopAutoSlide();
});



</script>
