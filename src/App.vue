<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/bars/Navbar.vue';
import Footer from '@/components/footer/Footer.vue'
</script>

<template>

<div class="min-h-screen flex flex-col">
    <Navbar />

    <div class="flex-1 bg-customWhite">
      <router-view />
    </div>

    <Footer />
  </div>



</template>

<style scoped>

</style>
