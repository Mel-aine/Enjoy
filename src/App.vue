<script setup>
import { useI18n } from "vue-i18n";
import { useLanguageStore } from './lang/language';
import DefaultLayout from './components/layout/DefaultLayout.vue';
import { onMounted } from "vue";

const useLanguage = useLanguageStore();
const t = useI18n({ useScope: "global" });



if (useLanguage.language) {
  t.locale.value = useLanguage.language;
} else {
  useLanguage.set(t.locale.value)
}

function loadGoogleMapsScript() {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve(); // L'API est déjà chargée
      return;
    }

    const script = document.createElement('script');
    // script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&libraries=places`;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&callback=initMap&v=weekly&libraries=places,marker`;
    script.onload = resolve;
    script.onerror = () => reject(new Error('Erreur lors du chargement de l\'API Google Maps'));
    document.head.appendChild(script);
  });
}

onMounted(() => {
  loadGoogleMapsScript();
})
</script>



<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>

</template>


<style scoped></style>
