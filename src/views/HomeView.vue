<script setup>
import { ref } from 'vue';
// import { useI18n } from 'vue-i18n';
import Card from '@/components/card/Card.vue';
import Category from '@/components/category/CategoryList.vue';
import Carousel from '@/components/carousel/Carousel.vue';

// const { locale } = useI18n();
// const changeLanguage = (lang) => {
//   locale.value = lang;
//   console.log('locale.value', locale.value)
// };

const showNavButtons = ref(true);

const scrollableList = ref([]);

const scrollLeft = (index) => {
  scrollableList.value[index].scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = (index) => {
  scrollableList.value[index].scrollBy({ left: 300, behavior: "smooth" });
};

const menuCategory = [
  {
    route: "/fr/categorie/11/restauration",
    label: "Restauration",
    icon: "fa fa-utensils",
    Cards: [
      { route: "/fr/categorie/21/restaurant", title: "Restaurant", image: new URL('@/assets/koala.jpg', import.meta.url).href },
      { route: "/fr/categorie/22/restaurant-dhotel", title: "Restaurant d'hôtel", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/12/hotels",
    label: "Hôtels Et Hebergements",
    icon: "fa fa-hotel",
    Cards: [
      { route: "/fr/categorie/31/hotel-luxe", title: "Hôtel de Luxe", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/32/hotel-budget", title: "Hôtel Budget", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/13/divertissements",
    label: "Divertissements",
    icon: "fa fa-gamepad",
    Cards: [
      { route: "/fr/categorie/41/cinema", title: "Cinéma", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/42/parc-loisir", title: "Parc de Loisirs", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/14/sites-touristiques",
    label: "Sites Touristiques",
    icon: "fa fa-camera",
    Cards: [
      { route: "/fr/categorie/51/musee", title: "Musée", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/52/monuments", title: "Monuments Historiques", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/15/modes-et-beaute",
    label: "Modes et Beauté",
    icon: "fa fa-cut",
    Cards: [
      { route: "/fr/categorie/61/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/62/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/15/modes-et-beaute",
    label: "Transports",
    icon: "fa fa-bus",
    Cards: [
      { route: "/fr/categorie/61/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/62/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/15/modes-et-beaute",
    label: "Commerces",
    icon: "fa fa-shopping-bag",
    Cards: [
      { route: "/fr/categorie/61/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/62/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/15/modes-et-beaute",
    label: "Sports",
    icon: "fa fa-dumbbell",
    Cards: [
      { route: "/fr/categorie/61/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/62/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/15/modes-et-beaute",
    label: "Secours",
    icon: "fa fa-ambulance",
    Cards: [
      { route: "/fr/categorie/61/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/62/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
  {
    route: "/fr/categorie/15/modes-et-beaute",
    label: "Administrations",
    icon: "fa fa-building",
    Cards: [
      { route: "/fr/categorie/61/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/62/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/25/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
      { route: "/fr/categorie/26/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
    ],
  },
];

</script>

<template>
  <div class="p-7">
    <div class="bg-white px-10 py-5 container mx-auto w-full md:w-[1400px]">
      <p class="text-xl font-poppins">Découvrez des bons plans et amusez-vous sans effort.</p>
      <p class="text-xs font-poppins">Que vous voyagiez seul, en famille, entre amis ou avec des collègues, <span class="font-bold"> Enjoy</span> vous guide vers les meilleurs snacks, restaurants, attractions, piscines, hôtels et sites touristiques, avec des informations en temps réel !</p>

      <div class="flex flex-col gap-6 p-4">
        <div v-for="(category, index) in menuCategory" :key="index" class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mt-2 relative">
          <!-- Catégorie fixe -->
          <div :to="category.route" class="flex-shrink-0 mb-4 md:mb-0">
            <Category :category="category.label" :icon="category.icon" class="w-[200px]" />
          </div>

          <!-- Cartes scrollables -->
          <div ref="scrollableList"
            class="flex overflow-x-auto flex-nowrap space-x-4 gap-1 scrollbar-hide max-w-full relative scroll-smooth"
          >
            <div
              v-for="(card, index) in category.Cards"
              :key="index"
              class="bg-white rounded flex-shrink-0 p-2 hover:shadow-lg w-[250px] sm:w-[200px] md:w-[250px]"
            >
              <Card :title="card.title" :route="card.route" :description="card.description" />
            </div>
          </div>

          <!-- Bouton suivant -->
          <button
            class="absolute right-0 -mr-4 z-10 bg-gray-300 p-2 w-10 h-10 rounded-full hover:bg-gray-400 focus:outline-none"
            @click="scrollRight(index)"
            v-show="showNavButtons"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Carousel -->
    <Carousel />
  </div>
</template>
<style scoped>
/* Masque les barres de défilement tout en gardant la scrollabilité */
.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
@media (max-width: 768px) {
  .bg-white {
    padding: 20px;
  }

  .w-[250px] {
    width: 100%;
  }

  .w-[200px] {
    width: 100%;
  }

  .w-full {
    width: 100%;
  }
}
</style>


