<template>
  <div class="p-5">
    <div class="container mx-auto min-h-screen ">
      <div class="flex justify-between items-center ">
        <div>
          <h4 class="mb-3 text-2xl font-bold flex items-center">
            {{ name }}
            <span class="text-[#B57EDC] text-2xl ml-2">
              <i class="fas fa-check-circle" aria-label="Vérifié"></i>
            </span>
          </h4>

          <p class="text-gray-700">
            <i class="fas fa-star text-orange-500"></i>
            Catégories :
            <strong>
                <router-link class="text-dark hover:underline">
                  {{ label }}
                </router-link>
            </strong>
            <br>

            <i class="fas fa-map-marker-alt text-purple-500"></i>
            &nbsp;<strong>Adresse:</strong>
            {{address }}
            <br>
            <!-- <i class="fas fa-utensils" aria-label="Menu de restaurant"></i> -->
          </p>
        </div>
        <div class="flex items-center " v-if="label === 'Restaurants'">
          <router-link to="/menu" class="hover:underline space-x-2 text-purple-500">
            <i class="fas fa-utensils text-[#B57EDC]" aria-label="Menu de restaurant"></i>
            <span class="font-semibold text-orange-500">Menu du jour</span>
          </router-link>
        </div>
      </div>

      <div class="my-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
        <div class="flex justify-center">
          <img class="h-auto max-w-full rounded-lg shadow-xl" :src="logo" :alt="`${name} logo`" />
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
          <div v-for="(image, index) in images" :key="index">
            <img class="h-auto max-w-full rounded-lg shadow-md transition-transform transform hover:scale-105"
                :src="image"
                :alt="`${name} image ${index + 1}`" />
          </div>
        </div>
      </div>

          <!-- Bouton "Afficher toutes les photos" -->
        <!-- <div class="text-center mt-5">
          <button class="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Afficher toutes les photos ({{ selectedService.images.length }})
          </button>
        </div> -->
      </div>

      <div class="my-10 shadow-2xl ">
        <div class="flex flex-col sm:flex-row w-full items-start mx-auto">

          <!-- Section principale -->
          <section class="relative w-full sm:w-2/3 bg-white rounded-xl shadow-lg p-6">
            <div class="flex justify-between items-center pb-4 border-b border-gray-200">
              <h3 class="text-2xl font-semibold text-orange-500">
                {{ name }}
              </h3>
              <button
                @click="toggleFavorite"
                class="flex items-center justify-center text-red-500 bg-gray-100 w-12 h-12 rounded-full border border-gray-300 shadow-md hover:bg-gray-200 transition-all"
              >
                <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'" class="text-xl"></i>
              </button>
            </div>

            <div class="pt-4">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Description</h4>
              <p class="text-gray-600 leading-relaxed">
                {{ description }}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-200 flex justify-end">
              <button class="text-[#B57EDC] font-semibold flex items-center gap-2 hover:underline transition-all">
                <i class="fas fa-arrow-circle-right"></i> Voir plus
              </button>
            </div>
          </section>

          <!-- Section des infos & horaires -->
          <div class="w-80 sm:w-1/3 mx-5 mt-6 sm:mt-0 sticky top-20 space-y-5">

            <!-- Informations de contact -->
            <div class="p-5 shadow-lg rounded-lg border bg-white">
              <p class="text-gray-600 flex items-center gap-2 mb-3">
                <i class="fas fa-envelope text-[#B57EDC]"></i>
                {{ email }}
              </p>
              <p class="text-gray-600 flex items-center gap-2 mb-3">
                <i class="fas fa-phone text-[#B57EDC]"></i>
                {{ phone }}
              </p>
              <p class="text-gray-600 flex items-center gap-2 mb-3">
                <i class="fas fa-map-marker-alt text-[#B57EDC]"></i>
                {{ address }}
              </p>
            </div>

            <!-- Tableau des horaires -->
            <div  class="p-5 shadow-lg rounded-lg border bg-white">
              <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-calendar-alt text-[#B57EDC]"></i> Horaires
              </h3>

              <div class="p-3 bg-white " v-if="opening_hours">
                <table class="min-w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100 ">
                      <th class="py-3 px-2 text-left text-gray-700 font-semibold">Jour</th>
                      <th class="py-3 px-2 text-left text-gray-700 font-semibold">Ouverture</th>
                      <th class="py-3 px-2 text-left text-gray-700 font-semibold">Fermeture</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(schedule, index) in opening_hours" :key="index" class="border-b hover:bg-gray-50">
                      <td class="py-3 px-2 text-gray-800">{{ schedule.day }}</td>
                      <td class="py-3 px-2 text-gray-500">{{ schedule.open }}</td>
                      <td class="py-3 px-2 text-gray-500">{{ schedule.close }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="p-3 bg-white" v-else>
                <p class="text-gray-600 text-center">Aucun horaire disponible pour ce service.</p>
              </div>
            </div>

          </div>
        </div>
      </div>







    </div>

  </div>
</template>

<script setup>
import { computed,ref } from 'vue';
import router from '../router';
import { Categories } from '@/mocks/categories';

const name = ref('Nom du restaurant');
const description = ref('...');



const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
</script>
<style scoped>
img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
}
</style>
