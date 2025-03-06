<template>
  <div class=" mt-10 lg:px-0 lg:mx-0 px-1 mx-auto lg:py-0 pb-4">
   <div class="border border-gray-200 w-[360px] h-[300px]">
    <div class="my-4 mx-8">

      <a href="" class="flex justify-between"> <span class="hover:underline text-purple-500 font-medium text-md">Burger-meister.de</span>
        <svg class="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />  <polyline points="15 3 21 3 21 9" />  <line x1="10" y1="14" x2="21" y2="3" /></svg>
      </a>

      <div class="border-b-2 my-5 border-gray-200 "></div>
    </div>
    <div class="my-4 mx-8">
      <div class="flex justify-between">
        <span class="text-gray-700 font-semibold text-md">693824156</span>
        <svg class="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
      </div>
      <div class="border-b-2 my-5 border-gray-200 "></div>
    </div>
    <div class="mx-8 mb-7">
      <a href="" class="text-purple-500 hover:underline font-medium text-md">{{ $t('get_direction') }}</a>
      <p class="text-md font-normal text-gray-600">Oberbaumstr.8 10997 Berlin</p>
      <span class="text-md font-normal text-gray-600">Allemagne</span>
    </div>
    <div class="flex flex-col items-center">
    <div class="w-[300px] transform  flex justify-center  text-white border px-2 py-1 rounded-md hover:bg-gray-100 ">
      <button @click="isModalOpen = true" class="  text-md md:text-lg lg:text-xl font-semibold tracking-tight leading-none text-gray-500 transition-transform duration-300 hover:scale-110">
        <svg class="h-6 w-6 text-gray-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
          {{$t('suggest_edit')}}
      </button>
    </div>
  </div>
   </div>
  </div>
<!-- modale -->
 <ModalCategory :isOpen = "isModalOpen" @close="isModalOpen=false" :title="'What’s your relationship to this business?'" :showActionButton="true"
 :actionText="$t('continuer')" >
  <p class="text-md text-gray-500 font-medium">Any changes to a business page must be verified by Yelp’s moderators.</p>
  <div class="mt-5 space-y-4">
    <div class="flex items-center p-3 border-b border-gray-200 me-4">
        <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I own this business</label>
    </div>
    <div class="flex items-center  p-3 border-b border-gray-200 me-4">
        <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I work at this business</label>
    </div>
    <div class="flex items-center  p-3 border-b border-gray-200 me-4">
        <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I’m a customer</label>
    </div>
  </div>

 </ModalCategory>
</template>

<script setup>
import ModalCategory from '../modals/ModalCategory.vue';
import {ref} from 'vue'
const isModalOpen = ref(false)

</script>
