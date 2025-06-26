<template>
  <div
    class="flex flex-col md:flex-row items-center px-8 shadow-sm rounded-lg overflow-hidden sm:w-[800px] max-w-4xl mx-auto w-[390px] animate-pulse bg-white"
  >
    <!-- Image Skeleton -->
    <div class="w-full md:w-1/2 lg:w-1/3">
      <div class="h-40 md:h-[200px] bg-gray-300 rounded-lg w-full"></div>
    </div>

    <!-- Content Skeleton -->
    <div class="flex flex-col justify-between p-5 w-full md:w-1/2 h-[250px]">
      <!-- Title -->
      <div class="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>

      <!-- Stars -->
      <div class="flex gap-1 mb-2">
        <div v-for="n in 5" :key="n" class="w-5 h-5 bg-gray-300 rounded"></div>
      </div>

      <!-- Location + Hours -->
      <div class="flex flex-col sm:flex-row gap-2 text-xs">
        <div class="flex items-center w-1/2">
          <div class="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
          <div class="w-24 h-3 bg-gray-300 rounded"></div>
        </div>
        <div class="flex items-center w-1/2">
          <div class="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
          <div class="w-24 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>

      <!-- Description -->
      <div class="mt-3">
        <div class="w-full h-3 bg-gray-300 rounded mb-1"></div>
        <div class="w-5/6 h-3 bg-gray-200 rounded mb-1"></div>
        <div class="w-4/6 h-3 bg-gray-200 rounded"></div>
      </div>

      <!-- Tags -->
      <div class="flex gap-2 mt-4">
        <div class="h-6 w-16 bg-gray-300 rounded-full"></div>
        <div class="h-6 w-20 bg-gray-300 rounded-full"></div>
        <div class="h-6 w-14 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>