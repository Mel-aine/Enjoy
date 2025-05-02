<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div class="w-16 h-16 border-4 border-customBlue border-dashed rounded-full animate-spin"></div>
    </div>
  </template>
  
  <script setup>
  // Ce composant n'a pas besoin de props si c'est juste pour afficher
  </script>
  
  <style scoped>
  /* Optionnel : animation CSS plus douce */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  </style>
  