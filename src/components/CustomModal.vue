
<template>
    <Teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class=" rounded-lg p-6 max-w-screen-lg ">
          <!-- Bouton placé au-dessus du slot -->
          <button 
            class="bg-orange-300 hover:bg-orange-200 rounded-full w-10 h-10 text-black text-lg absolute -top-24 -right-[655px] z-10 shadow-md" 
            @click="closeModal">
            <i class="fa fa-times "></i>
          </button>
  
          <!-- Contenu dynamique de la modal -->
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
  