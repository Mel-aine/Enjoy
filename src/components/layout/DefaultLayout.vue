<script setup>
import Navbar from '../bars/Navbar.vue';
import Footer from '../footer/Footer.vue';
import { useFooterStore } from '@/stores/footer';
const footerStore = useFooterStore();

import { useRoute } from 'vue-router'; // Importer useRoute pour accéder à la route actuelle
import { computed } from 'vue';

const $route = useRoute();
const showNavbar = computed(() => $route.meta.hideComponent);
const showFooter = computed(() => $route.meta.hideComponent);





</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <!-- ===== Header Start ===== -->
  <div class="bg- customNeutreColor">
    <div v-if="!showNavbar" > <!-- Cache la Navbar sur les routes définies -->
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
  <div v-if="!showFooter">
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
