<template>
  <div class=" mt-10 lg:px-0 lg:mx-0 px-1 mx-auto lg:py-0 pb-2">
   <div class="border rounded-xl border-gray-200 w-[360px] h-[250px]">
    <div class="my-4 mx-8">

      <a href="" class="flex justify-between"> <span class="hover:underline text-purple-500 font-medium text-md">{{email}}</span>
        <svg class="h-6 w-6 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />  <polyline points="15 3 21 3 21 9" />  <line x1="10" y1="14" x2="21" y2="3" /></svg>
      </a>

      <div class="border-b-2 my-5 border-gray-200 "></div>
    </div>
    <div class="my-4 mx-8">
      <div class="flex justify-between">
        <span class="text-gray-700 font-semibold text-md">{{website}}</span>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe text-gray-500"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      </div>
      <div class="border-b-2 my-5 border-gray-200 "></div>
    </div>
    <div class="mx-8 mb-7">
      <p class="text-md font-normal text-gray-600">{{localisation}}</p>
      <span class="text-md font-normal text-gray-600">{{ address }}</span>
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
        <input id="orange-radio1" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="orange-radio1" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I work at this business</label>
    </div>
    <div class="flex items-center  p-3 border-b border-gray-200 me-4">
        <input id="radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="radio" class="ms-2 text-md font-normal text-gray-900 dark:text-gray-300">I’m a customer</label>
    </div>
  </div>

 </ModalCategory>
</template>

<script setup>
import ModalCategory from '../modals/ModalCategory.vue';
import {ref} from 'vue'
const isModalOpen = ref(false)

defineProps({
  website: {
    type: String,

  },
  localisation: {
    type: String,

  },
  address: {
    type: String,

  },
  email: {
    type: String,

  }
})

</script>
