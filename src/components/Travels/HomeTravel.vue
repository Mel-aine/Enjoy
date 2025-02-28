<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-green-500 text-white p-4 text-center">
      <h1>Bienvenue </h1>
    </header>

    <!-- Main -->
    <main class="flex-1 p-6 bg-gray-50">
      <FilterTravel />
       <!-- <CheckingView/> -->

    </main>

    <!-- Footer -->
    <footer class="bg-gray-50 text-gray-800 p-4 text-center ">
      <img
        src="@/assets/voy.png"
        alt="Logo Flixbus"
        class="mx-auto mb-2 w-full h-[300px]"
      />
      <p>&copy; 2025 Mon Site Web. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup>
// import CheckingView from '../../views/travels/ECheckingView.vue';
import FilterTravel from './FilterTravel.vue';
</script>

<style scoped>
</style>


