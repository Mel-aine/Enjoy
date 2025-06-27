<template>
  <div class="bg-white overflow-hidden border-b pb-5 z-0 animate-pulse">
    <div class="flex flex-col md:flex-row">

      <!-- Image Skeleton -->
      <div class="relative w-full md:w-1/3 h-48 flex-shrink-0 bg-gray-300 rounded-lg"></div>

      <!-- Content Skeleton -->
      <div class="flex-grow p-4 space-y-3">

        <!-- Title and stars -->
        <div class="space-y-2">
          <div class="h-6 bg-gray-300 rounded w-1/2"></div>
          <div class="flex items-center space-x-2">
            <div class="h-4 w-4 bg-gray-300 rounded-full" v-for="i in 5" :key="i"></div>
            <div class="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-center mt-2 space-x-2">
          <div class="h-4 w-4 bg-gray-300 rounded-full"></div>
          <div class="h-4 w-40 bg-gray-300 rounded"></div>
        </div>

        <!-- Description -->
        <div class="space-y-2">
          <div class="h-4 bg-gray-300 rounded w-full"></div>
          <div class="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        <!-- Amenities -->
        <div class="flex space-x-2 mt-2">
          <div class="h-6 w-6 bg-gray-300 rounded-full" v-for="i in 6" :key="i"></div>
        </div>

      </div>

      <!-- Price and button -->
      <div class="w-full md:w-1/3 flex flex-col items-end justify-between p-4 space-y-3">
        <div class="h-6 w-32 bg-gray-300 rounded"></div>
        <div class="text-right space-y-2">
          <div class="h-4 w-24 bg-gray-300 rounded"></div>
          <div class="h-6 w-20 bg-gray-300 rounded"></div>
          <div class="h-3 w-28 bg-gray-300 rounded"></div>
          <div class="h-10 w-36 bg-gray-300 rounded"></div>
        </div>
      </div>

    </div>
  </div>
</template>
