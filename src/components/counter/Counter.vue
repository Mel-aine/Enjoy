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
          :disabled="modelValue === 0"
          >
          -
        </button>
  
        <!-- Affichage du nombre -->
        <span class="px-6 py-2 text-base font-medium text-black bg-white">
          {{ modelValue  }}
        </span>
  
        <!-- Bouton "+" désactivé si count === 42 -->
        <button 
          type="button" 
          class="px-4 py-2 text-base font-medium text-black bg-white border-l hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="increment"
          :disabled="modelValue === 42"
          >
          +
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
import { defineProps, defineEmits } from 'vue';

// Définition des props et des événements émis
const props = defineProps({
  modelValue: Number, // Représente la valeur actuelle (nombre d'adultes ou d'enfants)
});

const emit = defineEmits(['update:modelValue']);

// Fonction pour augmenter la valeur
const increment = () => {
  emit('update:modelValue', props.modelValue + 1);
};

// Fonction pour diminuer la valeur
const decrement = () => {
  if (props.modelValue > 0) {
    emit('update:modelValue', props.modelValue - 1);
  }
};

  </script>
  