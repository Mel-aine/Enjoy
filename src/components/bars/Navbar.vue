<template>
  <div class="relative background" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Superposition sombre -->
        <!-- Top Bar -->
    <div id="topBar" class="flex items-center p-2 justify-between container mx-auto">
      <!-- Logo -->
      <div id="logo" class="relative rounded-full flex-shrink-0">
        <img class="rounded-full" src="@/assets/logo2.png" width="50" alt="Logo">
      </div>

      <!-- Menu Mobile: Bouton avec icône "fa-bars" -->
      <div id="menuToggle" class="relative block md:hidden">
        <button @click="toggleSidebar" class="text-white text-2xl">
          <i class="fa fa-bars"></i>
        </button>
      </div>


      <!-- Menu Principal (Desktop) -->
      <div id="mainMenu" class="relative w-full hidden md:block">
        <nav>
          <div class="flex justify-center space-x-4">

    
            <div class="w-full max-w-sm min-w-[200px] relative ml-2">
    <div class="flex items-center rounded shadow-sm overflow-hidden bg-white">
      <input 
        v-model="leftValue"
        @click="activeInput = 'left'"
        placeholder="Restaurant" 
        class="w-1/2 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-500 focus:outline-none"
      />
      <div class="h-6 border-l border-slate-200 ml-1"></div>
      <input 
        v-model="rightValue"
        @click="activeInput = 'right'"
        placeholder="Yaoun" 
        class="w-1/2 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-500 focus:outline-none"
      />
      <button class="bg-customRed px-4 py-2 text-white ml-2">
        <BaseIcon name="Search" size="20" stroke-width="2" />
      </button>
    </div>

    <ul v-if="activeInput === 'left'" @mouseenter="activeInput = 'left'" @mouseleave="handleMouseLeave('left')" class="absolute left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 overflow-auto ">
      <li v-for="item in menuItems" :key="item" @mouseenter="leftValue = item.label" @click="selectItem('left', item.label)" class=" flex justify-start items-center z-[100] px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ">
        <BaseIcon  :name="item.icon" size="18" stroke-width="2"></BaseIcon>
        <span class="ml-2">
          {{ item.label }} 
        </span>
      </li>
    </ul>

    <ul v-if="activeInput === 'right'" @mouseenter="activeInput = 'right'" @mouseleave="handleMouseLeave('right')" class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 overflow-auto">
      <li class="flex justify-center items-center mt-3">
        <BaseIcon name="MapPin" customColor="text-blue-500" size="20" stroke-width="3"/> 
        <span class="text-sm text-blue-400"> Emplacement actuel </span> 
      </li>
      <li v-for="item in menuData" :key="item" @mouseenter="rightValue = item.label" @click="selectItem('right', item.label)" class="px-3 py-2 text-sm z-[100] hover:bg-gray-100 cursor-pointer mx-2">
        {{ item.label }}
      </li>
    </ul>
  </div>

    

            <!-- Dropdown Menu -->
            <div class="relative group">
              <button
                @click="isDropdownVisible = !isDropdownVisible"
                :class="{ 'focus:outline-none bg-white/10 text-white focus:ring-teal-500 transition': isDropdownVisible, 'text-white': !isDropdownVisible }"
                class="hover:bg-white/20 hover:focus px-4 py-2 rounded-sm font-medium font-poppins"
              >
              Yelp pour les professionnels
                <i class="fa fa-chevron-down text-xs ml-1 text-white "></i>
              </button>

              <!-- Contenu du menu déroulant -->
              <div v-if="isDropdownVisible" class="absolute transform -translate-x-1 z-[100] bg-white shadow-xl w-[300px] sm:max-w-[650px] md:max-w-[850px] lg:max-w-[1100px] mt-2 rounded-lg">
                <div class="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-x-2 gap-y-2 p-3">
                  <div v-for="itemY in menuYelp" :key="itemY" class="space-y-1">
                    <h3 class="text-lg font-semibold text-gray-800 mt-2">
                      <router-link :to="itemY.route" class=" flex justify-start item-center block text-sm text-customRed hover:text-gray-900">
                        <BaseIcon :name="itemY.icon" customColor="text-gray-700" size="20" stroke-width="2" />
                        <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap"> {{ itemY.label }}</span>
                      </router-link>
                    </h3>
                    
                   
                  </div>
                  <div class="border-b-2 rounded-full border-gray-300 w-full"></div>
                    <h3 class="text-lg font-semibold text-gray-800 mt-3">
                      <router-link to="" class=" flex justify-start item-center block text-sm text-customRed hover:text-gray-900">
                        <BaseIcon name="Telescope" customColor="text-gray-700" size="20" stroke-width="2" />
                        <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap"> Explorez Yelp pour votre Business</span>
                      </router-link>
                    </h3>
                </div>
              </div>
            </div>

            <router-link
              to="/comunity"
              class="text-white hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              Ecrire un avis
            </router-link>

            <router-link
              to="/comunity"
              class="text-white hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              Commence le projet
            </router-link>
            
          </div>
        </nav>
      </div>

      <!-- User Management (à droite) -->
      <div id="userManage" class="relative flex items-center space-x-4">
        <button>
          <i class="fa fa-star text-customWhite hover:text-gray-300"></i>
        </button>
        <Button variant="ligth" class="font-poppins">Se connecter</Button>
        <Button variant="danger" class="font-poppins">S'inscrire</Button>
      </div>
    </div>

    <!-- Sidebar Menu (Mobile) -->
    <div v-if="isSidebarOpen" class="absolute inset-0 space-x-10 bg-black bg-opacity-50 z-40 md:hidden" @click.self="toggleSidebar">
      <div class="absolute left-0 top-0 w-3/4 h-full bg-customBlue shadow-lg p-4 transform transition-transform duration-300"
           :class="{'translate-x-0 ': isSidebarOpen, '-translate-x-full': !isSidebarOpen}">
        <button @click="toggleSidebar" class="absolute top-4 right-4 text-xl text-gray-600">
          <i class="fa fa-times text-gray-700 "></i>
        </button>
        <div class="flex flex-col space-y-6 mt-10">
            <!-- Dropdown Menu -->
            <div class="relative group">
              <button
                @click="isDropdownVisible = !isDropdownVisible"
                :class="{ 'focus:outline-none bg-white/10 text-white focus:ring-teal-500 transition': isDropdownVisible, 'text-white': !isDropdownVisible }"
                class="hover:bg-white/20 hover:focus px-4 py-2 rounded-sm font-medium font-poppins"
              >
              Yelp pour les professionnels
                <i class="fa fa-chevron-down text-xs ml-1 text-white "></i>
              </button>

              <!-- Contenu du menu déroulant -->
              <div v-if="isDropdownVisible" class="absolute left-0 transform -translate-x-1 z-[100] bg-white shadow-xl w-[300px] sm:max-w-[650px] md:max-w-[850px] lg:max-w-[1100px] mt-2 rounded-lg">
                <div class="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-x-2 gap-y-2 p-3">
                  <div v-for="itemY in menuYelp" :key="itemY" class="space-y-1">
                    <h3 class="text-lg font-semibold text-gray-800 mt-2">
                      <router-link :to="itemY.route" class=" flex justify-start item-center block text-sm text-customRed hover:text-gray-900">
                        <BaseIcon :name="itemY.icon" customColor="text-gray-700" size="20" stroke-width="2" />
                        <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap"> {{ itemY.label }}</span>
                      </router-link>
                    </h3>
                    
                   
                  </div>
                  <div class="border-b-2 rounded-full border-gray-300 w-full"></div>

                    <h3 class="text-lg font-semibold text-gray-800 mt-3">
                      <router-link to="" class=" flex justify-start item-center block text-sm text-customRed hover:text-gray-900">
                        <BaseIcon name="Telescope" customColor="text-gray-700" size="20" stroke-width="2" />
                        <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap"> Explorez Yelp pour votre Business</span>
                      </router-link>
                    </h3>
                </div>
              </div>
            </div>

            <router-link
              to="/comunity"
              class="text-white hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              Ecrire un avis
            </router-link>

            <router-link
              to="/comunity"
              class="text-white hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              Commence le projet
            </router-link>

        </div>
      </div>
    </div>

    <div id="menuToggle" class="container relative block md:hidden">
      <div class="w-full max-w-sm min-w-[200px] relative ml-4">
        <div class="flex items-center rounded shadow-sm overflow-hidden bg-white">
          <input 
            v-model="leftValue"
            @click="activeInput = 'left'"
            placeholder="Restaurant" 
            class="w-1/2 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-500 focus:outline-none"
          />
          <div class="h-6 border-l border-slate-200 ml-1"></div>
          <input 
            v-model="rightValue"
            @click="activeInput = 'right'"
            placeholder="Yaoun" 
            class="w-1/2 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-500 focus:outline-none"
          />
          <button class="bg-customRed px-4 py-2 text-white ml-2">
            <BaseIcon name="Search" size="20" stroke-width="2" />
          </button>
        </div>

        <ul v-if="activeInput === 'left'" @click="activeInput = 'left'" @mouseleave="handleMouseLeave('left')" class="absolute left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 overflow-auto  ">
          <button @click="resetSearchBar" class="relative block item-center justify-center md:hidden">
              <BaseIcon  name="CircleX" customColor="text-red-500" size="18" stroke-width="2"></BaseIcon>
          </button>
          <li v-for="item in menuItems" :key="item" @click="leftValue = item.label ; selectItem('left', item.label)" class=" flex justify-start items-center z-[100] px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ">
            <BaseIcon :name="item.icon" size="18" customColor="text-gray-700" stroke-width="2"></BaseIcon>
            <span class="ml-2">
              {{ item.label }} 
            </span>
          </li>
        </ul>

        <ul v-if="activeInput === 'right'" @click="activeInput = 'right'" @mouseleave="handleMouseLeave('right')" class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 overflow-auto  ">
          <button @click="resetSearchBar" class="relative block item-center justify-center md:hidden">
              <BaseIcon  name="CircleX" size="18" customColor="text-red-500" stroke-width="2"></BaseIcon>
          </button>
          <li class="flex justify-center items-center mt-3">
            <BaseIcon name="MapPin" customColor="text-blue-500" size="20" stroke-width="3"/> 
            <span class="text-sm text-blue-400"> Emplacement actuel </span> 
          </li>
          <li v-for="item in menuData" :key="item" @click="rightValue = item.label ; selectItem('right', item.label)"  class="px-3 py-2 text-sm z-[100] hover:bg-gray-100 cursor-pointer mx-2">
            {{ item.label }}
          </li>
        </ul>
      </div>

    </div>

    
    
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-4 items-center justify-center">
      <div class="flex flex-wrap justify-center gap-4">
        <DropDown :menuData="menuRestaurants">Restaurants</DropDown>
        <DropDown :menuData="menuHouseWork">Maison et travaux</DropDown>
        <DropDown :menuData="menuCarService">Service auto</DropDown>
        <DropDown :menuData="menuOthers">Plus</DropDown>
      </div>
    </div>

    <div id="searchBar" class="relative container justify-center mx-auto px-4 py-30">
      <h class="text-6xl text-white font-medium font-popins">Entrez en conctact avec les meilleurs</h>
      <p class="text-6xl text-white font-medium font-popins">endroits pres de chez vous</p>

    </div>


    <div id="searchBar" class="relative container justify-center mx-auto px-4 py-10">
      <h class="text-xl text-white font-medium font-popins">vennez decouvrir </h>
      <p class="text-xl text-white font-medium font-popins">endroits que vous voulez</p>

    </div>



  </div>
</template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Button from '@/components/buttons/Button.vue';
  // import FloatingInput from '../input/FloatingInput.vue';
  import BaseIcon from '../icons/BaseIcon.vue';
  import DropDown from '../dropDown/DropDown.vue';
  import backgroundImage from '@/assets/wp7388245-satisfied-wallpapers.jpg';
 


  const isDropdownVisible = ref(false) ;
  const scrollMenu = ref(null);
const showLeftButton = ref(false);
const showRightButton = ref(false);

const isSidebarOpen = ref(false); 

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const checkScrollButtonsVisibility = () => {
  if (!scrollMenu.value) return;

  const element = scrollMenu.value;
  showLeftButton.value = element.scrollLeft > 0;
  showRightButton.value = element.scrollWidth > element.clientWidth + element.scrollLeft;

};

// const scrollLeft = () => {
//   scrollMenu.value.scrollLeft -= 100;
//   checkScrollButtonsVisibility(); 
// };

// const scrollRight = () => {
//   scrollMenu.value.scrollLeft += 100;
//   checkScrollButtonsVisibility(); // Update visibility after scrolling
// };

const handleClickOutside = (event) => {
  if (!event.target.closest('.group')) {
    isDropdownVisible.value = false;
  }
};

const leftValue = ref('');
const rightValue = ref('');
const activeInput = ref(null);

const resetSearchBar =()=>{
  leftValue.value = '';
  rightValue.value = '';
  activeInput.value = null;
 }

let leftSelected = false; // Track if a selection is made for left field
let rightSelected = false; // Track if a selection is made for right field

const selectItem = (side, item) => {
  if (side === 'left') {
    leftValue.value = item;
    leftSelected = true; // Mark as selected
  } else if (side === 'right') {
    rightValue.value = item;
    rightSelected = true; // Mark as selected
  }
  activeInput.value = null; // Hide the list when an item is selected
};

const handleMouseLeave = (input) => {
  if (input === 'left' && !leftSelected) {
    leftValue.value = ''; // Reset if no selection made
  }
  if (input === 'right' && !rightSelected) {
    rightValue.value = ''; // Reset if no selection made
  }
  // Reset selected flags for future checks
  if (input === 'left') {
    leftSelected = false;
  } else if (input === 'right') {
    rightSelected = false;
  }
  activeInput.value = null; // Hide the list when an item is selected
};

// const showLeft = ref(false);
// const showRight = ref(false);

// const hide = (side) => {
//   setTimeout(() => {
//     if (side === 'left') showLeft.value = false;
//     if (side === 'right') showRight.value = false;
//   }, 200);
// };

// const select = (side, item) => {
//   if (side === 'left') {
//     leftValue.value = item;
//     showLeft.value = false;
//   } else {
//     rightValue.value = item;
//     showRight.value = false;
//   }
// };

onMounted(() => {
  checkScrollButtonsVisibility(); // Initial check after component is mounted
  document.addEventListener('click', handleClickOutside);
  // Re-check when the window resizes (for responsiveness)
  window.addEventListener('resize', checkScrollButtonsVisibility);
});
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

  const menuItems = ref([
  {  label: "Restaurant", icon: "Utensils" },
  {  label: "Livraison", icon: "Package" },
  {  label: "A emporter", icon: "ShoppingBasket" },
  {  label: "Accountants", icon: "Calculator" },
  {  label: "Plumbiers", icon: "Droplets" },
  {  label: "Reparation auto", icon: "Wrench" },
  
]);


const menuData = ref([
{ label: "Yaounde, CE, Cameroun" },
  { label: "Douala, LT , Cameroun" },
  { label: "Bamenda, NW, Cameroun" },
  { label: "Garoua, NO, Cameroun" },
  { label: "Bafoussam, OU, Cameroun" },
  { label: "Limbe, SO, Cameroun" },
  { label: "Kribi, SU, Cameroun" },
  { label: "Buea, SW, Cameroun" },
  { label: "Maroua, EN, Cameroun" },
  { label: "Dschang, OU, Cameroun" },
]);

const menuRestaurants = [
  { route: "/fr/categorie/11/restauration", label: "A emporter",icon: "ShoppingBag" },
  { route: "/fr/categorie/11/restauration", label: "Burgers",icon: "Pizza" },
  { route: "/fr/categorie/11/restauration", label: "Cuisine chinoise",icon: "Soup" },
  { route: "/fr/categorie/11/restauration", label: "Cuisine italienne",icon: "Salad" },
  { route: "/fr/categorie/11/restauration", label: "Reservations",icon: "Calendar1" },
  { route: "/fr/categorie/11/restauration", label: "Livraison",icon: "Package2" },
  { route: "/fr/categorie/11/restauration", label: "Cuisine mexicaine",icon: "CookingPot" },
  { route: "/fr/categorie/11/restauration", label: "Cuisine Thai",icon: "Fish" },

];

const menuHouseWork = [
  { route: "/fr/categorie/11/restauration", label: "Prestataire",icon: "HandCoins" },
  { route: "/fr/categorie/11/restauration", label: "Electreiciens",icon: "PlugZap" },
  { route: "/fr/categorie/11/restauration", label: "Menage",icon: "Recycle" },
  { route: "/fr/categorie/11/restauration", label: "Chauffage & air conditionne",icon: "ThermometerSun" },
  { route: "/fr/categorie/11/restauration", label: "Amenagement paysager",icon: "Shrub" },
  { route: "/fr/categorie/11/restauration", label: "Serruriers",icon: "Key" },
  { route: "/fr/categorie/11/restauration", label: "Demenageurs",icon: "BriefcaseConveyorBelt" },
  { route: "/fr/categorie/11/restauration", label: "Plombiers",icon: "Droplets" },

];

const menuCarService = [
  { route: "/fr/categorie/11/restauration", label: "Repartion auto",icon: "Bolt" },
  { route: "/fr/categorie/11/restauration", label: "Nettoyage auto de precision",icon: "SprayCan" },
  { route: "/fr/categorie/11/restauration", label: "Carrosserie",icon: "RectangleHorizontal" },
  { route: "/fr/categorie/11/restauration", label: "Nettoyage de voiture",icon: "Sparkles" },
  { route: "/fr/categorie/11/restauration", label: "Concessionaire auto",icon: "KeySquare" },
  { route: "/fr/categorie/11/restauration", label: "Vidange d'huile",icon: "Beaker" },
  { route: "/fr/categorie/11/restauration", label: "Parking",icon: "CircleParking" },
  { route: "/fr/categorie/11/restauration", label: "Remorquage",icon: "Tangent" },

];

const menuOthers = [
  { route: "/fr/categorie/11/restauration", label: "Nettoyage a sec",icon: "VenetianMask" },
  { route: "/fr/categorie/11/restauration", label: "Reparation des telephones",icon: "Smartphone" },
  { route: "/fr/categorie/11/restauration", label: "Bars",icon: "Beer" },
  { route: "/fr/categorie/11/restauration", label: "vie nocturne",icon: "Martini" },
  { route: "/fr/categorie/11/restauration", label: "Coiffeurs&salons de coiffure",icon: "SquareScissors" },
  { route: "/fr/categorie/11/restauration", label: "Salle de sport",icon: "Dumbbell" },
  { route: "/fr/categorie/11/restauration", label: "Massage",icon: "MarsStroke" },
  { route: "/fr/categorie/11/restauration", label: "Shopping",icon: "ShoppingCart" },

];

const menuYelp = [
  { route: "/fr/categorie/11/restauration", label: "Ajoutter un commerce",icon: "HousePlus" },
  { route: "/fr/categorie/11/restauration", label: "Claim your business",icon: "CircleCheck" },
  { route: "/fr/categorie/11/restauration", label: "Login in to Business Account",icon: "CircleUser" },

];

  </script>
  
  <style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.menu-item:hover .base-icon {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.background {
  background-image: url('@/assets/wp7388245-satisfied-wallpapers.jpg');
  background-size: cover;
  background-position: center;
}
</style>