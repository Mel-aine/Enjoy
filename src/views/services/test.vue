<template>


    <div class="container mx-auto  justify-center ">
    
    
      <!-- <div class="bg-customBlue dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Agency Bus</span>
      </div>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <CustomDropdownD :menuData="menuRestaurants" columnClass="grid-cols-2">
            <template #button>
              <span class="text-white">{{$t('navbar.restaurant')}}</span>
            </template>
          </CustomDropdownD>
          <CustomDropdownD :menuData="menuHouseWork" columnClass="grid-cols-2">
            <template #button>
              <span class="text-white">{{$t('navbar.homeAndWork')}}</span>
            </template>
          </CustomDropdownD>
          <router-link class="px-3 py-4">
            <a href="#" class="block text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </router-link>
          <router-link class="px-3 py-4">
            <a href="#" class="block  text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </router-link>
        </ul>
      </div>
      </div>
    </div> -->
    
    
        </div>
    
        <!-- <div class="container mx-auto">
            <RadioButton v-model="selectedOption" :options="radioOptions" />
        </div> -->
        <div>
          <div class="bg-customBlue dark:bg-gray-900 w-full top-0 start-0 dark:border-gray-600">
            <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-0 ">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Agency Bus</span>
            </div>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul class="flex flex-col p-3 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <CustomDropdownD :menuData="menuRestaurants" columnClass="grid-cols-2">
                  <template #button>
                    <span class="text-white">Organisez votre voyage</span>
                  </template>
                </CustomDropdownD>
                <CustomDropdownD :menuData="menuHouseWork" columnClass="grid-cols-2">
                  <template #button>
                    <span class="text-white">Services</span>
                  </template>
                </CustomDropdownD>
                <router-link class="px-3 py-5">
                  <span class="block text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Suivez un trajet</span>
                </router-link>
                <router-link class="px-3 py-5">
                  <span class="block  text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Aide</span>
                </router-link>
              </ul>
            </div>
            </div>
          </div>
    
        </div>
        <div class="relative background" :style="{ backgroundImage: `url(${backgroundImage})` }">
          <div class="absolute inset-0 bg-black opacity-50"></div> 
    
          <!-- Div centrée et superposée à moitié sur l'image -->
          <div class="absolute -top-8 transform translate-x-60 translate-y-40 max-w-screen-lg p-4">
          <span class="text-4xl text-white font-medium"> Voyage en bus à petit prix à partir de 3000 FCFA.</span>
        </div>
      <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3 bg-white rounded-sm max-w-screen-lg p-4 shadow-lg">
        <div class="flex space-x-4 mx-auto px-4 py-4 rounded-md">
          <label
            for="aller-simple"
            class="font-medium relative hover:bg-zinc-100 flex items-center px-3 gap-2 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
          >
            <input
              type="radio"
              name="status"
              id="aller-simple"
              checked
              class="w-4 h-4 accent-blue-500"
            />
            Aller simple
          </label>
    
          <label
            for="aller-retour"
            class="font-medium relative hover:bg-zinc-100 flex items-center px-3 gap-2 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
          >
            <input
              type="radio"
              name="status"
              id="aller-retour"
              class="w-4 h-4 accent-blue-500"
            />
            Aller et retour
          </label>
        </div>
    
        <div class="flex items-center justify-between w-full"> <!-- Aligns search and date horizontally -->
    
        <!-- Search Section -->
        <div id="search" class="w-full max-w-sm min-w-[440px] relative ">
          <div class="flex relative justify-start space-x-[201px] mt-2">
            <span class="ml-1 font-medium ">De</span>
            <span class="font-medium">À</span>
          </div>
    
          <div class="flex items-center rounded overflow-hidden bg-white p-1 border-2">
            <BaseIcon name="MapPin" size="30" stroke-width="1.7" class="ml-2 text-gray-500" />
            <input
              v-model="leftValue"
              @mouseenter="activeInput = 'left'"
              class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none "
            />
            <div class="relative mx-2 flex items-center justify-center">
              <div class="h-14 border-l border-slate-300 absolute left-1/2 transform -translate-x-1/2"></div>
              <button @click="switchData" class="transition-transform duration-500 ease-in-out" :class="{'fast-spin': isSwitching}">
                <BaseIcon name="ArrowLeftRight" size="35" stroke-width="1.7" class="text-gray-600 h-15 bg-white border-2 border-slate-300 rounded-full relative border-l-customRed border-r-customRed z-10 p-1" />
              </button>
            </div>
            <BaseIcon name="MapPin" size="30" stroke-width="1.7" class="text-gray-500 ml-1" />
            <input
              v-model="rightValue"
              @mouseenter="activeInput = 'right'"
              class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none"
            />
          </div>
    
          <ul v-if="activeInput === 'left'" @mouseenter="activeInput = 'left'" @mouseleave="handleMouseLeave('left')" class="absolute left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 overflow-auto">
            <li v-for="item in menuData" :key="item" @mouseenter="leftValue = item.label" @click="selectItem('left', item.label)" class="flex justify-start items-center z-[100] px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ">
              <span class="ml-2">{{ item.label }}</span>
            </li>
          </ul>
    
          <ul v-if="activeInput === 'right'" @mouseenter="activeInput = 'right'" @mouseleave="handleMouseLeave('right')" class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 overflow-auto">
            <li class="flex justify-center items-center mt-3"></li>
            <li v-for="item in menuData" :key="item" @mouseenter="rightValue = item.label" @click="selectItem('right', item.label)" class="px-3 py-2 text-md z-[100] hover:bg-gray-100 cursor-pointer mx-2">
              {{ item.label }}
            </li>
          </ul>
        </div>
    
        <!-- Date Section -->
        <div id="date" class="flex flex-col p-1 ml-1">
          <label class="font-semibold py-1">Départ</label>
          <div class="relative">
            <i class="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              ref="datepicker"
              v-model="formattedDate"
              class="border-2 border-gray-300 text-gray-400 rounded pl-10 py-3 w-56 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Sélectionner une date"
            />
          </div>
        </div>
        <div id="date" class="flex flex-col p-1"> <!-- Added margin-left to create space between search and date -->
          <label class="font-semibold py-1">Passagers</label>
          <input
            class="border-2 border-gray-300 rounded px-3 py-3 w-56 focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="1 adulte"
          />
        </div>
        <div class="p-1">
          <button class="bg-customRed text-white  h-[50px] py-2 px-2 rounded mt-8">Chercher</button>
    
        </div>
    
        
        </div>
    
        </div>
    
          <div class="p-40"></div>
          
        </div>
        <div class="p-7 ">
        </div>
        <div class="absolute z-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 rounded-sm max-w-screen-lg mt-6 w-full">
          <div class="flex justify-between space-x-4 w-full z-0">
            <button class="flex items-center justify-center w-full max-w-xs py-3 z-0 bg-white text-gray-500 border border-gray-300 rounded  ">
              <BaseIcon name="TicketCheck" size="20" stroke-width="1.7" class="mr-2" />
              Gérer ma réservation
            </button>
            
            <button class="flex items-center justify-center w-full max-w-xs px-5 py-3 z-0 bg-white text-gray-500 border-gray-300 border rounded  ">
              <BaseIcon name="Bus" size="20" stroke-width="1.7" class="mr-2" />
              Suivre un trajet
            </button>
            
            <button class="flex items-center justify-center w-full max-w-xs px-5 py-3 z-0 bg-white text-gray-500 border-gray-300 border rounded  ">
              <BaseIcon name="HelpCircle" size="20" stroke-width="1.7" class="mr-2" />
              Aide
            </button>
          </div>
        </div>
    
    
    
        <div >
    
        </div>
    
    
    
    
    
    
      <!-- Conteneur principal -->
      <div class="relative w-full max-w-2xl p-6 space-y-6">
    
        <!-- Checkbox caché pour activer l'effet -->
        <input type="checkbox" id="toggle" class="peer hidden">
    
        <!-- Overlay sombre qui apparaît quand la div est active -->
        <label for="toggle" class="fixed inset-0 bg-black opacity-50 hidden peer-checked:block"></label>
    
        <!-- Div qui change d'apparence lorsqu'elle est active -->
        <div class="p-6 border rounded-lg bg-gray-300 transition-all peer-checked:bg-white peer-checked:shadow-2xl peer-checked:scale-105 relative z-10">
          <p class="mb-2">Cliquez sur le bouton</p>
          <label for="toggle" class="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
            Activer
          </label>
        </div>
    
      </div>
    
    
    
      
    
    
    
    
    
    
    
    
    
    </template>
    
      <script setup>
      import { ref, onMounted, onUnmounted, computed } from 'vue';
      import backgroundImage from '@/assets/bg-bus.jpg';
      import flatpickr from 'flatpickr';
      import 'flatpickr/dist/flatpickr.min.css';
      import { French } from 'flatpickr/dist/l10n/fr.js';
    
    
    
     
    
      // import FloatingInput from '../input/FloatingInput.vue';
      import BaseIcon from '@/components/icons/BaseIcon.vue';
      import CustomDropdownD from '@/components/dropDown/dropdownColumnsP.vue';
    
      // import DropDown from '../dropDown/DropDown.vue';
      import { useI18n } from 'vue-i18n';
    
    // Utilisation de useI18n pour accéder aux traductions
    
    const isSwitching = ref(false);
    const formattedDate = ref("");
      const isDropdownVisible = ref(false) ;
      const scrollMenu = ref(null);
    const showLeftButton = ref(false);
    const showRightButton = ref(false);
    const datepicker = ref(null);
    
    onMounted(() => {
      const today = new Date();
      formattedDate.value = formatDate(today); // Définit la date du jour au format souhaité
    
      flatpickr(datepicker.value, {
        locale: French,
        dateFormat: "d M Y",
        minDate: "today",
        onChange: (selectedDates) => {
          formattedDate.value = formatDate(selectedDates[0]);
        },
      });
    });
    
    const formatDate = (date) => {
      const options = { day: '2-digit', month: 'short' };
      return `Aujourd’hui, ${new Intl.DateTimeFormat('fr-FR', options).format(date)}`;
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
    
    const switchData = () => {
      isSwitching.value = true;
      setTimeout(() => {
        [leftValue.value, rightValue.value] = [rightValue.value, leftValue.value];
        isSwitching.value = false;
      }, 400);}
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
    @keyframes fast-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(-360deg); } /* Une rotation */
    }
    
    .fast-spin {
      animation: fast-spin 0.4s ease-in-out;
    }
    </style>
    