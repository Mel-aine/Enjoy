<template>
  <div class="py-10  ">
    <h1 class="text-4xl font-bold text-gray-900 flex justify-center">{{ $t('category') }}</h1>
    <div
      class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 md:space-x-2 max-w-screen-2xl mx-auto justify-center ">

      <div v-for="category in mainCategories" :key="category.id">
        <router-link :to="'/categories/' + category.id">
          <CategoryCard :name="t(category.categoryName)" :icon="category.icon" />
        </router-link>
      </div>
      <div class="flex flex-col items-center justify-center text-gray-700 hover:bg-orange-200
               h-[180px] min-w-30 w-[250px] p-4 rounded-lg shadow-lg drop-shadow-lg
               cursor-pointer select-none transition-transform transform hover:scale-105 bg-white"
        @click="toggleShowMore">
        <i class="fa fa-ellipsis-h text-customRed text-2xl mb-2"></i>
        <span class="text-lg font-semibold text-gray-700 text-center hover:text-customBlue">
          {{ showMore ? $t('Moins') : $t('Plus') }}
        </span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from "vue";
import CategoryCard from "@/components/categoryCard/CategoryCard.vue";
import { useI18n } from "vue-i18n";
import { useMIHStore } from '../../stores/manageHotelInterface';

const hotelStore = useMIHStore();

const categories = computed(() => {
  return hotelStore.allCategories
});
const { t } = useI18n();
const showMore = ref(false);


const toggleShowMore = () => {
  showMore.value = !showMore.value;
  emit("toggle-category", showMore.value);
};

// Séparer les catégories en principales et cachées
const mainCategories = computed(() => categories.value.slice(0, 9));
//const mainCategoriesSuit = computed(() => Categories.slice(0,7));
const emit = defineEmits(["toggle-footer"]);
</script>
