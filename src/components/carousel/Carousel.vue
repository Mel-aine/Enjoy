<template>
    <div class="max-w-5xl mx-auto py-8">
      <div class="relative overflow-hidden rounded-sm shadow-lg">
        <!-- Carousel container -->
        <div
          class="relative flex transition-transform ease-in-out duration-700"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <!-- Slides -->
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="min-w-full h-80 sm:h-96 lg:h-[500px]"
          >
            <img :src="slide.image" :alt="slide.alt" class="object-cover w-full h-full" />
          </div>
        </div>
  
        <!-- Indicators -->
        <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            @click="goToSlide(index)"
            :class="[ 
              'w-2 h-2 rounded-full', 
              currentSlide === index ? 'bg-gray-600' : 'bg-gray-300' 
            ]"
          ></button>
        </div>
  
        <!-- Navigation Controls -->
        <button
          @click="prevSlide"
          class="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-200/50 rounded-full p-2 hover:bg-gray-300"
        >
          <svg
            class="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
  
        <button
          @click="nextSlide"
          class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-200/50 rounded-full p-2 hover:bg-gray-300"
        >
          <svg
            class="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Liste des slides
  const slides = [
    { image: "https://wallpaperaccess.com/full/1546182.jpg", alt: "Slide 1" },
    { image: "https://wallpaperaccess.com/full/1546181.jpg", alt: "Slide 2" },
    { image: "https://wallpaperaccess.com/full/1546171.jpg", alt: "Slide 3" },
  ];
  
  const currentSlide = ref(0);
  
  const goToSlide = (index) => {
    currentSlide.value = index;
  };
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  };
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  };
  </script>
  
  <style scoped>
  /* Suppression du scroll horizontal pour le carousel */
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 640px) {
  .h-80 {
    height: 60vh;
  }
  .sm\\:h-96 {
    height: 70vh;
  }
}
@media (min-width: 768px) {
  .sm\\:h-96 {
    height: 80vh;
  }
}
@media (min-width: 1024px) {
  .lg\\:h-\[500px\] {
    height: 500px;
  }
}
  </style>
  