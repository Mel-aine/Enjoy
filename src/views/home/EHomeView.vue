<script setup>
import { ref, computed, onMounted } from 'vue';
import CategoryView from '@/components/category/CategoryView.vue';
import { Categories } from '@/mocks/categories';
import ServiceCarousel from '../../components/carousel/ServiceCarousel.vue';
import { useMIHStore } from '../../stores/manageHotelInterface';
const showSke = ref(true);
const showLeftButton = ref(false);
const showRightButton = ref(true);
const showCategory = ref(false);
const scrollableList = ref([]);
const hotelStore = useMIHStore();


const categories = computed(() => {
  console.log('hotelStore.allCategories', hotelStore.allCategories)
  return hotelStore.allCategories
});

const hiddenCategories = computed(() => categories.value.slice(9));

const checkScrollButtonsVisibility = () => {
  if (!scrollableList.value || scrollableList.value.length === 0) return;

  const element = scrollableList.value[0];
  showLeftButton.value = element.scrollLeft > 0;
  showRightButton.value = element.scrollWidth > element.clientWidth + element.scrollLeft;
};

const scrollLeft = () => {
  if (scrollableList.value[0]) {
    scrollableList.value[0].scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(() => checkScrollButtonsVisibility(), 300);
  }
};

const scrollRight = () => {
  if (scrollableList.value[0]) {
    scrollableList.value[0].scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(() => checkScrollButtonsVisibility(), 300);
  }
};

const menuCategory = Categories.map((category) => ({
  route: `/fr/categorie/${category.id}`,
  label: category.label,
  icon: category.icon,
  Cards: category.places?.map((card) => ({
    title: card.name,
    address: card.address,
    image: card.images,
    route: `/fr/categorie/${card.id}`,
  })),

}));
console.log('category', menuCategory[0].Cards)


const toggleCategory = () => {
  showCategory.value = !showCategory.value

};
const handelShowSke = () => {
  showSke.value = false;
}
</script>

<template>
  <div class="p-7">
    <CategoryView @toggle-category="toggleCategory" />
    <!-- Section cachée affichée avec animation -->
    <div v-if="showCategory"
      class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 md:space-x-2 max-w-screen-2xl mx-auto justify-center my-6  transition-opacity duration-700 ease-in-out">
      <div v-for="category in hiddenCategories" :key="category.id"
        class="flex flex-row items-center  gap-2 p-2 rounded-lg  transition-all cursor-pointer">
        <i :class="`${category.icon} text-2xl text-customRed`"></i>
        <router-link :to="category.link ?? '/find'"
          class="text-sm md:text-md sm:text-sm lg:text-lg font-semibold text-gray-700 hover:text-customBlue hover:underline truncate">
          {{ $t(category.categoryName) }}
        </router-link>
      </div>
    </div>
    <div class="mt-10">
      <template v-if="showSke">
        <div class="flex flex-col gap-2 mb-6  w-full  items-start mx-auto  max-w-screen-2xl">

          <div class="flex gap-4 overflow-x-auto scroll-smooth py-4 scrollbar-hide">
            <div v-for="n in 6" :key="'skeleton-' + n"
              class="min-w-[250px] max-w-xs bg-white rounded-lg shadow-md p-4 flex-shrink-0 animate-pulse">
              <div class="w-full h-40 bg-gray-300 rounded-md mb-2"></div>
              <div class="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
              <div class="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div class="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
              <div class="flex items-center mt-2 space-x-2">
                <div class="w-4 h-4 bg-yellow-200 rounded-full"></div>
                <div class="w-6 h-3 bg-gray-300 rounded"></div>
                <div class="ml-auto w-12 h-3 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-for="(cat, ind) in categories" :key="ind">
        <ServiceCarousel :category="cat" @display="handelShowSke">
        </ServiceCarousel>
      </template>
    </div>



  </div>
</template>
<style scoped>
/* Masque les barres de défilement tout en gardant la scrollabilité */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* Internet Explorer */
  scrollbar-width: none;
  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari */
}

@media (max-width: 768px) {
  .bg-white {
    padding: 20px;
  }

  /* .w-[250px] {
    width: 100%;
  }

  .w-[200px] {
    width: 100%;
  }

  .w-full {
    width: 100%;
  }*/

}
</style>
