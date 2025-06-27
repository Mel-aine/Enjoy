<template>
  <template v-if="categoryFlags.isHotel">
    <EHotelDetails />
  </template>
  <template v-else>
    <div class="min-h-screen bg-gray-50" v-if="service">
    <div class="relative w-full  top-0 overflow-hidden" >
      <div class=" inset-0 transition-opacity duration-700 ease-in-out flex">
        <div class=" inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out">
          <div class="relative flex w-full h-[470px] ">
            <div v-for="(image, index) in service.images" :key="index" class="flex-1 h-[470px] sm:h-[720px]">
              <img :src="image" alt="Image Hôtel" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute bg-primary top-[52%] md:top-[80%]  lg:left-[22%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white p-5 sm:p-8 max-w-[90vw] sm:max-w-[600px]">
        <h1 class="mb-4 text-4xl md:text-5xl font-extrabold text-white">
          {{ service.name }}
        </h1>
        <div class="flex items-center mb-4 space-x-1">
          <span v-for="star in 5" :key="star">
            <StarIcon />
          </span>
        </div>
        <div class="flex items-center mb-4 space-x-1" v-if="service.openings">
          <BusinessHours :openings="service.openings"/>
        </div>
      </div>

      <div
        class="absolute lg:top-[80%] top-[92%] left-[81%] transform -translate-x-1/2 -translate-y-1/2 text-white border lg:px-5 px-3 lg:py-2 py-1 rounded-md hover:bg-white/15">
        <button
          class="text-md md:text-sm lg:text-xl font-extrabold tracking-tight leading-none text-white transition-transform duration-300 hover:scale-110">
          {{ $t("see_photo") }}
        </button>
      </div>
    </div>
    <div class="flex lg:flex-row justify-between flex-col mx-auto md:px-4 lg:px-8" :class="{ hidden: search }">
      <div class="mx-auto translate-y-40 sm:translate-y-0">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-7 justify-between px-8 md:ps-5  max-w-7xl">
          <!-- Bouton 1 -->
          <div
            class="flex justify-center items-center border border-gray-300 bg-orange-500 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-orange-600 cursor-pointer">
            <button class="flex items-center space-x-2 text-white font-medium text-md" type="button">
              <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
              </svg>
              <span>{{ $t("write_review") }}</span>
            </button>
          </div>

          <!-- Bouton 2 -->
          <div
            class="flex justify-center items-center border border-gray-300 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer">
            <button class="flex items-center space-x-2 text-gray-900 hover:text-green-600 font-medium text-md"
              type="button">
              <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="13" r="3" />
                <path
                  d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h3m9 6v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                <line x1="15" y1="6" x2="21" y2="6" />
              </svg>
              <span>{{ $t("add_photo") }}</span>
            </button>
          </div>

          <!-- Bouton 3 -->
          <div
            class="flex justify-center items-center border border-gray-300 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer">
            <button class="flex items-center space-x-2 text-gray-900 hover:text-red-600 font-medium text-md"
              type="button">
              <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              <span>{{ $t("share") }}</span>
            </button>
          </div>

          <!-- Bouton 4 -->
          <div
            class="flex justify-center items-center border border-gray-300 rounded-md py-3 px-6 transition-transform duration-300 hover:scale-105 hover:bg-gray-100 cursor-pointer">
            <button class="flex items-center space-x-2 text-gray-900 hover:text-purple-600 font-medium text-md"
              type="button">
              <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span>{{ $t("save") }}</span>
            </button>
          </div>
        </div>
        <div class="mt-10 mb-7 md:ps-5 px max-w-7xl">
          <PhotoGallery :images="service.images"></PhotoGallery>
        </div>

        <!-- description -->
        <div class="w-full px-4 sm:px-6 py-5 mt-10">
          <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
            <!-- Description (plus large) -->
            <div class="flex-[1.8]">
              <div class="bg-white/20 backdrop-blur-md rounded-2xl p-8 md:p-0  text-gray-950">
                <h2 class="text-2xl font-bold mb-4">{{ $t('description') }}</h2>
                <p :class="{
                  'max-h-[4.5rem] overflow-hidden': !showFull,
                  'max-h-full': showFull,
                }" class="text-sm sm:text-base leading-relaxed text-gray-500 transition-all duration-300">
                  {{ service.description }}
                </p>
                <button @click="showFull = !showFull"
                  class="mt-3 text-purple-400 font-semibold hover:underline focus:outline-none">
                  {{ showFull ? $t("reduce") : $t('read_more') }}
                </button>
              </div>
              <div class=" rounded-xl mt-5">
                <div class="text-center lg:text-left">
                  <span class="text-gray-900 text-xl font-semibold">
                    {{ $t("location_schedule") }}
                  </span>
                </div>
                <div v-if="sortedOpenings.length">
                  <table class="w-full table-auto border-collapse">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left py-3 px-4 text-orange-500 font-semibold">
                          {{ $t("day") }}
                        </th>
                        <th class="text-left py-3 px-4 text-orange-500 font-semibold">
                          {{ $t("opening") }}
                        </th>
                        <th class="text-left py-3 px-4 text-orange-500 font-semibold">
                          {{ $t("closing") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(schedule, index) in sortedOpenings" :key="index" class="border-t hover:bg-purple-50">
                        <td class="py-3 px-4 text-gray-800">
                          {{ schedule.day }}
                        </td>
                        <td class="py-3 px-4 text-gray-600">
                          {{ formatHour(schedule.opening) }}
                        </td>
                        <td class="py-3 px-4 text-gray-600">
                          {{ formatHour(schedule.closing) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div v-else class="text-center py-4 text-gray-500">
                  {{ $t("no_schedule_available") }}
                </div>
              </div> 
            </div>

            <!-- Emplacement & Horaires -->
            <div class="flex-[1] space-y-8">
              <!-- Titre -->
              <div class="text-center lg:text-left">
                <span class="text-gray-900 text-xl font-semibold">
                  {{ $t("location_schedule") }}
                </span>
              </div>

              <!-- Carte & Adresse -->
              <div class="  p-2 space-y-6">
                <a href="#">
                  <img src="@/assets/staticmap.png" alt="Map" class="rounded-md " />
                </a>
                <div class="flex flex-col sm:flex-row justify-between gap-6">
                  <div class="flex-1">
                    <p v-if="parsedAddress" class="text-gray-800 font-medium">
                      {{ parsedAddress.text }}
                    </p>
                  </div>
                  <!--
                  <div class="flex items-center">
                    <button
                      class="border border-gray-300 bg-white hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold transition-transform duration-300 hover:scale-105">
                      {{ $t("get_direction") }}
                    </button>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[90%] sm:w-[80%] lg:w-[66%] mx-auto">
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
    <!-- Avis et commentaires composant-->

    <div class="mx-auto">
      <RewiewView :rating="service.rating" />
    </div>

  </div>
  </template>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import RewiewView from "@/components/review/RewiewView.vue";
import { onUnmounted, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useServiceStore } from "@/stores/useServiceStore";
import PhotoGallery from "../../components/ui/PhotoGallery.vue";
import { getServiceById, getServiceProductGrouped } from "../../servicesApi/hotelServicesApi";
import EHotelDetails from "../hotel/EHotelDetails.vue";
import { getCategoryCheckers } from "../../utils/functions";
import StarIcon from "../../icons/StarIcon.vue";
import BusinessHours from "../../components/ui/BusinessHours.vue";


const hotelStore = useServiceStore();
const route = useRoute();
const hotelId = route.params.id;
const service = ref({});
const search = ref(false);
const { t } = useI18n();
const groupedHome = ref([]);
const selectedRoom = ref(null);
const currentImageIndex = ref(0);
const showFull = ref(false);
const images = ref([
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop"
])

const parsedAddress = computed(() => {
  try {
    return service.value.addressService
      ? JSON.parse(service.value.addressService)
      : null
  } catch (e) {
    console.error("Erreur de parsing de addressService:", e)
    return null
  }
})

const openRoom = ref(false)


const selectedRooms = (room) => {
  selectedRoom.value = room
  console.log('selectroom', selectedRoom.value)
  openRoom.value = true
}

const closeModal = () => {
  selectedRoom.value = null;
  openRoom.value = false
};

const nextImage = () => {
  if (selectedRoom.value) {
    currentImageIndex.value =
      currentImageIndex.value === images.length - 1
        ? 0
        : currentImageIndex.value + 1;
  }
};

const prevImage = () => {
  if (selectedRoom.value) {
    currentImageIndex.value =
      currentImageIndex.value === 0
        ? images.length - 1
        : currentImageIndex.value - 1;
  }
};

const getRoomDetail = (room, key) => {
  const found = room.options?.find(opt =>
    opt.optionName?.toLowerCase() === key.toLowerCase()
  )
  return found?.value || '—'
}

const daysOrder = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

const sortedOpenings = computed(() => {
  if (!service.value.openings) return []

  return daysOrder
    .filter(day => service.value.openings[day])
    .map(day => ({
      day,
      opening: service.value.openings[day].opening,
      closing: service.value.openings[day].closing,
    }))
})

function formatHour(hour) {
  if (!hour) return ''
  const [h, m] = hour.split(':')
  return `${h}h${m}`
}


onMounted(async () => {
  const result = await getServiceById(hotelId);
  service.value = result.data;
})


const categoryFlags = computed(() => {
  return getCategoryCheckers(service.value.categoryId);
})
</script>
