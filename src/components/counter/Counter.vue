<template>
    <div class="flex items-center justify-between w-full">
      <!-- Texte -->
      <span class="whitespace-nowrap justify-start"><slot></slot></span>
  
      <!-- Conteneur du compteur -->
      <div class="flex justify-end border rounded-md overflow-hidden">
        <!-- Bouton "-" désactivé si count === 0 -->
        <button 
          type="button" 
          class="px-4 py-2 text-base font-medium text-black bg-white border-r hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="decrement"
          :disabled="count === 0"
        >
          -
        </button>
  
        <!-- Affichage du nombre -->
        <span class="px-6 py-2 text-base font-medium text-black bg-white">
          {{ count }}
        </span>
  
        <!-- Bouton "+" désactivé si count === 42 -->
        <button 
          type="button" 
          class="px-4 py-2 text-base font-medium text-black bg-white border-l hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="increment"
          :disabled="count === 42"
        >
          +
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const count = ref(0);
  
  const increment = () => {
    if (count.value < 42) {
      count.value++;
    }
  };
  
  const decrement = () => {
    if (count.value > 0) {
      count.value--;
    }
  };
  </script>
  