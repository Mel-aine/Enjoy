<script setup>
import Navbar from '../bars/Navbar.vue';
import Footer from '../footer/Footer.vue';
import { useFooterStore } from '@/stores/footer';
import {computed} from 'vue'
const footerStore = useFooterStore();

import { useRoute } from 'vue-router'; // Importer useRoute pour accéder à la route actuelle

const route = useRoute();

const isExcludedPage = computed(() => route.path === '/login');



</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <!-- ===== Header Start ===== -->
  <div class="bg- customNeutreColor">
    <div v-if="!isExcludedPage">
      <Navbar />
    </div>
    <!-- ===== Header End ===== -->

        <!-- ===== Main Content Start ===== -->
        <main>
          <div class=" ">
            <slot></slot>
          </div>
        </main>
        <!-- ===== Main Content End ===== -->
  </div>
  <!-- ===== Page Wrapper End ===== -->
  <div v-if="!isExcludedPage">
   <Footer :showMoreFooter =footerStore.getShowMoreFooter />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.element {
  min-height: calc(100vh - 56px);
}
</style>
