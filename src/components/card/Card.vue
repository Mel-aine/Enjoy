<template>
    <div class="max-w-sm bg-white border rounded-xl shadow-lg overflow-hidden relative group">
      <!-- Image en fond -->
      <div class="relative">
        <img :src="image" alt="Card Background" class="w-full h-40 object-cover" />
        <!-- Superposition de l'icône -->
        <div class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
          <i :class="icon" class="text-white text-5xl"></i>
        </div>
      </div>
      <div class="my-1 border rounded-full"></div>
      <!-- Description -->
      <div class="px-4 py-1">
      <!-- Conteneur pour le titre et l'icône alignés -->
      <div class="flex justify-between items-center">
        <h3 class="text-sm font-semibold">{{ title }}</h3>
        <i class="fa fa-circle-check text-blue-500"></i>

      </div>
      <!-- Description en dessous -->
      <p class="text-xs text-gray-600 mt-1">{{ description }}</p>
    </div>
    </div>
    <div class="flex flex-col items-start"></div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  // Définir l'image par défaut dans un computed
  const defaultImage = new URL('@/assets/logo.png', import.meta.url).href;
  
  const props = defineProps({
    image: {
      type: String,
      required: true,
      default: '',
    },
    icon: {
      type: String,
      required: true,
      default: 'fa fa-heart',
    },
    title: {
      type: String,
      required: true,
      default: 'Titre de la Card',
    },
    description: {
      type: String,
      required: true,
      default: 'Ceci est une description personnalisable.',
    },
  });
  
  // Utilisation d'un computed pour obtenir l'image, ou celle par défaut si vide
  const image = computed(() => props.image || defaultImage);
  </script>
  