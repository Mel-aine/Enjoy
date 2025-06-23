<script setup>
import { ref, computed } from 'vue';
// import Card from '@/components/card/Card.vue';
// import Category from '@/components/category/Category.vue';
// import Carousel from '@/components/carousel/Carousel.vue';
import CategoryView from '@/components/category/CategoryView.vue';
import { Categories } from '@/mocks/categories';
import ServiceCarousel from '../../components/carousel/ServiceCarousel.vue';




const showLeftButton = ref(false);
const showRightButton = ref(true);
const showCategory = ref(false);

const scrollableList = ref([]);
const hiddenCategories = computed(() => Categories.slice(9));


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
          {{ $t('categories.' + category.label) }}
        </router-link>
      </div>
    </div>
    <div class="mt-40">
      <template v-for="(cat, ind) in Categories" :key="ind">
        <ServiceCarousel :category="cat">
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
