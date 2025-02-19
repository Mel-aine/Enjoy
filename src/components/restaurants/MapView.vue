<script setup>
import { onMounted } from "vue";
import L from "leaflet";

onMounted(() => {
  const map = L.map("cameroun-map").setView([3.848, 11.502], 6); // Coordonnées centrales du Cameroun

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Ajout d'un marqueur à Yaoundé
  L.marker([3.848, 11.502])
    .addTo(map)
    .bindPopup("Yaoundé - Capitale du Cameroun")
    .openPopup();
});
</script>

<template>
  <div class="w-full h-[300px] md:h-[500px] lg:h-full">
    <div id="cameroun-map" class="w-full h-full"></div>
  </div>
</template>


<style scoped>
/* Assurez-vous que la carte a une hauteur définie */
/* #cameroun-map {
  height: 100%;
} */
</style>
