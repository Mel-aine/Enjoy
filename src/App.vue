<script setup>
import { useI18n } from "vue-i18n";
import { useLanguageStore } from './lang/language';
import DefaultLayout from './components/layout/DefaultLayout.vue';

const useLanguage = useLanguageStore();
const t = useI18n({ useScope: "global" });



if (useLanguage.language) {
  t.locale.value = useLanguage.language;
} else {
  useLanguage.set(t.locale.value)
}


</script>



<template>
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  
</template>


<style scoped>

</style>
