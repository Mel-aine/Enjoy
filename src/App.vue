<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import { ref } from 'vue'
import { useI18n } from "vue-i18n";
import { useLanguageStore } from './lang/language';
import DefaultLayout from './components/layout/DefaultLayout.vue';
const useLanguage = useLanguageStore();
const t = useI18n({ useScope: "global" });
// import Navbar from '@/components/bars/Navbar.vue';
// import Footer from '@/components/footer/Footer.vue'
// import { useFooterStore } from '@/stores/footer';

//import FilterView from '@/components/restaurants/FilterView.vue'

// const footerStore = useFooterStore();


if (useLanguage.language) {
  t.locale.value = useLanguage.language;
} else {
  useLanguage.set(t.locale.value)
}
const isLogin = true;

</script>



<template>
  <template v-if="isLogin">
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </template>
  <template v-else>
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </template>
</template>


<style scoped>

</style>
