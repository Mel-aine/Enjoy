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
        @mouseenter="activeInput = 'left'"
        placeholder="Restaurant"
        class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none"
      />
      <div class="h-6 border-l border-slate-200 ml-1"></div>
      <input
        v-model="rightValue"
        @mouseenter="activeInput = 'right'"
        placeholder="Yaoun"
        class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none"
      />
      <router-link to="/recherche">
        <button class="bg-customRed px-4 py-3 text-white ml-2">
          <BaseIcon name="Search" size="20" stroke-width="2" />
        </button>
      </router-link>

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
        <span class="text-md text-blue-400"> {{ $t('navbar.space') }} </span>
      </li>
      <li v-for="item in menuData" :key="item" @mouseenter="rightValue = item.label" @click="selectItem('right', item.label)" class="px-3 py-2 text-md z-[100] hover:bg-gray-100 cursor-pointer mx-2">
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
              {{ $t('navbar.yelpProfessional') }}
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
              {{ $t('navbar.writeReview') }}
            </router-link>

            <router-link
              to="/comunity"
              class="text-white hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              {{ $t('navbar.startProject') }}
            </router-link>

          </div>
        </nav>
      </div>

      <!-- User Management (à droite) -->
      <div id="userManage" class="relative flex items-center space-x-4">
        <button>
          <i class="fa fa-star text-customWhite hover:text-gray-300"></i>
        </button>
        <Button variant="ligth" class="font-poppins">{{$t('login')}}</Button>
        <Button variant="danger" class="font-poppins">{{ $t('register') }}</Button>
      </div>
    </div>

    <!-- Sidebar Menu (Mobile) -->
    <div v-if="isSidebarOpen" class="absolute inset-0 space-x-10 bg-black bg-opacity-50 z-40 md:hidden" @click.self="toggleSidebar">
  <div class="absolute transform h-full bg-customBlue shadow-lg p-4 transition-transform duration-500"
       :class="{'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen}">
    <button @click="toggleSidebar" class="absolute top-4 right-4 text-xl text-gray-600">
      <BaseIcon name="ChevronsLeft" customColor="text-gray-800" size="25" stroke-width="2" />
    </button>
    <div class="flex flex-col space-y-6 mt-10">
      <!-- Dropdown Menu -->
      <div class="relative group">
        <button
          @click="isDropdownVisible = !isDropdownVisible"
          :class="{ 'focus:outline-none bg-white/10 text-white focus:ring-teal-500 transition': isDropdownVisible, 'text-white': !isDropdownVisible }"
          class="hover:bg-white/20 hover:focus px-4 py-2 rounded-sm font-medium font-poppins"
        >
          {{$t('navbar.yelpProfessional')}}
          <i class="fa fa-chevron-down text-xs ml-1 text-white"></i>
        </button>

        <!-- Contenu du menu déroulant -->
        <div v-if="isDropdownVisible" class="absolute left-0 transform -translate-x-1 z-[100] bg-white shadow-xl w-[300px] sm:max-w-[650px] md:max-w-[850px] lg:max-w-[1100px] mt-2 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-2 gap-y-2 p-3">
            <div v-for="itemY in menuYelp" :key="itemY" class="space-y-1">
              <h3 class="text-lg font-semibold text-gray-800 mt-2">
                <router-link :to="itemY.route" class="flex justify-start item-center block text-sm text-customRed hover:text-gray-900">
                  <BaseIcon :name="itemY.icon" customColor="text-gray-700" size="20" stroke-width="2" />
                  <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap">{{ itemY.label }}</span>
                </router-link>
              </h3>
            </div>
            <div class="border-b-2 rounded-full border-gray-300 w-full"></div>

            <h3 class="text-lg font-semibold text-gray-800 mt-3">
              <router-link to="" class="flex justify-start item-center block text-sm text-customRed hover:text-gray-900">
                <BaseIcon name="Telescope" customColor="text-gray-700" size="20" stroke-width="2" />
                <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap">{{$t('navbar.yelpExploreBusiness')}}</span>
              </router-link>
            </h3>
          </div>
        </div>
      </div>

      <router-link
        to="/comunity"
        class="text-white hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
        active-class="border-b-2 border-indigo-400">
        {{$t('navbar.writeReview')}}
      </router-link>

      <router-link
        to="/comunity"
        class="text-white hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
        active-class="border-b-2 border-indigo-400">
        {{$t('navbar.startProject')}}
      </router-link>
    </div>
  </div>
</div>

    <div id="menuToggle" class="container relative block md:hidden">

      <button @click="resetSearchBar" class="relative block md:hidden">
          <BaseIcon  name="CircleX" customColor="text-customRed" size="18" stroke-width="2"></BaseIcon>
      </button>
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
          <router-link to="/recherche">
        <button class="bg-customRed px-4 py-3 text-white ml-2">
          <BaseIcon name="Search" size="20" stroke-width="2" />
        </button>
      </router-link>
        </div>

        <ul v-if="activeInput === 'left'" @click="activeInput = 'left'" @mouseleave="handleMouseLeave('left')" class="absolute left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 overflow-auto  ">
          <li v-for="item in menuItems" :key="item" @click="leftValue = item.label ; selectItem('left', item.label)" class=" flex justify-start items-center z-[100] px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ">
            <BaseIcon :name="item.icon" size="18" customColor="text-gray-700" stroke-width="2"></BaseIcon>
            <span class="ml-2">
              {{ item.label }}
            </span>
          </li>
        </ul>
        <ul v-if="activeInput === 'right'" @click="activeInput = 'right'" @mouseleave="handleMouseLeave('right')" class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 overflow-auto  ">
          <li class="flex justify-center items-center mt-3">
            <BaseIcon name="MapPin" customColor="text-blue-500" size="20" stroke-width="3"/>
            <span class="text-sm text-blue-400"> {{$t('navbar.space')}} </span>
          </li>
          <li v-for="item in menuData" :key="item" @click="rightValue = item.label ; selectItem('right', item.label)"  class="px-3 py-2 text-sm z-[100] hover:bg-gray-100 cursor-pointer mx-2">
            {{ item.label }}
          </li>
        </ul>
      </div>

    </div>



    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 py-4 items-center justify-center">
      <div class="flex flex-wrap justify-center gap-4">
        <DropDown :menuData="menuRestaurants">{{$t('navbar.restaurant')}}</DropDown>
        <DropDown :menuData="menuHouseWork">{{$t('navbar.homeAndWork')}}</DropDown>
        <DropDown :menuData="menuCarService">{{$t('navbar.serviceRepaire')}}</DropDown>
        <DropDown :menuData="menuOthers">{{$t('navbar.otherCategory')}}</DropDown>
      </div>
    </div>

    <div id="searchBar" class="relative container justify-center mx-auto px-4 py-50 mt-20">
      <h class="text-6xl text-white font-medium font-popins">{{$t('navbar.descriptionStartPart1')}}</h>
      <p class="text-6xl text-white font-medium font-popins">{{$t('navbar.descriptionStartPart2')}}</p>

    </div>


    <div id="searchBar" class="relative container justify-center mx-auto px-4 py-40">
      <h class="text-xl text-white font-medium font-popins">{{$t('navbar.descriptionEndPart1')}}</h>
      <p class="text-xl text-white font-medium font-popins">{{$t('navbar.descriptionEndPart2')}}</p>

    </div>



  </div>
</template>

  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import Button from '@/components/buttons/Button.vue';
  // import FloatingInput from '../input/FloatingInput.vue';
  import BaseIcon from '../icons/BaseIcon.vue';
  import { useRouter } from 'vue-router';
  import DropDown from '../dropDown/DropDown.vue';
  import backgroundImage from '@/assets/wp7388245-satisfied-wallpapers.jpg';
  import { useI18n } from 'vue-i18n';

// Utilisation de useI18n pour accéder aux traductions


  const isDropdownVisible = ref(false) ;
  const scrollMenu = ref(null);
const showLeftButton = ref(false);
const showRightButton = ref(false);
const router = useRouter();
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

const { t } = useI18n();

  const menuItems = computed(() =>[
  {  label: t('navbar.restaurant'), icon: "Utensils" },
  {  label: t('navbar.delivery'), icon: "Package" },
  {  label: t('navbar.takeAway'), icon: "ShoppingBasket" },
  {  label: t('navbar.accountants'), icon: "Calculator" },
  {  label: t('navbar.plumbers'), icon: "Droplets" },
  {  label: t('navbar.autoRepair'), icon: "Wrench" },

]);


const menuData  = computed(() =>[
{ label: "Yaounde, CE,"+ t('navbar.cameroon') },
  { label: "Douala, LT , "+ t('navbar.cameroon') },
  { label: "Bamenda, NW, "+ t('navbar.cameroon') },
  { label: "Garoua, NO, "+ t('navbar.cameroon') },
  { label: "Bafoussam, OU, "+ t('navbar.cameroon') },
  { label: "Limbe, SO, "+ t('navbar.cameroon') },
  { label: "Kribi, SU, "+ t('navbar.cameroon') },
  { label: "Buea, SW, "+ t('navbar.cameroon') },
  { label: "Maroua, EN, "+ t('navbar.cameroon') },
  { label: "Dschang, OU, "+ t('navbar.cameroon') },
]);
const menuRestaurants = computed(() =>[
  { route: "/recherche", label: t('navbar.takeAway'),icon: "ShoppingBag" },
  { route: "/recherche", label: t('navbar.burgers'),icon: "Pizza" },
  { route: "/recherche", label: t('navbar.chineseCuisine'),icon: "Soup" },
  { route: "/recherche", label: t('navbar.italianCuisine'),icon: "Salad" },
  { route: "/recherche", label: t('navbar.reservations'),icon: "Calendar1" },
  { route: "/recherche", label: t('navbar.delivery'),icon: "Package2" },
  { route: "/recherche", label: t('navbar.mexicanCuisine'),icon: "CookingPot" },
  { route: "/recherche", label: t('navbar.thaiCuisine'),icon: "Fish" },

]);

const menuHouseWork = computed(() => [
  { route: "/recherche", label: t('navbar.serviceProvider'),icon: "HandCoins" },
  { route: "/recherche", label: t('navbar.electricians'),icon: "PlugZap" },
  { route: "/recherche", label: t('navbar.cleaning'),icon: "Recycle" },
  { route: "/recherche", label: t('navbar.heating'),icon: "ThermometerSun" },
  { route: "/recherche", label: t('navbar.landscaping'),icon: "Shrub" },
  { route: "/recherche", label: t('navbar.locksmiths'),icon: "Key" },
  { route: "/recherche", label: t('navbar.movers'),icon: "BriefcaseConveyorBelt" },
  { route: "/recherche", label: t('navbar.plumbers'),icon: "Droplets" },

]);

const menuCarService = computed(() => [
  { route: "/recherche", label: t('navbar.carRepair'),icon: "Bolt" },
  { route: "/recherche", label: t('navbar.precisionCarCleaning'),icon: "SprayCan" },
  { route: "/recherche", label: t('navbar.bodywork'),icon: "RectangleHorizontal" },
  { route: "/recherche", label: t('navbar.carCleaning'),icon: "Sparkles" },
  { route: "/recherche", label: t('navbar.carDealership'),icon: "KeySquare" },
  { route: "/recherche", label: t('navbar.oilChange'),icon: "Beaker" },
  { route: "/recherche", label: t('navbar.parking'),icon: "CircleParking" },
  { route: "/recherche", label: t('navbar.towing'),icon: "Tangent" },

]);

const menuOthers = computed(() => [
  { route: "/recherche", label: t('navbar.dryCleaning'),icon: "VenetianMask" },
  { route: "/recherche", label: t('navbar.phoneRepair'),icon: "Smartphone" },
  { route: "/recherche", label: t('navbar.bars'),icon: "Beer" },
  { route: "/recherche", label: t('navbar.nightlife'),icon: "Martini" },
  { route: "/recherche", label: t('navbar.hairdressersHairSalons'),icon: "SquareScissors" },
  { route: "/recherche", label: t('navbar.gym'),icon: "Dumbbell" },
  { route: "/recherche", label: t('navbar.massage'),icon: "MarsStroke" },
  { route: "/recherche", label: t('navbar.shopping'),icon: "ShoppingCart" },

]);

const menuYelp = computed(() => [
  { route: "/addBusiness", label: t('navbar.addABusiness'),icon: "HousePlus" },
  { route: "/recherche", label: t('navbar.claimYourBusiness'),icon: "CircleCheck" },
  { route: "/login", label: t('navbar.loginInToBusiness'),icon: "CircleUser" },

]);

const connexion = () =>{
  // Redirect to login page
  router.push('/login');
}

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
