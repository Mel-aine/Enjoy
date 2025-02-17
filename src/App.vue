<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Navbar from '@/components/bars/Navbar.vue';
import Footer from '@/components/footer/Footer.vue'
import CategoryView from '@/components/category/CategoryView.vue'


const showMoreFooter = ref(false);
const updateFooter = (value) => {
  showMoreFooter.value = value;
  console.log('updateFooter', showMoreFooter.value);  // for testing purposes
};

</script>

<template>

<div class="min-h-screen flex flex-col">
    <Navbar />

    <div class="flex-1 bg-customWhite">
      <router-view />
    </div>
    <CategoryView @toggle-footer="updateFooter" />
    <!-- <Footer /> -->
    <Footer :showMoreFooter="showMoreFooter" />
  </div>



</template>

<style scoped>

</style>
