<script setup>
import { ref,computed } from 'vue';
// import Card from '@/components/card/Card.vue';
// import Category from '@/components/category/Category.vue';
// import Carousel from '@/components/carousel/Carousel.vue';
import CategoryView from '@/components/category/CategoryView.vue';
import { Categories } from '@/mocks/categories';




const showLeftButton = ref(false);
const showRightButton = ref(true);
const showCategory = ref(false);

const scrollableList = ref([]);
const hiddenCategories = computed(() => Categories.slice(7));
 

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
  Cards: category.places.map((card) => ({
    title: card.name,
    address: card.address,
    image: card.images,
    route: `/fr/categorie/${card.id}`,
  })),

}));
console.log('category',menuCategory[0].Cards)


const toggleCategory = () => {
  showCategory.value = !showCategory.value
    
    };
</script>

<template>
  <div class="p-7">
    <!-- <div class="bg-customWhite px-10 py-5 container mx-auto w-full md:w-[1400px]">
      <p class="text-xl font-poppins">{{$t('home.descriptionHomePart1')}}</p>
      <p class="text-xs font-poppins">{{$t('home.descriptionHomePart2')}} <span class="font-bold"> Enjoy</span> {{$t('home.descriptionHomePart3')}}</p>

      <div class="flex flex-col gap-6 p-4">
        <div v-for="(category, index) in menuCategory" :key="index" class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mt-2 relative"> -->
          <!-- Catégorie fixe -->
          <!-- <div class="flex-shrink-0 mb-4 md:mb-0">
            <Category :category="$t('categories.' + category.label)" :icon="category.icon" class="w-[200px]" />
          </div> -->

          <!-- Cartes scrollables -->
          <!-- <div ref="scrollableList" class="flex overflow-x-auto flex-nowrap space-x-4 gap-1 scrollbar-hide max-w-full relative scroll-smooth">
            <router-link
              v-for="(card, index) in category.Cards"
              :to="card.route"
              :key="index"
              class="bg-transparent rounded flex-shrink-0 p-2 w-[250px] sm:w-[200px] md:w-[250px]"
             >
              <Card :title="card.title"  :localisation="card.address" />
            </router-link>
          </div> -->
            <!-- Bouton suivant -->
            <!-- <button
              class="absolute right-0 -mr-4 z-10 bg-customNeutreColor p-2 w-10 h-10 rounded-full hover:bg-white focus:outline-none"
              @click="scrollRight(index)"
              v-show="showRightButton"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          <button
            class="absolute left-52 -ml-4 z-10 bg-customNeutreColor p-2 w-10 h-10 rounded-full hover:bg-white focus:outline-none"
            @click="scrollLeft(index)"
            v-show="showLeftButton"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </div> -->

    <!-- Carousel -->
    <!-- <Carousel /> -->
    <CategoryView @toggle-category="toggleCategory" />
             <!-- Section cachée affichée avec animation -->
    <div v-if="showCategory"  class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 md:space-x-2 max-w-screen-lg mx-auto justify-center my-6  transition-opacity duration-700 ease-in-out">
        <div v-for="category in hiddenCategories" :key="category.id" class="flex flex-row items-center  gap-2 p-2 rounded-lg  transition-all cursor-pointer">
          <i :class="`${category.icon} text-2xl text-customRed`"></i>
          <a class="text-sm md:text-md sm:text-sm lg:text-lg font-semibold text-gray-700 hover:text-customBlue hover:underline truncate"
          
          :href="category.route">
            {{ $t('categories.' + category.label) }}
          </a>
        </div>
    </div>




  </div>
</template>
<style scoped>
/* Masque les barres de défilement tout en gardant la scrollabilité */
.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
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
