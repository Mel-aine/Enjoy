<template>
  <div class="p-5">
    <div class="container mx-auto">
      <div>
        <h4 class="mb-3 text-2xl font-bold flex items-center">
          {{ categoryTitle }}
          <span class="text-[#B57EDC] text-2xl ml-2">
            <i class="fas fa-check-circle" aria-label="Vérifié"></i>
          </span>
        </h4>

        <p class="text-gray-700">
          <i class="fas fa-star text-yellow-500"></i>
          &nbsp;8.0 • &nbsp;Catégories:
          <strong>
            <u>
              <router-link v-for="(category, index) in categories" :key="index"
                :to="category.route" class="text-dark hover:underline">
                {{ category.name }}<span v-if="index < categories.length - 1">,</span>
              </router-link>
            </u>
          </strong>
          <br>

          <i class="fas fa-map-marker-alt text-red-500"></i>
          &nbsp;<strong>Localisation:</strong>
          <u>Après Petrolex Etoug-ebe</u>
          <br>

          <i class="fas fa-city text-gray-600"></i>
          &nbsp;<strong>Adresse:</strong>
          <u>Biyem-assi, Yaoundé, CM</u>.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-2 mt-5">
        <div>
          <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
        </div>
        <div class="grid grid-cols-2 gap-2">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
                </div>
                <div class="absolute bottom-5 right-5 z-10">
    <!-- Bouton pour ouvrir la galerie -->
    <button
      @click="openGallery"
      class="flex items-center gap-2 bg-white shadow-md px-3 py-2 rounded-lg font-bold text-gray-800 hover:bg-gray-100 transition"
    >
      <i class="fas fa-th"></i> Afficher toutes les photos ({{ photoCount }})
    </button>

    <!-- Modale Galerie -->
    <GalleryModal v-if="isGalleryOpen" @close="closeGallery" />
  </div>
        </div>
      </div>

      <div class="my-10 shadow-2xl">
      <div class="flex w-full">
        <section class="relative w-full inline-flex justify-between items-center bg-gray-100 p-5 rounded-lg shadow-sm">
          <ul class="flex space-x-4">
            <li>
              <a href="#apercu" class="text-[#B57EDC] hover:underline">Aperçu</a>
            </li>
          </ul>
          <button
            @click="toggleFavorite"
            class="absolute right-1 flex items-center justify-center text-red-500 bg-white w-10 h-10 rounded-lg border border-gray-300 shadow-md hover:bg-gray-50"
          >
            <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
          </button>
        </section>
      </div>
      </div>
      <div class="my-10">

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed,ref } from 'vue';
import { useRoute } from 'vue-router';

// Définition des catégories et leurs descriptions
const categories = {
  "restaurant": { title: "Restaurant", description: "Découvrez les meilleurs restaurants de la région." },
  "restaurant-dhotel": { title: "Restaurant d'hôtel", description: "Dégustez des plats raffinés dans des hôtels de luxe." },
  "fast-food": { title: "Fast Food", description: "Profitez d’un repas rapide et savoureux." },
  "restaurant-livreur": { title: "Restaurant Livreur", description: "Commandez vos plats préférés et faites-vous livrer." },
  // Ajoute d'autres catégories ici
};

// Récupérer la route actuelle
const route = useRoute();

// Extraire l'ID de la catégorie depuis l'URL
const categoryKey = computed(() => route.params.categoryId);

// Obtenir le titre et la description en fonction de la catégorie
const categoryTitle = computed(() => categories[categoryKey.value]?.title || "Catégorie inconnue");
const description = computed(() => categories[categoryKey.value]?.description || "Aucune description disponible.");

const isFavorite = ref(false);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
</script>
