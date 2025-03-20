
<template>
    <Teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeOnOverlay ? closeModal() : null">
        <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative" @click.stop>
          <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-800" @click="closeModal">✖</button>
          <slot>Contenu de la modal</slot>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  defineProps({
    isOpen: Boolean, 
    closeOnOverlay: { type: Boolean, default: true }
  });
  
  const emit = defineEmits(["close"]);
  
  const closeModal = () => {
    emit("close");
  };
  </script>
  