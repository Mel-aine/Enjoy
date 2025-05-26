<template>
  <div class="relative">
    <!-- <div class="absolute inset-0 bg-black opacity-50"></div> Superposition sombre -->
    <!-- Top Bar -->
    <div id="topBar" class="flex items-center p-2 justify-between container mx-auto">
      <!-- Menu Mobile: Bouton avec icône "fa-bars" -->
      <div v-show="!searchInMobil" id="menuToggle" class="relative block md:hidden">
        <button @click="toggleSidebar" class="text-black text-2xl">
          <i class="fa fa-bars"></i>
        </button>
      </div>

      <!-- Logo -->
      <div v-show="!searchInMobil" id="logo" class="relative rounded-full flex-shrink-0">
        <img class="rounded-full" src="@/assets/logo2.png" width="50" alt="Logo">
      </div>

      <div v-show="!searchInMobil" id="logo" class="relative bg-customRed rounded-full  flex-shrink-0 md:hidden">
        <button @click="wantToSearchMobil" class="p-2 w-15">
          <BaseIcon name="Search" size="20" stroke-width="2" />
        </button>
      </div>

      <!-- search bar for mobile start -->
      <div v-show="searchInMobil" id="menuToggle" class="container relative block md:hidden">
        <!-- <button @click="wantToSearchMobil" class="relative block md:hidden bg-customRed rounded px-5 py-1 mb-2">
          <div class="flex justify-start items-start">
            <span class="text-black">Annuler</span>
            <BaseIcon name="SearchX" size="20" stroke-width="2" class="ml-1 text-black" />
          </div>


        </button> -->
        <div class="w-full max-w-sm min-w-[200px] relative">
          <div class="flex items-center rounded shadow-sm overflow-hidden bg-white">
            <div class="flex items-center justify-between ">
              <input v-model="leftValue" @click="activeInput = 'left'" placeholder="Je recherche un..."
                class="w-full px-3 py-2 text-sm text-gray-600 placeholder:text-gray-500 focus:outline-none" />
              <button @click="wantToSearchMobil" class="p-2 w-15">
                <BaseIcon name="CircleX" size="20" stroke-width="2" />
              </button>

            </div>

            <div class="h-6 border-l border-slate-200 ml-1"></div>
            <div class="flex items-center justify-between ">

              <input v-model="rightValue" @click="activeInput = 'right'" placeholder="OU?"
                class="w-full px-3 py-2 text-sm text-gray-600 placeholder:text-gray-500 focus:outline-none" />
              <button @click="wantToSearchMobil" class="p-2 w-15">
                <BaseIcon name="CircleX" size="20" stroke-width="2" />
              </button>

            </div>
            <router-link to="/recherche">
              <button class="bg-customRed px-4 py-3 text-black ">
                <BaseIcon name="Search" size="20" stroke-width="2" />
              </button>
            </router-link>
          </div>

          <ul v-if="activeInput === 'left'" @click="activeInput = 'left'" @mouseleave="handleMouseLeave('left')"
            class="absolute left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 overflow-auto  ">
            <li v-for="item in menuItems" :key="item" @click="leftValue = item.label; selectItem('left', item.label)"
              class=" flex justify-start items-center z-[100] px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ">
              <BaseIcon :name="item.icon" size="18" customColor="text-gray-700" stroke-width="2"></BaseIcon>
              <span class="ml-2">
                {{ item.label }}
              </span>
            </li>
          </ul>
          <ul v-if="activeInput === 'right'" @click="activeInput = 'right'" @mouseleave="handleMouseLeave('right')"
            class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 overflow-auto  ">
            <li class="flex justify-center items-center mt-3">
              <BaseIcon name="MapPin" customColor="text-blue-500" size="20" stroke-width="3" />
              <span class="text-sm text-blue-400"> {{ $t('navbar.space') }} </span>
            </li>
            <li v-for="item in menuData" :key="item" @click="rightValue = item.label; selectItem('right', item.label)"
              class="px-3 py-2 text-sm z-[100] hover:bg-gray-100 cursor-pointer mx-2">
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>
      <!-- search bar for mobile end -->


      <!-- Menu Principal (Desktop) -->
      <div id="mainMenu" class="relative w-full hidden md:block">
        <nav>
          <div class="flex justify-center space-x-4">


            <div class="w-full max-w-sm min-w-[200px] relative ml-1">
              <div class="flex items-center rounded shadow-sm overflow-hidden bg-white">
                <input v-model="leftValue" @mouseenter="activeInput = 'left'" placeholder="Restaurant"
                  class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none" />
                <div class="h-6 border-l border-slate-200 ml-1"></div>
                
                <!-- v-model manquant -->
                <input id="search-input" @mouseenter="activeInput = 'right'" placeholder="Yaound" v-model="rightValue"
                  class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none" />
                <button @click="handleSearch" class="bg-customRed px-4 py-3 text-black ml-2">
                  <BaseIcon name="Search" size="20" stroke-width="2" />
                </button>

              </div>

              <ul v-if="activeInput === 'left'" @mouseenter="activeInput = 'left'"
                @mouseleave="handleMouseLeave('left')"
                class="ma-div absolute min-h-10 max-h-80 left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 overflow-auto">
                <li v-if="filteredLeftItems.length === 0" class="text-gray-600 italic flex justify-start items-center px-3 py-2">
                  {{ $t('navbar.noResult') }}
                </li>
                <li v-for="item in filteredLeftItems" :key="item.label"
                  @click="selectItem('left', $t('categories.' + item.label))"
                  class="flex justify-start items-center px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                  <i :class="item.icon" class="text-gray-700 mr-2"></i>
                  <span class="ml-2">
                    {{ $t('categories.' + item.label) }}
                  </span>
                </li>
              </ul>


              <!-- <ul v-if="activeInput === 'right'" @mouseenter="activeInput = 'right'"
                @mouseleave="handleMouseLeave('right')"
                class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 overflow-auto">
                <li class="flex justify-center items-center mt-3">
                  <BaseIcon name="MapPin" customColor="text-blue-500" size="20" stroke-width="3" />
                  <span class="text-md text-blue-400"> {{ $t('navbar.space') }} </span>
                </li>
                <li v-for="item in filteredRighttItems" :key="item" @mouseenter="rightValue = item.name"
                  @click="selectItem('right', item.name)"
                  class="px-3 py-2 text-md z-[100] hover:bg-gray-100 cursor-pointer mx-2">
                  {{ item.name }} - {{ item.vicinity }}
                </li>
              </ul> -->
            </div>

            <CustomModal :isOpen="isModalOpen" @close="toggleModal">
              <SearchHotel @search="handleSearchWithComponent" />
            </CustomModal>




            <CustomDropdown :footerDropdown="false" iconColor="text-black">
              <template #button>
                <span class="text-black"> {{ $t('navbar.yelpProfessional') }} </span>
              </template>
              <template #content>
                <div v-for="itemY in menuYelp" :key="itemY" class="space-y-1">
                  <h3 class="text-lg font-semibold text-gray-800 mt-2">
                    <router-link :to="itemY.route"
                      class=" flex justify-start item-center text-sm text-customRed hover:text-gray-900">
                      <BaseIcon :name="itemY.icon" customColor="text-gray-700" size="20" stroke-width="2" />
                      <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2"> {{ itemY.label }}</span>
                    </router-link>

                  </h3>
                </div>
              </template>
            </CustomDropdown>

            <router-link to="/comunity"
              class="text-black hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              {{ $t('navbar.writeReview') }}
            </router-link>

            <router-link to="/comunity"
              class="text-black hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
              active-class="border-b-2 border-indigo-400">
              {{ $t('navbar.startProject') }}
            </router-link>

          </div>
        </nav>
      </div>



      <!-- User Management (à droite) -->
      <div v-show="!searchInMobil" id="userManage" class="relative flex items-center space-x-4">
        <button class="hidden md:block">
          <i class="fa fa-star text-customWhite hover:text-gray-300"></i>
        </button>
        <Button variant="danger" class="font-poppins">{{ $t('login') }}</Button>
        <Button variant="danger" class="font-poppins">{{ $t('register') }}</Button>
      </div>
    </div>

    <!-- Sidebar Menu (Mobile) -->
    <div v-if="isSidebarOpen" class="absolute inset-0 space-x-10 bg-black bg-opacity-50 z-40 md:hidden"
      @click.self="toggleSidebar">
      <div class="absolute transform h-full bg-customBlue shadow-lg p-4 transition-transform "
        :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen }">
        <button @click="toggleSidebar" class="absolute top-4 right-4 text-xl text-gray-600">
          <BaseIcon name="ChevronsLeft" customColor="text-gray-800" size="25" stroke-width="2" />
        </button>
        <div class="flex flex-col space-y-6 mt-10">
          <!-- Dropdown Menu -->
          <div class="relative group">
            <button @click="isDropdownVisible = !isDropdownVisible"
              :class="{ 'focus:outline-none bg-white/10 text-black focus:ring-teal-500 transition': isDropdownVisible, 'text-black': !isDropdownVisible }"
              class="hover:bg-white/20 hover:focus px-4 py-2 rounded-sm font-medium font-poppins">
              {{ $t('navbar.yelpProfessional') }}
              <i class="fa fa-chevron-down text-xs ml-1 text-black"></i>
            </button>

            <!-- Contenu du menu déroulant -->
            <div v-if="isDropdownVisible"
              class="absolute left-0 transform -translate-x-1 z-[100] bg-white shadow-xl w-[300px] sm:max-w-[650px] md:max-w-[850px] lg:max-w-[1100px] mt-2 rounded-lg">
              <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-2 gap-y-2 p-3">
                <div v-for="itemY in menuYelp" :key="itemY" class="space-y-1">
                  <h3 class="text-lg font-semibold text-gray-800 mt-2">
                    <router-link :to="itemY.route"
                      class="flex justify-start item-center text-sm text-customRed hover:text-gray-900">
                      <BaseIcon :name="itemY.icon" customColor="text-gray-700" size="20" stroke-width="2" />
                      <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap">{{ itemY.label
                      }}</span>
                    </router-link>
                  </h3>
                </div>
                <div class="border-b-2 rounded-full border-gray-300 w-full"></div>

                <h3 class="text-lg font-semibold text-gray-800 mt-3">
                  <router-link to="" class="flex justify-start item-center text-sm text-customRed hover:text-gray-900">
                    <BaseIcon name="Telescope" customColor="text-gray-700" size="20" stroke-width="2" />
                    <span class="text-xs text-gray-700 hover:bg-gray-300 ml-2 whitespace-nowrap">{{
                      $t('navbar.yelpExploreBusiness') }}</span>
                  </router-link>
                </h3>
              </div>
            </div>
          </div>

          <router-link to="/comunity" class="text-black hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
            active-class="border-b-2 border-indigo-400">
            {{ $t('navbar.writeReview') }}
          </router-link>

          <router-link to="/comunity" class="text-black hover:bg-white/20 px-4 py-2 rounded-sm font-medium font-poppins"
            active-class="border-b-2 border-indigo-400">
            {{ $t('navbar.startProject') }}
          </router-link>
        </div>
        <div class="flex flex-col lg:flex-row">
          <CustomDropdownD :menuData="menuRestaurants" columnClass="lg:grid-cols-2" iconColor="text-black">
            <template #button>
              <span class="text-black">{{ $t('navbar.restaurant') }}</span>
            </template>
          </CustomDropdownD>
          <CustomDropdownD :menuData="menuHouseWork" columnClass="lg:grid-cols-2" iconColor="text-black">
            <template #button>
              <span class="text-black">{{ $t('navbar.homeAndWork') }}</span>
            </template>
          </CustomDropdownD>
          <CustomDropdownD :menuData="menuCarService" columnClass="lg:grid-cols-2" iconColor="text-black">
            <template #button>
              <span class="text-black">{{ $t('navbar.serviceRepaire') }}</span>
            </template>
          </CustomDropdownD>
          <CustomDropdownD :menuData="menuOthers" columnClass="lg:grid-cols-2" iconColor="text-black">
            <template #button>
              <span class="text-black">{{ $t('navbar.otherCategory') }}</span>
            </template>
          </CustomDropdownD>
        </div>
      </div>

    </div>

    <div id="menuToggle" class="container relative block md:hidden">
      <!-- <button @click="resetSearchBar" class="relative block md:hidden">
          <BaseIcon  name="CircleX" customColor="text-customRed" size="18" stroke-width="2"></BaseIcon>
      </button> -->
    </div>


    <div class="md:block container mx-auto px-[212px]  flex flex-col lg:flex-row">
      <CustomDropdownD :menuData="menuRestaurants" columnClass="lg:grid-cols-2" iconColor="text-black">
        <template #button>
          <span class="text-black">{{ $t('navbar.restaurant') }}</span>
        </template>
      </CustomDropdownD>
      <CustomDropdownD :menuData="menuHouseWork" columnClass="lg:grid-cols-2" iconColor="text-black">
        <template #button>
          <span class="text-black">{{ $t('navbar.homeAndWork') }}</span>
        </template>
      </CustomDropdownD>
      <CustomDropdownD :menuData="menuCarService" columnClass="lg:grid-cols-2" iconColor="text-black">
        <template #button>
          <span class="text-black">{{ $t('navbar.serviceRepaire') }}</span>
        </template>
      </CustomDropdownD>
      <CustomDropdownD :menuData="menuOthers" columnClass="lg:grid-cols-2" iconColor="text-black">
        <template #button>
          <span class="text-black">{{ $t('navbar.otherCategory') }}</span>
        </template>
      </CustomDropdownD>
    </div>

    <!-- <div v-if="clickedLocation">
      <h2>Détails du lieu cliqué</h2>
      <p><strong>Coordonnées :</strong> {{ clickedLocation.lat }}, {{ clickedLocation.lng }}</p>
      <p><strong>Adresse :</strong> {{ clickedLocation.address }}</p>
    </div> -->
    <div v-if="!showMap" id="map" style="height: 800px; width: 100%;"></div>


    <!-- ,,Services destiné aux prof,Média,
    Formation & Enseignement,Organisation d
    événements,Services Locaux,Immobilier
    map -->

  </div>

<LoaodingSpinner v-if="hotelStore.isSpinnerDisplayed" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import Button from '@/components/buttons/Button.vue';
import CustomDropdown from '@/components/dropDown/dropdownContentP.vue';
import CustomDropdownD from '@/components/dropDown/dropdownColumnsP.vue';
import { Categories } from "@/mocks/categories.js";
import CustomModal from '../CustomModal.vue';
import SearchHotel from '../search/SearchHotel.vue';
import { useDataStore } from '@/stores/dataStore';
import { useRouter, useRoute } from 'vue-router';
import { useCategoryStore } from "@/stores/map";
import { useMIHStore } from '@/stores/manageHotelInterface.js';
// import FloatingInput from '../input/FloatingInput.vue';
import BaseIcon from '../icons/BaseIcon.vue';
// import { useRouter } from 'vue-router';
// import backgroundImage from '@/assets/wp7388245-satisfied-wallpapers.jpg';
import { useI18n } from 'vue-i18n';
import { getCategories } from '@/servicesApi/hotelServicesApi.js'
import LoaodingSpinner from '../spiner/LoaodingSpinner.vue'; 
import { categoryTranslations} from '@/utils/helpToTranslate.js'           
const router = useRouter();
const hotelStore = useMIHStore();
const dataStore = useDataStore();
const store = useCategoryStore();
const categories = ref([])




// Utilisation de useI18n pour accéder aux traductions
const $route = useRoute();

const showMap = computed(() => $route.meta.hiddeMap);
const isDropdownVisible = ref(false);
const scrollMenu = ref(null);
const showLeftButton = ref(false);
const showRightButton = ref(false);
const searchInMobil = ref(false);
// const router = useRouter();
const isSidebarOpen = ref(false);
const isModalOpen = ref(false);
// const clickedLocation = ref(null); // Données du lieu cliqué
const linkCategory = ref('')
const iconMarker = ref('<i class="fa-solid fa-check"></i>')
const colorIconCategory = ref('#FFD700')
const bgColorMarkerCategory = ref('#7B2CBF')
const bColorCategory = ref('#FF5400')

const setSettingsMakerDisplay = (iC, cI, bCMC, bCC) => {
  iconMarker.value = iC;
  colorIconCategory.value = cI;
  bgColorMarkerCategory.value = bCMC;
  bColorCategory.value = bCC;
}

const toggleModal = () => {
  isModalOpen.value = false;
}


const fetchCategories = async () => {
  try {
    hotelStore.isSpinnerDisplayed = true;
    const response = await getCategories();
    categories.value = response.data.data;
    hotelStore.allCategories = categories.value;
    console.log('categories from back end', categories.value);
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
  }finally{
    hotelStore.isSpinnerDisplayed = false;
  }
};

onMounted(() => {
  fetchCategories();
  initMap();
});
// const categoryTranslations = {
//   "Restaurants": "Restaurants",
//   "Shopping": "Shopping",
//   "Vie Nocturne": "Nightlife",
//   "Sport & Loisirs": "Sport & Leisure Activities",
//   "Salons de beauté & Spas": "Beauty Salons & Spas",
//   "Automobile": "Automobile",
//   "Maisons & Travaux": "Houses & Works",
//   "Cafés & Thés": "Coffees & Teas",
//   "Fournitures d'énergie": "Power Supplies",
//   "Art & Loisirs": "Art & Leisure",
//   "Santé & Médical": "Health & Medical",
//   "Services Professionnels": "Services For Professional",
//   "Animaux": "Pets",
//   "Immobilier": "Real Estate",
//   "Hôtels & séjours": "Hotels & Stays",
//   "Services Locaux": "Local Services",
//   "Organisation d'Événements": "Event Organization",
//   "Services Publics & Gouvernement": "Public Services & Government",
//   "Services Financiers": "Financial Services",
//   "Formation & Enseignement": "Training & Teaching",
//   "Organisations Religieuses": "Religious Organization",
//   "Voyage": "Travel",
//   "Médias": "Media"
// }


const handleSearch = () => {
  
  if (!leftValue.value || !rightValue.value) {
    console.warn("Veuillez remplir les deux champs.");
    return;
  }

  // Récupère le nom de la catégorie EN à partir de l'affichage FR
  const englishCategory = categoryTranslations[leftValue.value] || leftValue.value

  const foundCategory = categories.value.find(category =>
    category.categoryName === englishCategory
  )
  console.log('foundCategory', englishCategory)

  if (foundCategory) {
    store.setSearchData(foundCategory.id, rightValue.value)
    console.log('foundCategory', englishCategory)

    if (foundCategory.categoryName === 'Hotels & Stays') {
      isModalOpen.value = true
            getServiceIdHotel()
    } else {
      router.push({
        path: `/recherche/${foundCategory.id}`,
        query: { city: rightValue.value }
      })
    }
  } else {
    console.warn("Catégorie non trouvée")
  }
}


// const handleSearch = () => {
//   console.log('handleSearch')
//   getServiceIdHotel()

//   // if (leftValue.value === 'Hôtels & Séjours' || leftValue.value === 'Hotels & Stays') {
//   //   isModalOpen.value = true;
//   // }
//   // isModalOpen.value = true;
//   console.log('rigth value', rightValue.value)
// }

const getServiceIdHotel = () => {
  console.log('getServiceId')

  if (leftValue.value === 'Hôtels & Séjours' || leftValue.value === 'Hotels & Stays') {
    isModalOpen.value = true;
    const foundCategory = categories.value.find(category =>
    category.categoryName === leftValue.value
  )

    hotelStore.idfound = foundCategory.id
  }
}

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const checkScrollButtonsVisibility = () => {
  if (!scrollMenu.value) return;

  const element = scrollMenu.value;
  showLeftButton.value = element.scrollLeft > 0;
  showRightButton.value = element.scrollWidth > element.clientWidth + element.scrollLeft;

};


const handleSearchWithComponent = (searchFromNavbar) => {
  if (rightValue.value == null) return;
  isModalOpen.value = false;
  dataStore.searchFrom = { ...searchFromNavbar }
  console.log('searchFromNavbar', searchFromNavbar)
  router.push(`/hotelList/${searchFromNavbar.destination}`); // Redirige vers la route /bookingHotel
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

const wantToSearchMobil = () => {
  searchInMobil.value = !searchInMobil.value;

};

const leftValue = ref('');
const rightValue = ref('');
const activeInput = ref(null);
const labelToCategory = ref('');
// const mapId = import.meta.env.VITE_IDCARD;


let leftSelected = false; // Track if a selection is made for left field
// let rightSelected = false; // Track if a selection is made for right field

const filteredLeftItems = computed(() => {
  console.log('Categories', Categories);

  return leftValue.value
    ? Categories.filter(item => t('categories.' + item.label).toLowerCase().startsWith(leftValue.value.toLowerCase()))
    : Categories;
});

// const filteredRighttItems = computed(() => {
//   return rightValue.value
//     ? places.value.filter(item => item.name.toLowerCase().includes(rightValue.value.toLowerCase()))
//     : places.value;
// });

// Filtrage dynamique pour la liste droite
// const filteredRightItems = computed(() => {
//   return rightValue.value
//     ? menuData.value.filter(item => item.label.toLowerCase().includes(rightValue.value.toLowerCase()))
//     : menuData.value;
// });


const selectItem = (side, item) => {

  if (side === 'left') {
    leftValue.value = item;

    leftSelected = true; // Mark as selected

    getTerminologyToSearchInGoogleMap(leftValue.value);

  } else {
    rightValue.value = item;
    // rightSelected = true; // Mark as selected
  }
  activeInput.value = null; // Hide the list when an item is selected
};

const handleMouseLeave = (input) => {

  if (input === 'left' && !leftSelected) {
    leftValue.value = ''; // Reset if no selection made
  }

  // Reset selected flags for future checks
  if (input === 'left') {
    leftSelected = false;
  }
  activeInput.value = null; // Hide the list when an item is selected
};

const getTerminologyToSearchInGoogleMap = (item) => {
  // Réinitialiser le tableau des catégories sélectionnées
  selectedCategories.value = [];

  // Ajouter la catégorie correspondante en fonction de l'élément sélectionné
  if (item === 'Restaurants' || item === 'Restaurants') {
    selectedCategories.value.push('restaurant');
    selectedCategories.value.push('meal_delivery');
    selectedCategories.value.push('meal_takeaway');

    setSettingsMakerDisplay('<i class="fa fa-pizza-slice fa-lg"></i>', '#ff8300', '#FFD514', '#ff8300')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }
  if (item === 'Hôtels & séjours' || item === 'Hotels & Stays') {
    selectedCategories.value.push('lodging');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/this.hotel" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'

  }
  if (item === 'Salons de beauté & Spas' || item === 'Beauty Salons & Spas') {
    selectedCategories.value.push('beauty_salon');
    selectedCategories.value.push('spa');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'

  }
  if (item === 'Cafés & Thés' || item === 'Coffees & Teas') {
    selectedCategories.value.push('cafe');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'

  }
  if (item === 'Sports & Activités de loisirs' || item === 'Sports & Leisure Activities') {
    selectedCategories.value.push('gym');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }
  if (item === 'Organisation religieuse' || item === 'Religious Organization') {
    selectedCategories.value.push('church');
    selectedCategories.value.push('mosque');
    selectedCategories.value.push('Synagogues');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
    // selectedCategories.value.push('church');
  }
  if (item === 'Services publics & gouvernement' || item === 'Public Services & Government') {
    selectedCategories.value.push('city_hall');
    selectedCategories.value.push('embassy');
    selectedCategories.value.push('post_office');
    selectedCategories.value.push('embassy');
    selectedCategories.value.push('courthouse');
    selectedCategories.value.push('police');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
    // selectedCategories.value.push('church');
  }
  if (item === 'Santé & Médical' || item === 'Health & Medical') {
    selectedCategories.value.push('drugstore');
    selectedCategories.value.push('dentist');
    selectedCategories.value.push('doctor');
    selectedCategories.value.push('hospital');
    selectedCategories.value.push('insurance_agency');
    selectedCategories.value.push('physiotherapist');
    selectedCategories.value.push('veterinary_care');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }
  if (item === 'Alimentations' || item === 'Power Supplies') {
    selectedCategories.value.push('supermarket');
    selectedCategories.value.push('bakery');
    selectedCategories.value.push('shopping_mall');
    selectedCategories.value.push('supermarket');
    // selectedCategories.value.push('pet_store');
    // selectedCategories.value.push('pet_store');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }
  if (item === 'Voyage' || item === 'Travel') {
    selectedCategories.value.push('airport');
    selectedCategories.value.push('bus_station');
    selectedCategories.value.push('subway_station');
    selectedCategories.value.push('taxi_stand');
    selectedCategories.value.push('train_station');
    selectedCategories.value.push('transit_station');
    selectedCategories.value.push('travel_agency');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }
  if (item === 'Services financiers' || item === 'Financial Services') {
    selectedCategories.value.push('bank');
    selectedCategories.value.push('accounting');
    selectedCategories.value.push('pet_store');
    selectedCategories.value.push('pet_store');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }
  if (item === 'Automobile' || item === 'Automobile') {
    selectedCategories.value.push('car_dealer');
    selectedCategories.value.push('car_rental');
    selectedCategories.value.push('car_repair');
    selectedCategories.value.push('car_wash');
    selectedCategories.value.push('laundry');
    // selectedCategories.value.push('bus_station');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }
  if (item === 'Shopping' || item === 'Shopping') {
    selectedCategories.value.push('clothing_store');
    selectedCategories.value.push('convenience_store');
    selectedCategories.value.push('jewelry_store');
    selectedCategories.value.push('shoe_store');
    selectedCategories.value.push('shopping_mall');
    selectedCategories.value.push('store');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'

  }
  if (item === 'Art & Loisirs' || item === 'Art & Leisure') {
    selectedCategories.value.push('amusement_park');
    selectedCategories.value.push('art_gallery');
    selectedCategories.value.push('campground');
    selectedCategories.value.push('bowling_alley');
    selectedCategories.value.push('casino');
    selectedCategories.value.push('movie_theater');
    selectedCategories.value.push('park');
    selectedCategories.value.push('tourist_attraction');
    selectedCategories.value.push('zoo');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'

  }

  if (item === 'Maisons & Travaux' || item === 'Houses & Works') {
    selectedCategories.value.push('plumber');
    selectedCategories.value.push('painter');
    selectedCategories.value.push('campground');
    selectedCategories.value.push('bowling_alley');
    selectedCategories.value.push('casino');
    selectedCategories.value.push('movie_theater');
    selectedCategories.value.push('park');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'


  }
  if (item === 'Immobilier' || item === 'Real Estate') {
    selectedCategories.value.push('real_estate_agency');
    selectedCategories.value.push('art_gallery');
    selectedCategories.value.push('campground');
    selectedCategories.value.push('bowling_alley');
    selectedCategories.value.push('casino');
    selectedCategories.value.push('movie_theater');
    selectedCategories.value.push('park');
    setSettingsMakerDisplay('<i class="fa fa-utensils fa-lg"></i>', '#FFFFFF', '#FF5400', '#7B2CBF')
    linkCategory.value = '<a href="https://enjoy-em7y.onrender.com/hotelList" style="color: blue; text-decoration: underline; transition: text-decoration 0.2s ease-in-out;" class="custom-link"> Visitez nous  </a> 😃'
  }

  // Mettre à jour la carte avec les catégories sélectionnées
  updateMap(selectedCategories.value);
};

const selectedCategories = ref([""]); // Catégorie sélectionnée
let map = null; // Référence à la carte Google Maps
let markers = []; // Liste des marqueurs affichés sur la carte
// Fonction pour charger le script Google Maps
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

// Fonction pour effacer tous les marqueurs de la carte
function clearMarkers() {
  markers.forEach((marker) => marker.setMap(null)); // Supprimer les marqueurs de la carte
  markers = []; // Réinitialiser la liste des marqueurs
}

// Fonction pour rechercher des lieux d'une catégorie spécifique
async function searchNearbyPlaces(map, categories) {
  const center = map.getCenter();
  const radius = 1000;
  const service = new google.maps.places.PlacesService(map);
  let allResults = [];

  for (const category of categories) {
    const request = {
      location: center,
      radius: radius,
      type: category,
    };

    const results = await new Promise((resolve, reject) => {
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(new Error(`Erreur lors de la recherche pour ${category}: ${status}`));
        }
      });
    });
    allResults = allResults.concat(results);
  }

  const uniqueResults = removeDuplicates(allResults);
  clearMarkers(); // Supprime les anciens marqueurs
  uniqueResults.forEach((place) => {
    // Création de l'icône FontAwesome pour le marqueur
    const icon = document.createElement("div");
    icon.innerHTML = iconMarker.value; // Icône personnalisée
    icon.style.display = "flex";
    icon.style.alignItems = "center";
    icon.style.justifyContent = "center";
    icon.style.width = "100%";
    icon.style.height = "100%";

    // Création d'un PinElement personnalisé
    const faPin = new google.maps.marker.PinElement({
      glyph: icon,
      glyphColor: colorIconCategory.value, // Couleur de l'icône
      background: bgColorMarkerCategory.value, // Couleur de fond du marqueur
      borderColor: bColorCategory.value, // Bordure
    });

    // Création du marqueur avancé
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: place.geometry.location,
      content: faPin.element,
      title: place.name,
    });

    if (leftValue.value === '') {
      labelToCategory.value = '';
    } else {
      labelToCategory.value = `Catégorie: <strong style="color: #FF5400; font-size: 20px;">${leftValue.value}</strong><br>`;
    }
    // InfoWindow pour afficher les détails du lieu
    const infowindow = new google.maps.InfoWindow({
      content: `
        <div style="color: #000; font-size: 16px;">
          ${labelToCategory.value}
          <strong>${place.name}</strong><br>
          ${place.vicinity || place.formatted_address} <br>
          ${linkCategory.value}
        </div>
      `,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });

    markers.push(marker);
  });
}


// Fonction pour supprimer les doublons
function removeDuplicates(results) {
  const seen = new Set();
  return results.filter((place) => {
    const duplicate = seen.has(place.place_id);
    seen.add(place.place_id);
    return !duplicate;
  });
}

// Fonction pour mettre à jour la carte lorsque la catégorie change
function updateMap(selectedItem) {
  if (map) {
    searchNearbyPlaces(map, selectedItem);
  }
}

// Fonction pour initialiser la carte
async function initMap() {
  try {
    await loadGoogleMapsScript();

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 3.8480, lng: 11.5021 }, // Centré sur Yaoundé
      zoom: 14,
      mapId: 'map'
    });

    // Initialiser l'autocomplete
    const input = document.getElementById("search-input");
    const autocomplete = new google.maps.places.Autocomplete(input,{
      types: ['(cities)'],
      componentRestrictions: { country: "CM" }, // facultatif
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        console.error("Lieu non valide");
        return;
      }

      map.setCenter(place.geometry.location);
      searchNearbyPlaces(map, selectedCategories.value);
      rightValue.value = place.formatted_address;
      dataStore.setData(rightValue.value, 'navbar');
    });

    searchNearbyPlaces(map, selectedCategories.value);
  } catch (error) {
    console.error(error.message);
  }
}


// Initialiser la carte au montage du composant
onMounted(() => {
  initMap();
});

onMounted(() => {

  // getLocation();
  checkScrollButtonsVisibility(); // Initial check after component is mounted
  document.addEventListener('click', handleClickOutside);
  // Re-check when the window resizes (for responsiveness)
  window.addEventListener('resize', checkScrollButtonsVisibility);
});
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const { t } = useI18n();

const menuItems = computed(() => [
  { label: t('navbar.restaurant'), icon: "Utensils" },
  { label: t('navbar.delivery'), icon: "Package" },
  { label: t('navbar.takeAway'), icon: "ShoppingBasket" },
  { label: t('navbar.accountants'), icon: "Calculator" },
  { label: t('navbar.plumbers'), icon: "Droplets" },
  { label: t('navbar.autoRepair'), icon: "Wrench" },

]);


const menuData = computed(() => [
  { label: "Yaounde, CE," + t('navbar.cameroon') },
  { label: "Douala, LT , " + t('navbar.cameroon') },
  { label: "Bamenda, NW, " + t('navbar.cameroon') },
  { label: "Garoua, NO, " + t('navbar.cameroon') },
  { label: "Bafoussam, OU, " + t('navbar.cameroon') },
  { label: "Limbe, SO, " + t('navbar.cameroon') },
  { label: "Kribi, SU, " + t('navbar.cameroon') },
  { label: "Buea, SW, " + t('navbar.cameroon') },
  { label: "Maroua, EN, " + t('navbar.cameroon') },
  { label: "Dschang, OU, " + t('navbar.cameroon') },
]);
const menuRestaurants = computed(() => [
  { route: "/recherche", label: t('navbar.takeAway'), icon: "ShoppingBag" },
  { route: "/recherche", label: t('navbar.burgers'), icon: "Pizza" },
  { route: "/recherche", label: t('navbar.chineseCuisine'), icon: "Soup" },
  { route: "/recherche", label: t('navbar.italianCuisine'), icon: "Salad" },
  { route: "/recherche", label: t('navbar.reservations'), icon: "Calendar1" },
  { route: "/recherche", label: t('navbar.delivery'), icon: "Package2" },
  { route: "/recherche", label: t('navbar.mexicanCuisine'), icon: "CookingPot" },
  { route: "/recherche", label: t('navbar.thaiCuisine'), icon: "Fish" },

]);

const menuHouseWork = computed(() => [
  { route: "/recherche", label: t('navbar.serviceProvider'), icon: "HandCoins" },
  { route: "/recherche", label: t('navbar.electricians'), icon: "PlugZap" },
  { route: "/recherche", label: t('navbar.cleaning'), icon: "Recycle" },
  { route: "/recherche", label: t('navbar.heating'), icon: "ThermometerSun" },
  { route: "/recherche", label: t('navbar.landscaping'), icon: "Shrub" },
  { route: "/recherche", label: t('navbar.locksmiths'), icon: "Key" },
  { route: "/recherche", label: t('navbar.movers'), icon: "BriefcaseConveyorBelt" },
  { route: "/recherche", label: t('navbar.plumbers'), icon: "Droplets" },

]);

const menuCarService = computed(() => [
  { route: "/recherche", label: t('navbar.carRepair'), icon: "Bolt" },
  { route: "/recherche", label: t('navbar.precisionCarCleaning'), icon: "SprayCan" },
  { route: "/recherche", label: t('navbar.bodywork'), icon: "RectangleHorizontal" },
  { route: "/recherche", label: t('navbar.carCleaning'), icon: "Sparkles" },
  { route: "/recherche", label: t('navbar.carDealership'), icon: "KeySquare" },
  { route: "/recherche", label: t('navbar.oilChange'), icon: "Beaker" },
  { route: "/recherche", label: t('navbar.parking'), icon: "CircleParking" },
  { route: "/recherche", label: t('navbar.towing'), icon: "Tangent" },

]);

const menuOthers = computed(() => [
  { route: "/recherche", label: t('navbar.dryCleaning'), icon: "VenetianMask" },
  { route: "/recherche", label: t('navbar.phoneRepair'), icon: "Smartphone" },
  { route: "/recherche", label: t('navbar.bars'), icon: "Beer" },
  { route: "/recherche", label: t('navbar.nightlife'), icon: "Martini" },
  { route: "/recherche", label: t('navbar.hairdressersHairSalons'), icon: "SquareScissors" },
  { route: "/recherche", label: t('navbar.gym'), icon: "Dumbbell" },
  { route: "/recherche", label: t('navbar.massage'), icon: "MarsStroke" },
  { route: "/recherche", label: t('navbar.shopping'), icon: "ShoppingCart" },

]);

const menuYelp = computed(() => [
  { route: "/addBusiness", label: t('navbar.addABusiness'), icon: "HousePlus" },
  { route: "/recherche", label: t('navbar.claimYourBusiness'), icon: "CircleCheck" },
  { route: "/login", label: t('navbar.loginInToBusiness'), icon: "CircleUser" },

]);


</script>

<style scoped>
#map {
  border: 1px solid #ccc;
  border-radius: 8px;
}

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

@keyframes fast-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }

  /* Une rotation */
}

.fast-spin {
  animation: fast-spin 0.4s ease-in-out;
}


.ma-div::-webkit-scrollbar {
  width: 6px;
}

.ma-div::-webkit-scrollbar-thumb {
  background: #FF5400;
  /* Rouge */
  border-radius: 0.25rem;
}

.ma-div::-webkit-scrollbar-track {
  background: #ecf0f1;
  /* Gris clair */
}
</style>
