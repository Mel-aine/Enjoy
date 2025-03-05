<template>
  <div class="min-h-screen ">
    <div class=" relative w-full h-[420px] top-0">
        <div class="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <img src="@/assets/bg-bus.jpg" class="absolute block w-full h-[420px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
       
        <div class="absolute top-[72%] left-[25%] transform -translate-x-1/2 -translate-y-1/2  text-white p-5">
          <h1 class="mb-4 text-5xl font-extrabold  text-white">
            Burgermeister
          </h1>
     <div class="flex items-center mb-4 sm:mb-3 md:mb-4 space-x-1 ">
        <span v-for="star in 5" :key="star" class=" ">
          <svg v-if="star <= rating" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white rounded-md bg-orange-500 p-1" viewBox="0 0 24 24">
            <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white p-1 rounded-md bg-white/25" viewBox="0 0 24 24">
            <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
          </svg>
        </span>
      </div> 
          <div class="flex flex-row gap-2 mb-2 items-center">
            <span class="flex flex-row gap-2  items-center text-ellipsis text-purple-800 font-semibold text-md">
            <svg viewBox="0 0 50 50" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="30" ry="30" fill="purple"/>
                  <polyline points="12,25 20,35 38,15" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> Revendiqué </span>. FCFA . <a href="" class="hover:underline font-semibold">Fast Food </a> , <a href="" class="hover:underline font-semibold">Burger</a>
            </div> 
          <div class="mb-5 "><span class="text-green-500">Ouvert</span> <span class="font-semibold text-md">11:00 AM - 03:00 AM  ( Le jour suivant )</span>
            <button class="ml-2 bg-white/15 rounded-md px-1 py-1 text-sm font-semibold">see hours</button> 
          </div>
          
        </div>
        <div class="absolute top-[85%] left-[81%] transform -translate-x-1/2 -translate-y-1/2  text-white border px-5 py-2 rounded-md hover:bg-white/15">
          <button @click="isModalOpen = true " class=" text-md md:text-lg lg:text-xl font-extrabold tracking-tight leading-none text-white  transition duration-500 ease-in-out">
            See all photos
          </button>
        </div>
      </div>
    

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const rating = ref(4)

</script>