<script setup>
import { ref } from 'vue';
// import { useI18n } from 'vue-i18n';
import Card from '@/components/card/Card.vue';
import CategoryList from '@/components/category/CategoryList.vue';
import Carousel from '@/components/carousel/Carousel.vue';
import { Restaurants } from '@/mocks/categories';
import { Hotels } from '@/mocks/categories';

// const { locale } = useI18n();
// const changeLanguage = (lang) => {
//   locale.value = lang;
//   console.log('locale.value', locale.value)
// };


const showLeftButton = ref(false);
const showRightButton = ref(true);

const scrollableList = ref([]);

const checkScrollButtonsVisibility = () => {
  if (!scrollableList.value || scrollableList.value.length === 0) return;

  const element = scrollableList.value[0];
  showLeftButton.value = element.scrollLeft > 0;
  showRightButton.value = element.scrollWidth > element.clientWidth + element.scrollLeft;
};

const scrollLeft = () => {
  if (scrollableList.value[0]) {
    scrollableList.value[0].scrollBy({ left: -300, behavior: "smooth" });
    setTimeout(() => checkScrollButtonsVisibility(), 300);
  }
};

const scrollRight = () => {
  if (scrollableList.value[0]) {
    scrollableList.value[0].scrollBy({ left: 300, behavior: "smooth" });
    setTimeout(() => checkScrollButtonsVisibility(), 300);
  }
};


const menuCategory = [
  {
    label: "Restaurants",
    icon: "Utensils", // Icône représentative (optionnelle)
    route: "/fr/categorie/restaurants",
    Cards: Restaurants.map((restaurant) => ({
      title: restaurant.name,
      address: restaurant.address,
      route: `/fr/categorie/restaurant/${restaurant.id}`,
    })),
  },
  {
    label: "Hôtels & Hébergements",
    icon: "Hotel",
    route: "/fr/categorie/hotels",
    Cards: Hotels.map((hotel) => ({
      title: hotel.name,
      address: hotel.address,
      route: `/fr/categorie/hotel/${hotel.id}`,
    })),
  },
];


// const menuCategory = [
//   {
//     route: "/fr/categorie/11/restauration",
//     label: "Restauration",
//     icon: "fa fa-utensils",
//     Cards: [
//       { route: "/fr/categorie/restaurant", title: "restaurants", image: new URL('@/assets/koala.jpg', import.meta.url).href },
//       { route: "/fr/categorie/restaurant-dhotel", title: "Restaurant d'hôtel", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/12/hotels",
//     label: "Hôtels Et Hebergements",
//     icon: "fa fa-hotel",
//     Cards: [
//       { route: "/fr/categorie/hotel-luxe", title: "Hôtel de Luxe", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/hotel-budget", title: "Hôtel Budget", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/13/divertissements",
//     label: "Divertissements",
//     icon: "Gamepad2",
//     Cards: [
//       { route: "/fr/categorie/cinema", title: "Cinéma", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/parc-loisir", title: "Parc de Loisirs", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/14/sites-touristiques",
//     label: "Sites Touristiques",
//     icon: "Camera",
//     Cards: [
//       { route: "/fr/categorie/musee", title: "Musée", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/monuments", title: "Monuments Historiques", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/15/modes-et-beaute",
//     label: "Modes et Beauté",
//     icon: "Scissors",
//     Cards: [
//       { route: "/fr/categorie/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/15/modes-et-beaute",
//     label: "Transports",
//     icon: "BusFront",
//     Cards: [
//       { route: "/fr/categorie/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/15/modes-et-beaute",
//     label: "Commerces",
//     icon: "ShoppingBag",
//     Cards: [
//       { route: "/fr/categorie/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/15/modes-et-beaute",
//     label: "Sports",
//     icon: "Dumbbell",
//     Cards: [
//       { route: "/fr/categorie/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/15/modes-et-beaute",
//     label: "Secours",
//     icon: "Ambulance",
//     Cards: [
//       { route: "/fr/categorie/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
//   {
//     route: "/fr/categorie/15/modes-et-beaute",
//     label: "Administrations",
//     icon: "Building2",
//     Cards: [
//       { route: "/fr/categorie/coiffure", title: "Coiffure", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/soins-visage", title: "Soins du Visage", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/fast-food", title: "Fast Food", image: "https://via.placeholder.com/150" },
//       { route: "/fr/categorie/restaurant-livreur", title: "Restaurant Livreur", image: "https://via.placeholder.com/150" },
//     ],
//   },
// ];

</script>

<template>
  <div class="p-7">
    <div class="bg-customWhite px-10 py-5 container mx-auto w-full md:w-[1400px]">
      <p class="text-xl font-poppins">Découvrez des bons plans et amusez-vous sans effort.</p>
      <p class="text-xs font-poppins">
        Que vous voyagiez seul, en famille, entre amis ou avec des collègues, <span class="font-bold">Enjoy</span> vous guide vers les meilleurs snacks, restaurants, attractions, piscines, hôtels et sites touristiques, avec des informations en temps réel !
      </p>

      <div class="flex flex-col gap-6 p-4">
        <div v-for="(category, index) in menuCategory" :key="index" class="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 mt-2 relative">
          <!-- Catégorie fixe -->
          <div class="flex-shrink-0 mb-4 md:mb-0">
            <CategoryList :category="category.label" :icon="category.icon" class="w-[200px]" />
          </div>

          <!-- Cartes scrollables -->
          <div ref="scrollableList" class="flex overflow-x-auto flex-nowrap space-x-4 gap-1 scrollbar-hide max-w-full relative scroll-smooth">
            <router-link
              v-for="(card, index) in category.Cards"
              :to="card.route"
              :key="index"
              class="bg-transparent rounded flex-shrink-0 p-2 w-[250px] sm:w-[200px] md:w-[250px]"
             >
              <Card :title="card.title"  :localisation="card.address" />
            </router-link>
          </div>
            <!-- Bouton suivant -->
            <button
              class="absolute right-0 -mr-4 z-10 bg-customNeutreColor p-2 w-10 h-10 rounded-full hover:bg-white focus:outline-none"
              @click="scrollRight(index)"
              v-show="showRightButton"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          <button
            class="absolute left-52 -ml-4 z-10 bg-customNeutreColor p-2 w-10 h-10 rounded-full hover:bg-white focus:outline-none"
            @click="scrollLeft(index)"
            v-show="showLeftButton"
          >
            <i class="fas fa-chevron-left"></i>
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
