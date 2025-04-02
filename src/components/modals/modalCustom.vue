<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <!-- Bouton Fermer -->
        <button @click="closeModal" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
          &times;
        </button>
  
        <!-- Titre -->
        <h2 class="text-xl font-semibold text-gray-900 mb-4" v-if="title">
          Alert
        </h2>
  
        <!-- Contenu dynamique -->
        <div class="mb-6">
          <slot></slot>
        </div>
  
        <!-- Boutons -->
        <div class="flex justify-end space-x-3">
          <button v-if="showCancel" @click="closeModal" class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
            {{ cancelText }}
          </button>
          <button v-if="showConfirm" @click="confirmAction" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isVisible: Boolean,
    title: String,
    confirmText: { type: String, default: 'OK' },
    cancelText: { type: String, default: 'Annuler' },
    showCancel: { type: Boolean, default: true },
    showConfirm: { type: Boolean, default: true }
  });
  
  const emit = defineEmits(['close', 'confirm']);
  
  const closeModal = () => {
    emit('close');
  };
  
  const confirmAction = () => {
    emit('confirm');
  };
  </script>
  
  <style scoped>
  /* Ajoute des styles spécifiques si nécessaire */
  </style>
  