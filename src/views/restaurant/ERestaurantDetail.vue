<template>
  <div v-if="filteredPlaces.length">

<div v-for="item in filteredPlaces" :key="item.id"    class="min-h-screen bg-white ">
 <!-- image -->
 <div class="relative w-full h-[620px] top-0 overflow-hidden ">
   <div class="absolute inset-0 transition-opacity duration-700 ease-in-out flex">
     <div class="absolute inset-0  flex justify-center items-center transition-opacity duration-700 ease-in-out">
       <div class="relative sm:flex w-full h-[720px]">
         <div v-for="(image, index) in item.images" :key="index" class="flex-1 h-[720px]">
           <img :src="image" class="w-full h-full object-cover" alt="Image Hôtel">
         </div>
       </div>

     </div>
   </div>


   <div class="absolute top-[72%] left-[26%] transform -translate-x-1/2 -translate-y-1/2 text-white p-5 sm:mx-0 mx-24 w-full sm:w-1/3">
     <h1 class="mb-4 text-5xl font-extrabold text-white ">{{item.name}}</h1>
     <div class="flex items-center mb-4 sm:mb-3 md:mb-4 space-x-1">
       <span v-for="star in item.rating" :key="star" class="">
         <svg v-if="star <= item.rating" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white rounded-md bg-orange-500 p-1" viewBox="0 0 24 24">
           <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
         </svg>
         <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white p-1 rounded-md bg-white/25" viewBox="0 0 24 24">
           <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
         </svg>
       </span>
     </div>
     <div class="flex flex-row gap-2 mb-2 items-center">
       <span class="flex flex-row gap-2 items-center text-ellipsis text-purple-800 font-semibold text-md">
         <svg viewBox="0 0 50 50" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
           <rect width="50" height="50" rx="30" ry="30" fill="purple"/>
           <polyline points="12,25 20,35 38,15" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg> {{ $t('claimed') }} </span>. FCFA . <a v-for="cat in item.category" :key="cat.id" href="#" class="hover:underline font-semibold truncate">{{ $t('Category.' + cat) }} </a>
     </div>
     <!-- , <a href="#" class="hover:underline font-semibold">Burger</a> -->
     <div class="mb-5"><span class="text-green-500">{{ $t('open') }}</span> <span class="font-semibold text-md">11:00 AM - 03:00 AM ({{ $t('next_day') }})</span>
       <button class="ml-2 bg-white/15 rounded-md px-1 py-1 text-sm font-semibold transition-transform duration-300 hover:scale-110">{{ $t('see_hours') }}</button>
     </div>
   </div>

   <div class="absolute lg:top-[85%] top-[92%] left-[81%] transform -translate-x-1/2 -translate-y-1/2 text-white border lg:px-5 px-0 lg:py-2 py-0 rounded-md hover:bg-white/15">
     <button  class="text-md md:text-sm lg:text-xl font-extrabold tracking-tight leading-none text-white transition-transform duration-300 hover:scale-110">
       {{ $t('see_photo') }}
     </button>
   </div>

 </div>


 <div class="flex lg:flex-row justify-center flex-col mx-auto px-8 mt-8">
   <div class="mx-auto">

     <!-- image inside outside -->
     <div class="w-full px-8 sm:mx-8 mx-auto  ">

         <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('restaurantMenu') }}</h2>
         <div class="flex lg:justify-end justify-center mb-8">
          <router-link to="/menu" class="px-6 py-2 bg-purple-200 text-black  rounded-lg transition-transform transform hover:scale-105">
                {{ $t('seeMore') }}
          </router-link>
        </div>

     </div>
     <div class="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:space-y-0 space-y-4 mb-14 gap-8 my-8 px-8 mx-auto">
        <MenuCard/>
     </div>
     <div class="w-[90%] mx-8 px-8 ">
       <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
     </div>
     <!-- Horaires et emplacement -->
       <div class="flex flex-row items-center gap-4 px-8 mx-8 justify-between">
         <span class="text-gray-950  font-semibold text-xl">{{ $t('location_schedule') }}</span>
         <div class="">
           <button @click="isModalOpen=true" class="text-black font-medium text-lg hover:underline inline-flex gap-2 ">{{ $t('suggest_edit') }}
             <svg class="h-5 w-5 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
             </svg>
           </button>
         </div>
       </div>
       <div class="flex sm:flex-row flex-col">
         <div>
       <div class=" px-8 mx-8 my-7">
         <a href="">
           <img src="@/assets/staticmap.png" />
         </a>
         <div class="flex flex-row gap-10">
         <div class="flex flex-col mt-5">
           <a href="" class="text-purple-500 hover:underline text-md font-medium">{{item.location}}</a>
           <span class="text-gray-950 text-md font-medium">{{item.address}}</span>

         </div>
         <div class=" border rounded-md hover:bg-gray-200 items-center flex px-3 h-10 mt-5 ">
           <a href="" class=" text-md font-normal tracking-tight leading-none text-gray-800 transition-transform duration-300 hover:scale-110"> {{ $t('get_direction') }} </a>
         </div>

         </div>
       </div>
     </div>

     <div>
           <div class="p-3 bg-white px-8 " v-if="item.opening_hours">
               <table class="min-w-full table-auto border-collapse ">
                 <thead>
                   <tr class="bg-gray-100 ">
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
             <div class="p-3 bg-white" v-else>
               <p class="text-gray-600 text-center">Aucun horaire disponible pour ce service.</p>
             </div>
     </div>
   </div>
     <div class="w-[90%] mx-8 px-8 ">
       <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700">
     </div>
     <!-- Avis et commentaires composant -->
     <div class="flex lg:justify-end justify-center sm:mx-8 mx-auto ">
    <button class="px-2 py-2 bg-orange-500 text-black  rounded-lg transition-transform transform hover:scale-105">
          {{ $t('write_review') }}
    </button>
  </div>
     <RewiewView :rating="item.rating" />
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
import RewiewView from "@/components/review/RewiewView.vue";
import { ref,onMounted } from "vue";
import ModalCategory from "@/components/modals/ModalCategory.vue";
import { Categories } from '@/mocks/categories';
import { useRoute } from 'vue-router';
import MenuCard from "@/components/card/MenuCard.vue";



const route = useRoute();
const restaurantId = route.params.id
const filteredPlaces = ref([]);
const filteredPlace = ref([]);


onMounted(() => {
const selectedCategory = Categories.find(category => category.label === "Restaurants");

if (selectedCategory) {
    filteredPlace.value = selectedCategory.places
      const place = selectedCategory.places.find(place => place.id === restaurantId);
      filteredPlaces.value = place ? [place] : [];
      console.log("filteredPlaces", filteredPlaces.value);

}


});


const isModalOpen = ref(false)





</script>
