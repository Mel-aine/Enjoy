<template>
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      @click="closeModal"
    >
    
      <div class="bg-white rounded-lg p-6 max-w-md w-full relative" @click.stop>
        <span class="absolute top-2 right-2 text-gray-500 cursor-pointer text-2xl" @click="closeModal">
          &times;
        </span>
        <slot></slot> <!-- Contenu dynamique de la modale -->
      </div>
    </div>
  </template>
  
  <script setup>
  // Props
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });
  
  // Événements
  const emit = defineEmits(['close']);
  
  // Méthode pour fermer la modale
  const closeModal = () => {
    emit('close');
  };
  </script>