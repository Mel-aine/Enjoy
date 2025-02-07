<template>
    <div class="p-6 bg-white flex flex-col items-center space-y-1 ">
      <!-- Icône centrée -->
      <i :class="icon" class="text-2xl text-customBlue"></i>
  
      <!-- Description centrée -->
      <p class="text-customRed text-lg text-center font-poppins">{{ category }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: {
      type: String,
      required: true,
      default: 'fa fa-info-circle',
    },
    category: {
      type: String,
      required: true,
      default: 'Description dynamique ici.',
    },
  });
  </script>
  