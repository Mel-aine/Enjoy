<template>
  <div
    class="bg-purple-500 flex justify-center items-center h-[200px] text-white font-bold text-3xl"
  >
    {{ $t(category.categoryName) }}
  </div>

  <div class="flex flex-col z-0 lg:flex-row w-full min-h-screen bg-white">
    <!-- Bouton Hamburger pour les petites tailles -->
    <button
      @click="toggleMenu"
      class="md:block absolute right-5 px-2 items-center p-1 bg-gray-200 rounded-full mt-2 lg:hidden space-x-1"
    >
      <BaseIcon
        name="Filter"
        size="20"
        stroke-width="2"
        class="text-black inline-flex"
      />
      <span class="text-sm font-medium">{{ $t("filter") }}</span>
    </button>

    <!-- Sidebar filtre en md (tablette) -->
    <transition name="slide">
      <div
        v-if="showMenu"
        class="fixed inset-0 bg-black bg-opacity-40 z-50 overflow-y-auto scrollbar-hidden"
      >
        <div
          class="w-[450px] text-white transition-all bg-white border-t border-gray-100 sm:p-4 p-3 rounded-r-lg"
          @click.stop
        >
          <button
            @click="showMenu = false"
            class="flex top-5 text-black bg-gray-200 rounded-full"
          >
            <svg
              class="h-7 w-7 text-gray-900"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="11 7 6 12 11 17" />
              <polyline points="17 7 12 12 17 17" />
            </svg>
          </button>
          <EServiceFilter></EServiceFilter>
          <div class="space-x-8 pb-8 translate-x-10">
            <button
              class="text-purple-500 rounded-full text-lg font-normal px-2"
            >
              {{ $t("cancel") }}
            </button>
            <button
              class="text-black rounded-full text-lg font-normal px-4 py-2 bg-orange-500"
            >
              {{ $t("applyFilter") }}
            </button>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="hidden lg:block lg:w-1/7 lg:min-w-[200px] p-6 lg:sticky lg:top-6"
    >
      <div class="flex h-screen gap-3 overflow-y-scroll">
        <EServiceFilter></EServiceFilter>
      </div>
    </div>

    <!-- Contenu principal -->
    <div
      class="flex flex-col items-start mx-auto px-2 border-t border-gray-100 pt-10"
    >
      <div class="z-0 overflow-y-auto scrollbar-hidden h-screen">
        <div class="flex justify-between">
          <div class="text-gray-700 text-sm">
            <span>{{ $t(category.categoryName) }}</span>
            <h1
              class="text-gray-950 font-bold text-xl w-[200px] sm:w-[500px] flex-wrap"
            >
              {{ $t("les_meilleurs") }} {{ $t(category.categoryName) }}
              <span v-if="city"> {{ $t("in") }} {{ city }} </span>
            </h1>
          </div>
          <div
            class="relative flex flex-wrap md:flex-wrap items-start justify-end space-x-2 md:space-x-4 p-2 right-8 w-full md:w-auto"
          >
            <span
              class="flex items-center space-x-2 gap-2 text-right text-xs md:text-sm"
            >
              {{ $t("trie") }} :
              <button
                @click="showDropDown = !showDropDown"
                class="text-xs md:text-sm font-semibold flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-lg"
              >
                {{ selectedOption ? selectedOption : $t("recommand") }}
                <svg
                  class="w-3 h-3 transform transition-transform duration-200"
                  :class="{ 'rotate-180': showDropDown }"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
              <svg width="16" height="16" class="icon_svg">
                <path
                  d="M8 14.75A6.75 6.75 0 1 1 14.75 8 6.757 6.757 0 0 1 8 14.75Zm0-12A5.25 5.25 0 1 0 13.25 8 5.256 5.256 0 0 0 8 2.75Z"
                ></path>
                <path
                  d="M8 11.605a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75ZM8 6.15a.998.998 0 0 1-.92-.62 1 1 0 0 1 1.63-1.09c.182.189.285.439.29.7a.996.996 0 0 1-.62.93 1 1 0 0 1-.38.08Z"
                ></path>
              </svg>
            </span>
            <ul
              v-if="showDropDown"
              class="absolute top-full left-0 bg-white border border-gray-300 shadow-lg rounded-lg max-h-40 overflow-y-auto z-50 mt-1 w-40"
            >
              <li
                v-for="option in options"
                :key="option"
                @click="selectOption(option)"
                class="px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-7 ">
          <template v-if="loading">
            <div v-for="item in 5" :key="item.id">
              <ServiceCardSkeleton />
            </div>
          </template>
          <template v-else>
            <RestaurantList :services="services" />
          </template>
        </div>

        <div class="flex justify-center items-center space-x-2 mt-6">
          <!-- Bouton Précédent -->
          <button
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-4 py-1 text-sm font-semibold rounded-lg transition duration-300 hover:bg-gray-200 disabled:text-gray-400 disabled:bg-gray-100"
          >
            <!-- {{ $t('previous') }} -->
            <svg
              class="h-8 w-8 text-orange-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>

          <!-- Pagination Numérotée -->
          <button
            v-for="page in totalPages"
            :key="page"
            @click="changePage(page)"
            class="px-3 py-2 text-sm font-semibold rounded-lg transition duration-300 hover:bg-gray-200"
            :class="{
              'bg-purple-500 text-white': currentPage === page,
              'text-gray-700': currentPage !== page,
            }"
          >
            {{ page }}
          </button>

          <!-- Bouton Suivant -->
          <button
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-4 py-1 text-sm font-semibold rounded-lg transition duration-300 hover:bg-gray-200 disabled:text-gray-400 disabled:bg-gray-100"
          >
            <!-- {{ $t('next') }} -->
            <svg
              class="h-8 w-8 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Carte (map) -->
    <div
      class="lg:w-[500px] lg:min-w-[250px] z-0 text-black flex justify-center lg:relative lg:mt-0 md:mt-5 md:w-full md:min-h-[500px]"
    >
      <div class="w-full h-screen">
        <EServiceMapList
          size="lg"
          :places="services"
          class="h-screen"
          :address="currentAddress"
        ></EServiceMapList>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Categories } from "@/mocks/categories";
import RestaurantList from "@/views/restaurant/RestaurantList.vue";
import BaseIcon from "@/components/icons/BaseIcon.vue";
import { useRoute } from "vue-router";
import { ref, onMounted, computed, watch, watchEffect } from "vue";
import { useI18n } from "vue-i18n";
import { getServicesCategoryIdBy } from "@/servicesApi/hotelServicesApi.js";
import EServiceFilter from "@/components/ui/EServiceFilter.vue";
import EServiceMapList from "@/components/ui/EServiceMapList.vue";
import { useMIHStore } from "@/stores/manageHotelInterface";
import ServiceCardSkeleton from "@/components/skeletons/ServiceCardSkeleton.vue";
const currentAddress = ref({});
const city =ref('');
const hotelStore = useMIHStore();

const categories = computed(() => {
  return hotelStore.allCategories;
});
const allRestaurant = ref([]);
const sortedRestaurantOption = ref([]);
const sortedRestaurantList = ref([]);
const showMenu = ref(false);
const showDropDown = ref(false);
const selectedOption = ref(null);
const route = useRoute();

const filteredPlaces = ref([]);
const services = ref([]);
const textSearch = ref("");
const { t } = useI18n();
const categoryId = route.params.categoryId;

const loading = ref(true);
const category = computed(() => {
  return categories.value.filter((e) => e.id == categoryId)[0];
});
const currentPage = ref(1);
const totalPages = ref(5); // Changez ceci selon votre nombre total de pages

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

function selectOption(option) {
  selectedOption.value = option;
  showDropDown.value = false;
}

const options = computed(() => [
  t("recommanded"),
  t("numberReview"),
  t("positive_review"),
]);
function toggleMenu() {
  showMenu.value = !showMenu.value;
}

const optionToSort = (optionFilter) => {
  sortedRestaurantOption.value.push(optionFilter);
  helpSort(sortedRestaurantOption.value.length);
  console.log(sortedRestaurantOption.value);
  console.log(optionFilter);
};

const helpSort = (length) => {
  if (length) {
    for (let i = 0; i <= length; i++) {
      sortedRestaurantList.value = sortedRestaurant(
        sortedRestaurantOption.value[i]
      );
    }
  } else {
    filteredPlaces.value = allRestaurant.value;
  }
};

const sortedRestaurant = (optionFilter) => {
  const arg = optionFilter;
  sortedRestaurantList.value = Categories.find(
    (category) => category.label === arg
  );
  filteredPlaces.value = sortedRestaurantList.value;
};

const reDoSort = (optionFilter) => {
  sortedRestaurantOption.value = sortedRestaurantOption.value.filter(
    (r) => r !== optionFilter
  );
  helpSort(sortedRestaurantOption.value.length);
};

const priceFilter = (optionFilter) => {
  filteredPlaces.value = allRestaurant.value;
  const arg = optionFilter;
  sortedRestaurantList.value = Categories.find(
    (category) => category.label === arg
  );
  filteredPlaces.value = sortedRestaurantList.value;
};

const getServiceListLocal = async () => {
  console.log("result");
  try {
    loading.value = true;
    const result = await getServicesCategoryIdBy(categoryId);
    const datas = result.data;
    if (datas && datas.items.length > 0) {
      services.value = datas.items.map((e) => {
        const ads = JSON.parse(e.addressService)
        return {
          ...e,
          address: ads,
          lat:ads.lat,
          lng:ads.lng

        };
      });
    }
    console.log("result", datas);
    loading.value = false;
  } catch {
    loading.value = false;
  }
};

onMounted(() => {
  getServiceListLocal();
});
</script>
<style scoped>
.transition-all {
  transition: all 0.3s ease-in-out;
}
slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
.scrollbar-hidden {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Chrome, Safari et Edge */
}
</style>
