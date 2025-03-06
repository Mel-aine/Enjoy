<template>
 <div class="min-h-screen bg-white">
  <div class="relative w-full h-[420px] top-0 overflow-hidden">
    <div class="absolute inset-0 transition-opacity duration-700 ease-in-out flex">
      <div class="absolute inset-0  flex justify-center items-center transition-opacity duration-700 ease-in-out">
        <div class="flex w-full h-[420px]">
          <div class="flex-1 h-[420px]">
            <img src="@/assets/bg-bus.jpg" class="w-full h-full object-cover" alt="">
          </div>
          <div class="flex-1 h-[420px]">
            <img src="@/assets/bg-bus.jpg" class="w-full h-full object-cover" alt="">
          </div>
          <div class="flex-1 h-[420px]">
            <img src="@/assets/bg-bus.jpg" class="w-full h-full object-cover" alt="">
          </div>
        </div>

      </div>
    </div>

    <div class="absolute top-[72%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 text-white p-5">
      <h1 class="mb-4 text-5xl font-extrabold text-white">Burgermeister</h1>
      <div class="flex items-center mb-4 sm:mb-3 md:mb-4 space-x-1">
        <span v-for="star in 5" :key="star" class="">
          <svg v-if="star <= rating" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white rounded-md bg-orange-500 p-1" viewBox="0 0 24 24">
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
          </svg> Revendiqué </span>. FCFA . <a href="#" class="hover:underline font-semibold">Fast Food</a>, <a href="#" class="hover:underline font-semibold">Burger</a>
      </div>
      <div class="mb-5"><span class="text-green-500">Ouvert</span> <span class="font-semibold text-md">11:00 AM - 03:00 AM (Le jour suivant)</span>
        <button class="ml-2 bg-white/15 rounded-md px-1 py-1 text-sm font-semibold transition-transform duration-300 hover:scale-110">Voir les horaires</button>
      </div>
    </div>

    <div class="absolute top-[85%] left-[81%] transform -translate-x-1/2 -translate-y-1/2 text-white border px-5 py-2 rounded-md hover:bg-white/15">
      <button @click="isModalOpen = true" class="text-md md:text-lg lg:text-xl font-extrabold tracking-tight leading-none text-white transition-transform duration-300 hover:scale-110">
        Voir toutes les photos
      </button>
    </div>

  </div>
  <div class="flex flex-row mt-10 mb-7 space-x-2 items-center justify-center">
  <!-- ajout button -->
  <div class="border border-gray-200 bg-orange-500 py-2 px-8 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md">
    <button class="flex flex-row items-center space-x-2 text-white hover:text-orange-600">
      <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
      </svg>
      <span>Write a review</span>
    </button>
  </div>
  <div class="border border-gray-200 py-2 px-8 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md">
    <button class="flex flex-row items-center space-x-2 text-gray-950 hover:text-green-600">
      <svg class="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="13" r="3" />
        <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h3m9 6v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
        <line x1="15" y1="6" x2="21" y2="6" />
      </svg>
      <span>Ajouter une photo</span>
    </button>
  </div>
  <div class="border border-gray-200 py-2 px-8 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md">
    <button class="flex flex-row items-center space-x-2 text-gray-950 hover:text-red-600">
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
      <span>Partager</span>
    </button>
  </div>
  <div class="border border-gray-200 py-2 px-8 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 rounded-md">
    <button class="flex flex-row items-center space-x-2 text-gray-950 hover:text-purple-600">
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
      <span>Sauvegarder</span>
    </button>
  </div>

  </div>
  <div class="w-full flex justify-center">
    <div class="w-[54%] ">
      <hr class="h-px mb-6 bg-gray-200 border-0 dark:bg-gray-700">
      <span class="text-gray-950  font-semibold text-xl">what's the vibe?</span>
    </div>
  </div>
  <div class="w-full flex justify-center">
    <div class="flex flex-col items-center w-[250px] bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">
    <!-- Image / Carousel -->
    <div class="relative w-full">
      <!-- Carousel wrapper -->
      <div class="relative h-40 md:h-[200px] overflow-hidden rounded-t-lg">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }" >
          <div v-for="(img, index) in images" :key="index" class="w-full flex-shrink-0">
            <img :src="img" alt="Menu Item" class="object-cover w-full h-48 md:h-40 lg:h-48 rounded-t-lg transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <!-- Slider controls -->
      <button @click="prevSlide" type="button" class="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none">
        <span  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" >
            <path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>

      <button @click="nextSlide" type="button" class="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none" >
        <span  class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 6 10">
            <path  stroke="currentColor"  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"  d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>

    </div>

    <!-- Contenu -->
    <div class="flex flex-col justify-between p-5 w-full text-center">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white transition-transform hover:scale-105">
        Burgermeister Special 🍔
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mt-2">
        Délicieux burger avec steak grillé, cheddar fondu et sauce maison. 🍔🔥
      </p>
      <div class="mt-4 flex justify-center">
        <span class="text-lg font-semibold text-green-500">10.99€</span>
      </div>

      <!-- CTA Button -->
      <button class="mt-5 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300">
        Commander
      </button>
    </div>
  </div>
  </div>
</div>
</template>
<script setup>
import { ref, onUnmounted } from "vue";

defineProps({
  title: String,
  image: {
    type: String,
    required: true,
    default: "",
  },
  description: String,
  rating: Number,
  localisation: String,
  hours: String,
  label: Array,
});
const images = ref([
  "https://wallpaperaccess.com/full/1546182.jpg",
  "https://wallpaperaccess.com/full/1546181.jpg",
]);
const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Auto-play carousel
// onMounted(() => {
//   interval = setInterval(nextSlide, 3000);
// });

onUnmounted(() => {
  clearInterval(interval);
});


  const  rating = ref(4)

</script>
