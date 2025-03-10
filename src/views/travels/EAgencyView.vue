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
  <a href="#"
    class="block text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
</router-link>
<router-link class="px-3 py-4">
  <a href="#"
    class="block  text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
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
      <div class="max-w-screen-xl min-w-screen-md flex flex-wrap items-center justify-between mx-auto p-0 ">
        <!-- boutton mobile start -->
        <button @click="toggleSidebar" data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark-500 ml-5 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <!-- boutton mobile end -->

        <!-- sidebar mobile start -->


        <div v-if="isSidebarOpen" class="absolute inset-0 space-x-10 bg-black bg-opacity-50 z-[999] md:hidden"
          @click.self="toggleSidebar">
          <div class="absolute transform h-full bg-customBlue shadow-lg p-4 transition-transform w-[66.666%]"
            :class="{ 'translate-x-0': isSidebarOpen, 'translate-x-full': !isSidebarOpen }">

            <div class="flex flex-col space-y-6 mt-10">
              <!-- Contenu de la sidebar -->

              <div class="flex flex-col items-center justify-between w-full md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-1 md:p-0 mt-4 font-medium
                            md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
                            dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                  <CustomDropdownD :menuData="menuRestaurants" columnClass="grid-cols-2">
                    <template #button>
                      <span class="text-white">{{ $t('appServices.agency.organizeYourTrip') }} </span>
                    </template>
                  </CustomDropdownD>

                  <CustomDropdownD :menuData="menuHouseWork" columnClass="grid-cols-2">
                    <template #button>
                      <span class="text-white">{{ $t('appServices.agency.services') }}</span>
                    </template>
                  </CustomDropdownD>

                  <router-link class="px-5 py-5">
                    <span class="block text-white rounded-sm hover:bg-white/50 md:hover:bg-transparent px-2
                                  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500
                                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                                  md:dark:hover:bg-transparent dark:border-gray-700">
                      {{ $t('appServices.agency.trackATrip') }}
                    </span>
                  </router-link>

                  <router-link class="px-6 py-5">
                    <span class="block text-white rounded-sm hover:bg-white/50 md:hover:bg-transparent px-2
                                  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500
                                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
                                  md:dark:hover:bg-transparent dark:border-gray-700">
                      {{ $t('appServices.agency.help') }}
                    </span>
                  </router-link>

                </ul>
              </div>

            </div>
          </div>
        </div>




        <!-- sidebar mobile start -->


        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Agency Bus</span>
        </div>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-7">
          <LanguageButton @changeLang="langChanged" />

        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-3 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <CustomDropdownD :menuData="menuRestaurants" columnClass="grid-cols-2">
              <template #button>
                <span class="text-white">{{ $t('appServices.agency.organizeYourTrip') }}</span>
              </template>
            </CustomDropdownD>
            <CustomDropdownD :menuData="menuHouseWork" columnClass="grid-cols-2">
              <template #button>
                <span class="text-white">{{ $t('appServices.agency.services') }}</span>
              </template>
            </CustomDropdownD>
            <router-link to="/recherche" class="px-3 py-5">
              <span
                class="block text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{
                  $t('appServices.agency.trackATrip') }}</span>
            </router-link>
            <router-link to="/recherche" class="px-3 py-5">
              <span
                class="block  text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{
                  $t('appServices.agency.help') }}</span>
            </router-link>
          </ul>
        </div>
      </div>
    </div>

  </div>
  <div class="relative background" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <!-- ✅ Checkbox caché pour gérer l'affichage -->
    <input type="checkbox" id="toggle-passager" class="peer hidden">

    <!-- ✅ Overlay sombre qui met en avant la div principale et la modale -->
    <label for="toggle-passager" class="fixed inset-0 bg-black opacity-50 z-50 hidden peer-checked:block"></label>

    <!-- ✅ Modale pour configurer les passagers -->
    <div v-if="!isSmallScreen" id="modalPassager"
      class="absolute left-[1250px] top-[495px] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-96 hidden peer-checked:block">
      <Counter v-model="adults">{{ $t('appServices.agency.oneAdult') }}</Counter>
      <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
      <Counter v-model="children">{{ $t('appServices.agency.children') }}</Counter>
      <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
    </div>

    <!-- ✅ Modale pour configurer les passagers end -->

    <!-- Modale pour configurer les passagers mobile start -->

    <div v-if="isSmallScreen" id="modalPassager"
      class="absolute left-[208px] top-[600px] transform -translate-x-1/2 -translate-y-1/3 bg-white rounded-lg shadow-xl p-6 w-screen-sm hidden peer-checked:block">
      <Counter v-model="adults">{{ $t('appServices.agency.oneAdult') }}</Counter>
      <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
      <Counter v-model="children">{{ $t('appServices.agency.children') }}</Counter>
      <div class="w-full h-[2px] rounded-full bg-gradient-to-r from-customBlue via-purple-800 to-customRed my-4"></div>
    </div>

    <!-- Modale pour configurer les passagers mobile end -->



    <!-- ✅ Ton code existant SANS MODIFICATION -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Div centrée et superposée à moitié sur l'image -->
    <div
      class="absolute top-[100px] left-1/2 transform -translate-x-1/2 translate-y-1/3 rounded-sm max-w-screen-xl mt-6 w-full">
      <span class="text-4xl text-white font-medium ">{{ $t('appServices.agency.busTravel') }}</span>
    </div>

    <!-- ✅ Ajout de la classe peer-checked pour mettre en avant la div -->
    <div id="maDivPrincipale" class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/3 bg-white rounded-sm max-w-screen-xl min-w-screen-sm p-4 shadow-lg
                  transition-all peer-checked:shadow-2xl peer-checked:scale-105 peer-checked:bg-white">

      <div class="flex space-x-4 mx-auto px-4 py-4 rounded-md w-full">
        <label for="aller-simple"
          class="font-medium relative hover:bg-zinc-100 flex items-center px-3 gap-2 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none">
          <input type="radio" name="status" id="aller-simple" value="aller-simple" v-model="picked"
            class="w-4 h-4 accent-blue-500" />
          {{ $t('appServices.agency.oneWay') }}
        </label>

        <label for="aller-retour"
          class="font-medium relative hover:bg-zinc-100 flex items-center px-3 gap-2 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none">
          <input type="radio" name="status" id="aller-retour" value="aller-retour" v-model="picked"
            class="w-4 h-4 accent-blue-500" />
          {{ $t('appServices.agency.roundTrip') }} </label>
      </div>

      <div
        class="flex flex-col sm:flex-row md:grid-cols-2 sm:grid-cols-2 items-center justify-center sm:justify-between w-full"
        :class="langChange ? 'px-2' : ''">

        <!-- Search Section -->
        <div id="search"
          :class="picked === 'aller-retour' ? 'w-full max-w-sm sm:min-w-[240px] md:min-w-[340px] lg:min-w-[460px] relative' : 'w-full max-w-sm sm:min-w-[240px] md:min-w-[340px] lg:min-w-[460px] relative '">
          <div
            :class="langChange ? 'flex relative justify-start  space-x-[80px] lg:space-x-[180px] mt-2 px-2' : 'flex relative justify-start  space-x-[80px] lg:space-x-[202px] mt-2'">
            <span class="ml-1 font-medium ">{{ $t('appServices.agency.from') }}</span>
            <span class="font-medium">{{ $t('appServices.agency.to') }}</span>
          </div>

          <div class="flex items-center rounded overflow-hidden bg-white p-1 border-2">
            <BaseIcon name="MapPin" size="30" stroke-width="1.7" class="ml-2 text-gray-500" />
            <input v-model="leftValue" @mouseenter="activeInput = 'left'"
              class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none " />
            <div class="relative mx-2 flex items-center justify-center">
              <div class="h-14 border-l border-slate-300 absolute left-1/2 transform -translate-x-1/2"></div>
              <button @click="switchData" class="transition-transform duration-500 ease-in-out"
                :class="{ 'fast-spin': isSwitching }">
                <BaseIcon name="ArrowLeftRight" size="35" stroke-width="1.7"
                  class="text-gray-600 h-15 bg-white border-2 border-slate-300 rounded-full relative border-l-customRed border-r-customRed z-10 p-1" />
              </button>
            </div>
            <BaseIcon name="MapPin" size="30" stroke-width="1.7" class="text-gray-500 ml-1" />
            <input v-model="rightValue" @mouseenter="activeInput = 'right'"
              class="w-1/2 px-3 py-2 text-md text-gray-600 placeholder:text-gray-500 focus:outline-none" />
          </div>

          <ul v-if="activeInput === 'left'" @mouseenter="activeInput = 'left'" @mouseleave="handleMouseLeave('left')"
            class="absolute left-0 w-1/2 bg-white z-[100] border rounded shadow-lg mt-1 h-64 overflow-x-auto scrollbar-hide">
            <li v-for="item in menuData" :key="item" @mouseenter="leftValue = item.label"
              @click="selectItem('left', item.label)"
              class="flex justify-start items-center z-[100] px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer ">
              <span class="ml-2">{{ item.label }}</span>
            </li>
          </ul>

          <ul v-if="activeInput === 'right'" @mouseenter="activeInput = 'right'" @mouseleave="handleMouseLeave('right')"
            class="absolute right-0 w-1/2 bg-white border z-[100] rounded shadow-lg mt-1 h-64 overflow-x-auto scrollbar-hide">
            <li class="flex justify-center items-center mt-3"></li>
            <li v-for="item in menuData" :key="item" @mouseenter="rightValue = item.label"
              @click="selectItem('right', item.label)"
              class="px-3 py-2 text-md z-[100] hover:bg-gray-100 cursor-pointer mx-2">
              {{ item.label }}
            </li>
          </ul>
        </div>
        <div :class="picked === 'aller-retour' ? 'lg:flex justify-center' : ''">
          <div class="flex flex-col p-1 ml-1">
            <label class="font-semibold py-1">{{ $t('appServices.agency.departure') }}</label>
            <div class="relative ">
              <i class="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input ref="datepickerAller" id="dateAller" v-model="formattedDateAller"
                :class="picked === 'aller-retour' ? 'datepicker aller border-2 border-gray-300 text-gray-400 rounded pl-10 py-3 w-56 focus:ring-2 focus:ring-blue-500  md:min-w-56 lg:w-56' : 'datepicker aller border-2 border-gray-300 text-gray-400 rounded pl-10 py-3 w-56 md:min-w-56 lg:w-[445px] focus:ring-2 focus:ring-blue-500'"
                type="text" placeholder="Sélectionner une date" />
            </div>
          </div>

          <div :class="picked === 'aller-retour' ? '' : 'hidden'" class="flex flex-col p-1">
            <label class="font-semibold py-1">{{ $t('appServices.agency.return') }}</label>
            <div class="relative">
              <i class="fas fa-calendar-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input ref="datepickerRetour" id="dateRetour" v-model="formattedDateRetour"
                class="datepicker retour border-2 border-gray-300 text-gray-400 rounded pl-10 py-3 w-60 focus:ring-2 focus:ring-blue-500  md:w-56 xl:w-56"
                type="text" placeholder="Sélectionner une date" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col p-1 relative" :class="picked === 'aller-retour' ? '' : 'm:ml-1'">

            <label class="font-semibold py-1">{{ $t('appServices.agency.passengers') }}</label>
            <label for="toggle-passager"
              :class="picked === 'aller-retour' ? 'border-2 border-gray-300 rounded px-3 py-3 focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-center justify-between w-60 md:min-w-56 lg:w-56' : 'border-2 border-gray-300 rounded px-3 py-3 w-60 focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-center justify-between'">
              <span class="text-gray-600">{{ adults }}{{ $t('appServices.agency.oneAdult') }} , {{ children }} {{
                $t('appServices.agency.children') }} </span>
              <!-- Chevron down icon added here -->
              <svg class="w-4 h-4 text-gray-600 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </label>
          </div>
        </div>
        <div class="p-1">
          <button @click="handleSearch"
            :class="picked === 'aller-retour' ? 'bg-customRed text-white w-full h-[50px] py-2 px-2 rounded mt-8 ' : 'bg-customRed text-white w-full h-[50px] py-2 px-2 rounded mt-8'">{{
              $t('appServices.agency.search') }}</button>
        </div>



      </div>
    </div>

    <div class="p-40">
    </div>

  </div>
  <div class="p-7 ">
  </div>
  <div v-if="!showFilter"
    class="absolute  left-1/2 transform -translate-x-1/2 translate-y-1/3 rounded-sm max-w-screen-xl mt-6 w-full">
    <div class="flex flex-col sm:flex-row sm:justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">

      <button
        class="flex items-center justify-center w-full max-w-lg py-3  bg-white text-gray-500 border border-gray-300 rounded  ">
        <BaseIcon name="TicketCheck" size="20" stroke-width="1.7" class="mr-2" />
        {{ $t('appServices.agency.manageMyBooking') }}
      </button>

      <button
        class="flex items-center justify-center w-full max-w-lg px-5 py-3  bg-white text-gray-500 border-gray-300 border rounded  ">
        <BaseIcon name="Bus" size="20" stroke-width="1.7" class="mr-2" />
        {{ $t('appServices.agency.followATrip') }}
      </button>

      <button
        class="flex items-center justify-center w-full max-w-lg px-5 py-3  bg-white text-gray-500 border-gray-300 border rounded  ">
        <BaseIcon name="HelpCircle" size="20" stroke-width="1.7" class="mr-2" />
        {{ $t('appServices.agency.help') }}
      </button>
    </div>
  </div>

  <div v-else class="mt-28 md:mt-10">
    <FilterTravel ></FilterTravel>
  <!-- <div v-else class="mt-10">
    <FilterTravel></FilterTravel>
  </div>

  <div> -->

  </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import backgroundImage from '@/assets/bg-bus.jpg';
import LanguageButton from '@/components/buttons/LanguageButton.vue';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { French, English } from 'flatpickr/dist/l10n/fr.js';
import Counter from '@/components/counter/Counter.vue';
import FilterTravel from '@/components/Travels/FilterTravel.vue';
import { Categories } from '@/mocks/categories';
import { useRoute } from 'vue-router';
const route = useRoute();
const place = ref('')
const filteredPlaces = ref([]);
const places = ref('Travel');

onMounted(() => {
  place.value = route.params.id;
  console.log(place.value);

  // Récupération des données des lieux et filtrage
 const selectedPlace = Categories.filter((place) => place.label === places.value);
  if (selectedPlace) {
    filteredPlaces.value = selectedPlace.places;

  }

  console.log(filteredPlaces.value);

});

// import FloatingInput from '../input/FloatingInput.vue';
import BaseIcon from '@/components/icons/BaseIcon.vue';
import CustomDropdownD from '@/components/dropDown/dropdownColumnsP.vue';

// import DropDown from '../dropDown/DropDown.vue';
import { useI18n } from 'vue-i18n';

// Utilisation de useI18n pour accéder aux traductions
const langChange = ref(false);
const isSwitching = ref(false);
const isDropdownVisible = ref(false);
const scrollMenu = ref(null);
const showLeftButton = ref(false);
const showRightButton = ref(false);

const formattedDateAller = ref('');
const formattedDateRetour = ref('');

const currentLanguage = ref('en');
const isSidebarOpen = ref(false);
const picked = ref('aller-simple');
const adults = ref(1);
const children = ref(0);
const showFilter = ref(false);

const handleSearch = () => {
  showFilter.value = true;
};


const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const formatDate = (date) => {
  const options = { day: '2-digit', month: 'short' };
  return `${t('appServices.agency.today')}, ${new Intl.DateTimeFormat(currentLanguage.value, options).format(date)}`;
};
const _formatDate = (date) => {
  const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat(currentLanguage.value, options).format(date);
};

const langChanged = (lang) => {
  currentLanguage.value = lang;
  langChange.value = !langChange.value;
  // Mettre à jour la locale de Flatpickr
  flatpickr(".datepicker", {
  locale: lang === 'en' ? English : French,
  dateFormat: "d M Y",
  minDate: "today",
  onChange: (selectedDates, dateStr, instance) => {
    const inputElement = instance.input; // instance.input au lieu de fp.input

    if (inputElement?.classList.contains('aller')) {
      formattedDateAller.value = _formatDate(selectedDates[0]);
      console.log('formattedDateAller.value', formattedDateAller.value);
    } else if (inputElement?.classList.contains('retour')) {
      formattedDateRetour.value = _formatDate(selectedDates[0]);
      console.log('formattedDateRetour.value', formattedDateRetour.value);

    }
  },
});

  const today = new Date();
  formattedDateAller.value = formatDate(today);
  formattedDateRetour.value = formatDate(today);

  console.log('formattedDateAller.value' , formattedDateAller.value);


};

onMounted(() => {

  langChanged('en'); // Initialiser avec le français au premier chargement
});


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
  }, 400);
}
const isSmallScreen = ref(window.innerWidth < 1024);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 1024;
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
  window.addEventListener('resize', updateScreenSize);

});
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updateScreenSize);

});


const { t } = useI18n();


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

/* ✅ Met les deux divs au premier plan */
#maDivPrincipale,
#modalPassager {
  z-index: 50 !important;
  /* Passe au-dessus de tout */

}
</style>
