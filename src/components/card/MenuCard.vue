<template>
 <!-- <div class="relative w-full px-8 mx-auto max-w-3xl">
  <div class="flex justify-end mb-8">
    <router-link to="/menu" class="px-6 py-2 bg-purple-200 text-black  rounded-lg transition-transform transform hover:scale-105">
          {{ $t('seeMore') }}
    </router-link>
  </div>

    <button @click="prevScroll" v-show="showLeftButton"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10">
      <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 6 9 12 15 18"/>
      </svg>
    </button>

    <div ref="scrollContainer" class="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth sm:w-full w-[250px]">
      <div v-for="(item, index) in menuItems" :key="index"
           class="relative flex flex-col bg-white shadow-lg w-64 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex-shrink-0">
        <div class="relative w-full h-48 overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out">
            <div  class="w-full flex-shrink-0">
              <img :src="item.images" alt="Dish" class="w-full h-48 object-cover">
            </div>
          </div>
        </div>
        <div class="p-4 w-full">
          <h3 class="text-xl font-bold text-gray-900 mb-2 truncate">{{ item.name }}</h3>
          <p class="text-gray-600 text-md truncate">{{ item.description }}</p>
          <div class="mt-3 flex justify-between items-center">
            <span class="text-md font-semibold text-purple-600">{{ item.price }} FCFA</span>
            <span v-if="item.isVegan" class="text-sm text-green-500">🌱 categorie</span>
          </div>
        </div>
        <div class="flex justify-center items-center mb-2">
          <button @click="addToCart(index)" class="w-[200px] px-4 py-1 text-sm font-medium text-white bg-orange-500 rounded-lg">
           {{ $t('addToCard') }}
          </button>
        </div>
      </div>
    <button @click="nextScroll" v-show="showRightButton"
            class="absolute  right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10">
      <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  </div>
  </div> -->
  <div v-for="(item, index) in menuItems" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden flex-1 transition-transform transform hover:scale-105 hover:shadow-2xl w-64 ">
    <img
      :src="item.images"
      alt="Menu Item"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2 truncate">{{ item.name }}</h3>
      <p class="text-gray-600 mb-2 truncate">
        {{ item.description }}
      </p>
      <p class="text-orange-500 font-bold">{{ item.price }} FCFA</p>
    </div>
    <div class="flex justify-center items-center mb-2">
          <button @click="addToCart(index)" class="w-[200px] px-4 py-1 text-sm font-medium text-white bg-orange-500 rounded-lg">
           {{ $t('addToCard') }}
          </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import inside1 from '@/assets/burger2.jpg';

// const scrollContainer = ref(null);
// const showLeftButton = ref(false);
// const showRightButton = ref(true);

// const prevScroll = () => {
//   if (scrollContainer.value) {
//     scrollContainer.value.scrollBy({ left: -300, behavior: "smooth" });
//     setTimeout(checkScrollButtonsVisibility, 300);
//   }
// };

// const nextScroll = () => {
//   if (scrollContainer.value) {
//     scrollContainer.value.scrollBy({ left: 300, behavior: "smooth" });
//     setTimeout(checkScrollButtonsVisibility, 300);
//   }
// };

// const checkScrollButtonsVisibility = () => {
//   if (!scrollContainer.value) return;

//   const element = scrollContainer.value;
//   showLeftButton.value = element.scrollLeft > 0;
//   showRightButton.value = element.scrollLeft < element.scrollWidth - element.clientWidth;
// };
// onMounted(checkScrollButtonsVisibility);
// onUpdated(checkScrollButtonsVisibility);


const menuItems = ref([
  {
    name: 'Pizza Margherita',
    description: 'Tomate, mozzarella, basilic frais',
    price: 12.99,
    images: inside1,
    isVegan: false,
  },
  {
    name: 'Pâtes Carbonara',
    description: 'Pâtes fraîches, crème, lardons, parmesan',
    price: 14.50,
    images: inside1,
    isVegan: true,
  },
  {
    name: 'Salade César',
    description: 'Salade, poulet grillé, parmesan, croûtons',
    price: 10.99,
    images: inside1,
    isVegan: false,
  },
  {
    name: 'Risotto aux Champignons',
    description: 'Riz crémeux, champignons, parmesan',
    price: 13.99,
    images: inside1,
    isVegan: true,
  },

]);


</script>

<style scoped>
.hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
