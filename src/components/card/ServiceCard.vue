<template>
  <div
    class="flex flex-col md:flex-row items-center px-8 shadow-sm rounded-lg overflow-hidden md:w-[850px]  mx-auto w-[390px] transition-transform transform hover:scale-105"
  >
    <!-- Image / Carousel -->
    <div class="relative w-full md:w-1/2 lg:w-1/3">
      <!-- Carousel wrapper -->
      <div class="relative h-40 md:h-[200px] overflow-hidden rounded-lg">
        <div
          class="flex transition-transform duration-200 ease-linear"
          :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }"
        >
          <div
            v-for="(img, index) in service.images"
            :key="index"
            class="w-full flex-shrink-0"
          >
            <img
              :src="img"
              alt="Menu Item"
              class="object-cover w-full h-48 md:h-40 lg:h-48 rounded-lg"
            />
          </div>
        </div>
      </div>

      <!-- Slider controls -->
      <button
        @click="prevSlide"
        :disabled="currentIndex === 0"
        type="button"
        class="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none"
        :class="{ 'opacity-30 cursor-not-allowed': currentIndex === 0 }"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">{{ $t("previous") }}</span>
        </span>
      </button>

      <button
        @click="nextSlide"
        :disabled="currentIndex === props.service.images.length - 1"
        type="button"
        class="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 transform -translate-y-1/2 px-4 cursor-pointer group focus:outline-none"
        :class="{
          'opacity-30 cursor-not-allowed':
            currentIndex === props.service.images.length - 1,
        }"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">{{ $t("next") }}</span>
        </span>
      </button>
    </div>

    <!-- Contenu -->
    <div class="flex flex-col justify-between p-5 w-full h-[250px]">
      <router-link
        :to="search"
        class="mb-1 sm:mb-2 md:mb-1 text-sm md:text-md sm:text-lg lg:text-2xl font-bold tracking-tight"
      >
        <span class=" text-black">{{ service.name }}</span>
      </router-link>

      <!-- Étoiles -->
      <div class="flex items-center mb-1 sm:mb-2 md:mb-1">
        <span v-for="star in 5" :key="star" class="text-yellow-400">
          <svg
            v-if="star <= rating"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 fill-gray-300"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z"
            />
          </svg>
        </span>
      </div>

      <!-- Localisation et horaire -->
      <div
        class="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 text-xs md:text-sm"
      >
        <div class="flex items-center text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-purple-500 mr-1"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            />
          </svg>
          <span class="text-xs sm:text-sm truncate md:text-md"
            >{{ service.address.text }}</span
          >
        </div>
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2"
        >
          <div class="flex items-center gap-2">
            <span
              class="text-customBlue font-bold text-xs sm:text-sm md:text-xs"
              >{{service.price}}</span
            >
          </div>
        </div>
      </div>

      <!-- Description -->
      <div
        class="mb-1 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400"
      >
        <div class="items-start flex sm:w-[450px] w-[300px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-500 mr-2 mt-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"
              />
            </svg>
          </div>
          <p class="text-xs md:text-sm text-gray-500 line-clamp-2">
            {{ truncatedText }}
          </p>
        </div>
        <!-- Bouton -->
        <div
          class="flex flex-row md:flex-nowrap lg:flex-nowrap gap-2 py-1 sm:py-5 md:py-2 lg:py-5"
        >
          <RoundedButton
            v-for="item in category"
            :key="item.id"
            :label="$t('Category.' + item)"
          />
        </div>
        
      </div>
      <div class="flex justify-end">
          <button @click="handleViewDeal" class="bg-customRed text-white px-4 py-2 rounded-md hover:text-black mt-2">
            {{ $t('appServices.hotel.checkAviabilty') }}
          </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed } from "vue";
import RoundedButton from "../filter/RoundedButton.vue";
// import { getServicesCategoryIdBy } from '@/servicesApi/hotelServicesApi.js'
import { useMIHStore } from '@/stores/manageHotelInterface';

const hotelStore = useMIHStore();

const props = defineProps({
  service: {
    type: Object,
    required: true,
    default: {},
  },
});
const currentIndex = ref(0);
let interval = null;
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.service.images.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.service.images.length) %
    props.service.images.length;
};

onUnmounted(() => {
  clearInterval(interval);
});

const maxSentences = 1;
const showMore = ref(false); // Pour gérer l'affichage du texte complet
const isTruncated = ref(true); // Pour savoir si le texte est tronqué

// Fonction pour récupérer les 2 premières phrases ou tout le texte
const truncatedText = computed(() => {
  const sentences = props.service.description.split(". ");
  const visibleText = sentences
    .slice(0, showMore.value ? sentences.length : maxSentences)
    .join(". ");
  if (sentences.length > maxSentences) {
    isTruncated.value = true;
  } else {
    isTruncated.value = false;
  }
  return visibleText + (isTruncated.value ? "..." : "");
});
const handleViewDeal = () => {
  hotelStore.setHotel(props.service)
  hotelStore.getHotelId(props.service.id)
  window.location.href = `/all_service/${props.service.id}#disponibility`;
}
</script>
