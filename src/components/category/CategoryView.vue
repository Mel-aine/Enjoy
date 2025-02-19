<template>
<div class="py-10 px-10 ">
    <h1 class="text-4xl font-bold text-gray-900 flex justify-center">{{ $t('category') }}</h1>
    <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 md:space-x-2 max-w-screen-lg mx-auto justify-center ">


      <CategoryCard
        v-for="category in mainCategories"
        :key="category.id"
        :name="$t('categories.' + category.label)"
        :icon="category.icon"

      />

      <div
        class="flex flex-col items-center justify-center text-gray-700 hover:bg-orange-200
               h-[180px] min-w-30 w-[250px] p-4 rounded-lg shadow-lg drop-shadow-lg
               cursor-pointer select-none transition-transform transform hover:scale-105 bg-white"
        @click="toggleShowMore"
      >
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
  import { Categories } from '@/mocks/categories.js';
  import { useI18n } from "vue-i18n";

  const { t } = useI18n();
  const showMore = ref(false);


  const toggleShowMore = () => {
    showMore.value = !showMore.value;
    emit("toggle-footer", showMore.value);
  };

  // Séparer les catégories en principales et cachées
  const mainCategories = computed(() => Categories.slice(0, 7));
  //const mainCategoriesSuit = computed(() => Categories.slice(0,7));
  const emit = defineEmits(["toggle-footer"]);
  </script>
