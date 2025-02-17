<template>
<div class="py-10">
    <h1 class="text-4xl font-bold text-gray-900 flex justify-center">Catégories</h1>
    <div class="flex flex-wrap gap-4 justify-center mx-auto mt-20">
        
      <CategoryCard 
        v-for="category in mainCategories" 
        :key="category.id"
        :name="category.label" 
        :icon="category.icon" 
      />
  
      <div 
        class="flex flex-col items-center justify-center text-gray-700 hover:bg-orange-200 
               h-[180px] min-w-30 w-[250px] p-4 rounded-lg shadow-lg drop-shadow-lg 
               cursor-pointer select-none transition-transform transform hover:scale-105 bg-white"
        @click="toggleShowMore"
      >
        <i class="fa fa-ellipsis-h text-customBlue text-2xl mb-2"></i>
        <span class="text-lg font-semibold text-gray-700 text-center hover:text-customBlue">
          {{ showMore ? "Moins" : "Plus" }}
        </span>
      </div>
    </div>
</div>
  </template>
  
  <script setup>
  import { ref, computed, defineEmits } from "vue";
  import CategoryCard from "@/components/categoryCard/CategoryCard.vue";
  import { Categories } from '@/mocks/categories.js';
  
  
  const showMore = ref(false);
  
  
  const toggleShowMore = () => {
    showMore.value = !showMore.value;
    emit("toggle-footer", showMore.value);
  };
  
  // Séparer les catégories en principales et cachées
  const mainCategories = computed(() => Categories.slice(0, 3));
  const emit = defineEmits(["toggle-footer"]);
  </script>
  