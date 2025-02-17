<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from "vue-i18n";
import { useLanguageStore } from './lang/language';
const useLanguage = useLanguageStore();
const t = useI18n({ useScope: "global" });
import Navbar from '@/components/bars/Navbar.vue';
import Footer from '@/components/footer/Footer.vue'
import { useFooterStore } from '@/stores/footer';

const footerStore = useFooterStore();


if (useLanguage.language) {
  t.locale.value = useLanguage.language;
} else {
  useLanguage.set(t.locale.value)
}


</script>

<template>

<div class="min-h-screen flex flex-col">
    <Navbar />

    <div class="flex-1 bg-customWhite">
      <router-view />

    </div>
    <!-- <Footer /> -->
    <Footer :showMoreFooter="footerStore.getShowMoreFooter" />
  </div>



</template>

<style scoped>

</style>
