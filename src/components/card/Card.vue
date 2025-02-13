<template>
    <div class="max-w-sm bg-customWhite border rounded-xl shadow-lg overflow-hidden relative group">
      <!-- Image en fond -->
      <div class="relative">
        <img :src="image" alt="Card Background" class="w-full h-40 object-cover" />
        <!-- Superposition de l'ombre au passage de la souris -->
        <div class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
        </div>
      </div>
      <div class="my-1 border rounded-full"></div>
      <!-- Description -->
          <div class="px-4 py-1">
          <!-- Conteneur pour le titre et l'icône alignés -->
            <div class="flex justify-between items-center">
              <h3 class="text-sm font-semibold">{{ title }}</h3>
              <i class="fa fa-circle-check text-customBlueVariant"></i>
            </div>
            <div class="flex justify">

            <BaseIcon name="MapPin" custom-color="text-customRed" size="12" stroke-width="3" class="mr-1"/>
            <p class="text-xs text-customDarkVariant1 font-poppins font-medium "><b>{{ localisation }}</b></p>

            </div>

            <p class="text-xs text-customDarkVariant2 font-poppins">{{ truncateText(description, 30) }}</p>

          <!-- Description en dessous -->
          </div>
    </div>

  </template>

  <script setup>
  import { computed } from 'vue';
  import BaseIcon from '../icons/BaseIcon.vue';
  import { truncateText } from '@/utils/functions'
  // import BaseIcon from '../icons/BaseIcon.vue';

  // Définir l'image par défaut dans un computed
  const defaultImage = new URL('@/assets/koala.png', import.meta.url).href;

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
      default: 'Venez, vivez, détendez vous.',
    },
    localisation: {
      type: String,
      default: 'Yaoundé, Damas, Cameroun',
    }
  });

  // Utilisation d'un computed pour obtenir l'image, ou celle par défaut si vide
  const image = computed(() => props.image || defaultImage);
  </script>
