<template>
 <div class="flex flex-col sm:flex-row lg:items-center items-start justify-center sm:gap-20 gap-3   p-8 max-w-screen mx-auto">
  <div class="mb-4 sm:mb-0">
    <span class=" text-md font-semibold text-black">{{$t('overall_rate')}}</span>
    <div class="flex items-center  my-2 sm:my-1 md:my-1 space-x-1 ">
        <span v-for="star in 5" :key="star" class=" ">
          <svg v-if="star <= rating" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white rounded-md bg-orange-500 p-1" viewBox="0 0 24 24">
            <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white p-1 rounded-md bg-gray-400" viewBox="0 0 24 24">
            <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
          </svg>
        </span>
      </div>
    <p class="text-lg font-normal text-gray-500 dark:text-gray-400">1,745 {{$t('review')}}</p>
  </div>

  <!-- Rating Distribution -->
  <div class="w-full sm:w-2/3 ">
    <div class="flex flex-col space-y-4">
      <!-- Star Ratings Progress Bars -->
      <div class="flex items-center ">
        <a href="#" class="text-sm font-normal text-gray-950  hover:underline">5 {{ $t('stars') }}</a>
        <div class="w-2/4 h-3 lg:mx-4 mx-1 bg-gray-200 rounded-full ">
          <div class="h-3 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full" style="width: 100%"></div>
        </div>
      </div>
      <div class="flex items-center">
        <a href="#" class="text-sm font-normal text-gray-950  hover:underline">4 {{ $t('stars') }}</a>
        <div class="w-2/4 h-3 lg:mx-4 mx-1 bg-gray-200 rounded-full ">
          <div class="h-3 bg-yellow-300 rounded-full" style="width: 70%"></div>
        </div>
      </div>
      <div class="flex items-center ">
        <a href="#" class="text-sm font-normal text-gray-950  hover:underline">3 {{ $t('stars') }}</a>
        <div class="w-2/4 h-3 lg:mx-4 mx-1 bg-gray-200 rounded-full dark:bg-gray-700">
          <div class="h-3 bg-yellow-300 rounded-full" style="width: 30%"></div>
        </div>
      </div>
      <div class="flex items-center ">
        <a href="#" class="text-sm font-normal text-gray-950  hover:underline">2 {{ $t('stars') }}</a>
        <div class="w-2/4 h-3 lg:mx-4 mx-1 bg-gray-200 rounded-full dark:bg-gray-700">
          <div class="h-3 bg-yellow-300 rounded-full" style="width: 10%"></div>
        </div>
      </div>
      <div class="flex items-center ">
        <a href="#" class="text-sm font-normal text-gray-950  hover:underline">1 {{ $t('star') }}</a>
        <div class="w-2/4 h-3 lg:mx-4 mx-1 bg-gray-200 rounded-full dark:bg-gray-700">
          <div class="h-3 bg-yellow-300 rounded-full" style="width: 4%"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="flex sm:flex-row flex-col sm:gap-40 gap-2 lg:items-center items-start p-8 max-w-full mx-8 ">
    <div class="flex  flex-row gap-2">
        <div class="relative">
        <button @click="toggleDropdown(1)" class="sm:px-4 py-1 px-2  rounded-full text-sm border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 hover:bg-gray-100" >
            {{ selectedOption1 ? selectedOption1 : "" }}
            <svg data-accordion-icon class="w-3 h-3  rotate-180 shrink-0 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        <div   v-if="openDropdown === 1"  class="absolute mt-2 w-[140px] items-center bg-white border border-gray-300 rounded-xl shadow-lg z-10">
            <ul>
            <li v-for="option in options1" :key="option" @click="selectOption(1, option)" class="px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" >
                {{ option }}
            </li>
            </ul>
        </div>
        </div>


        <div class="relative">
        <button  @click="toggleDropdown(2)"  class="sm:px-4 px-2 py-1 rounded-full text-sm border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 hover:bg-gray-100">
            {{ selectedOption2 ? selectedOption2 : "" }}
            <svg data-accordion-icon class="w-3 h-3  rotate-180 shrink-0 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        <div   v-if="openDropdown === 2" class="absolute mt-2 w-full items-center bg-white border border-gray-300 rounded-xl shadow-lg z-10">
            <ul>
            <li  v-for="option in options2"  :key="option"  @click="selectOption(2, option)"  class="px-4 py-2  text-gray-700 hover:bg-gray-100 cursor-pointer" >
                {{ option }}
            </li>
            </ul>
        </div>
        </div>


        <div class="relative">
        <button  @click="toggleDropdown(3)"  class="sm:px-4 px-2 py-1 rounded-full text-sm border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 hover:bg-gray-100" >
            {{ selectedOption3 ? selectedOption3 : "" }}
            <svg data-accordion-icon class="w-3 h-3  rotate-180 shrink-0 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        <div   v-if="openDropdown === 3" class="absolute mt-2  w-[140px] items-center bg-white border border-gray-300 rounded-xl shadow-lg z-10" >
            <ul>
            <li  v-for="option in options3"  :key="option"  @click="selectOption(3, option)"  class="px-6 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                {{ option }}
            </li>
            </ul>
        </div>
        </div>
    </div>

    <div class="relative flex items-center w-full max-w-[250px]   ">
      <input type="search" id="exampleFormControlInput"  class="block px-2 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-md border  border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-violet-500 focus:outline-none focus:ring-0 focus:border-violet-600 peer" />
      <label for="exampleFormControlInput" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
        Search
      </label>
      <button  type="button" class="absolute right-0 top-0 bottom-0 flex items-center justify-center px-4  text-gray-500 text-xs font-medium transition-all duration-200 ease-in-out " >
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </button>
    </div>
  </div>
  <!-- md:ml-16 lg:ml-24 xl:ml-32  -->
  <div class="sm:w-full w-[350px]  bg-white p-5 rounded-lg shadow-md max-w-screen-md lg:mx-16 mx-0 mb-10 " v-for="(reviewer,index) in reviewers" :key="index">
    <div class="flex flex-col md:flex-row md:items-start md:justify-between">
      <div class="flex items-center mb-4 md:mb-0">
        <img :src="reviewer.profilePicture" alt="Reviewer Profile Picture" class="w-16 h-16 rounded-full mr-4 border border-gray-300" />
        <div>
          <h3 class="text-lg font-semibold">{{ reviewer.name }}</h3>
          <p class="text-gray-600 text-sm font-normal">{{ reviewer.address }}</p>
          <div class="flex items-center space-x-4 mt-1">
            <div class="flex items-center space-x-1 text-gray-600">
              <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{{ reviewer.friendsCount }}</span>
            </div>
            <div class="flex items-center space-x-1 text-gray-600">
              <svg class="w-4 h-4 fill-white p-1 rounded-md bg-gray-400" viewBox="0 0 24 24">
                <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
              </svg>
              <span>{{ reviewer.reviewsCount }}</span>
            </div>
            <div class="flex items-center space-x-1 text-gray-600">
              <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>{{ reviewer.photosCount }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="relative inline-block text-left md:ml-auto">
        <button @click="toggleDropdown2(index)" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" id="options-menu" aria-haspopup="true" aria-expanded="true" >
          <svg class="h-5 w-5 text-gray-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </svg>
        </button>
        <div  v-if="dropdownStates[index]"  class="absolute mt-2 w-[150px] bg-white border border-gray-300  shadow-xl z-10 -translate-x-10">
        <ul>
          <li v-for="option in options" :key="option" @click="selectOptions( option,index)" class="px-6 py-2 text-gray-700  hover:bg-gray-100 cursor-pointer" >
            {{ option }}
          </li>
        </ul>
      </div>
        </div>

    </div>

    <div class="flex items-center gap-2 mt-4">
      <div class="flex items-center space-x-1">
        <span v-for="star in 5" :key="star" class="">
          <svg v-if="star <= reviewer.rating" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current text-white rounded-md bg-orange-500 p-1" viewBox="0 0 24 24">
            <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-white p-1 rounded-md bg-gray-400" viewBox="0 0 24 24">
            <path d="M12 2l2.58 7.95H22l-6.29 4.74 2.58 7.95-6.29-4.74-6.29 4.74 2.58-7.95L2 9.95h7.42L12 2z" />
          </svg>
        </span>
      </div>
      <span class="text-gray-600 text-sm">{{ reviewer.date }}</span>
    </div>
    <div class="flex flex-row my-2 gap-2 text-sm font-normal text-gray-600" v-if="reviewer.pictures.length>0">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
        <span> {{ reviewer.pictures.length }} photos</span>
    </div>

    <div class="mt-4">
      <p class="text-gray-800">{{ reviewer.comment }}</p>
    </div>
    <div class="flex flex-row gap-2 my-2">
    <div class="flex items-center gap-2 mt-4 w-full" v-for="item in reviewer.pictures" :key="item">
        <img :src="item.image" class="object-cover w-full h-36  rounded-lg"/>
    </div>
</div>

    <div class="flex items-center gap-8 mt-4">
        <button class="text-gray-500 text-sm font-normal " >
                <img src="@/assets/help.svg" class="rounded-full p-2 border border-gray-500 hover:bg-gray-200"/>
                {{$t('hepful')}}<span class="font-semibold"> 0</span>

        </button>
        <button class="text-gray-500 text-sm font-normal" >
            <img src="@/assets/thank.svg" class="rounded-full p-2 border border-gray-500 hover:bg-gray-200"/>
            {{$t('thanks')}} <span class="font-semibold"> 1</span>
        </button>
        <button class="text-gray-500 text-sm font-normal">
            <img src="@/assets/like.svg" class="rounded-full p-2 border border-gray-500 hover:bg-gray-200"/>
           {{$t('lovethis')}}<span class="font-semibold"> 2</span>
        </button>
        <button class="text-gray-500 text-sm font-normal">
            <img src="@/assets/ohno.svg" class="rounded-full p-2 border border-gray-500 hover:bg-gray-200"/>
            {{$t('ohno')}} <span class="font-semibold"> 0</span>
        </button>
    </div>
  </div>


</template>

<script setup>
import {ref,computed} from 'vue'
import { useI18n } from "vue-i18n";
import img from '@/assets/img.jpg';
import bgBus from '@/assets/bg-bus.jpg';
import tour from '@/assets/tour.jpg';

const { t } = useI18n();


const rating = ref(4)
const openDropdown = ref(null)
const selectedOption3 = ref('Filter by rating')
const selectedOption1 = ref('Tri Enjoy')
const selectedOption2 = ref('English(52)')
const options = computed(()=>[t('share_opinion'),t('integre_opinion')])
const options1 = computed(()=>[t('sort_Enjoy'), t('most_recent'), t('old_review'), t('positive_review'), t('negative_review'), t('review_elite')]);
const options2 = computed(()=>[t('English(52)'), t('German(42)'), t('Spanish(10)')]);
const options3 = computed(()=>[t('5stars'), t('4stars'), t('3stars'),t('2stars'),t('1star'),t('All_rating')]);



const toggleDropdown = (index) => {
  if (openDropdown.value === index) {
    openDropdown.value = null;
  } else {
    openDropdown.value = index;
  }
};

const selectOption = (index, option) => {
  if (index === 1) {
    selectedOption1.value = option;
  } else if (index === 2) {
    selectedOption2.value = option;
  }else if( index === 3 ){
    selectedOption3.value = option;
  }
  openDropdown.value = null;
}



const dropdownStates = ref([]);

const toggleDropdown2 = (index) => {
  if (dropdownStates.value[index] === undefined) {
    dropdownStates.value[index] = false;
  }
  dropdownStates.value[index] = !dropdownStates.value[index];
};

const selectOptions = (option, index) => {
  console.log(`Reviewer ${index + 1}: Selected option: ${option}`);
  dropdownStates.value[index] = false;
};

const reviewers = ref([
  {
    name: 'Marie Dupont',
    address: '123 rue des Champs-Élysées, 75008 Paris',
    date: '30 nov. 2024',
    friendsCount: '5',
    reviewsCount: '10',
    photosCount: '20',
    rating: 5,
    comment: "Séjour exceptionnel à l'Hôtel Le Paradis ! L'emplacement est idéal, en plein cœur de la ville. La chambre était spacieuse et très bien équipée, avec une vue magnifique sur la mer. Le personnel a été d'une grande gentillesse et disponible tout au long de mon séjour. Le petit-déjeuner, servi sous forme de buffet, était copieux et délicieux.",
    profilePicture: img,
    pictures:[
        { image: img },
        { image: bgBus },
        { image: tour },
    ]
  },
  {
    name: 'Jean Martin',
    address: '456 avenue des Lilas, 69000 Lyon',
    date: '28 nov. 2024',
    friendsCount: '12',
    reviewsCount: '15',
    photosCount: '30',
    rating: 4,
    comment: "L'Hôtel Le Paradis est un bon hôtel. La chambre était propre et confortable. Le personnel était serviable. Le petit-déjeuner était correct, mais j'aurais aimé plus de choix. L'emplacement est un peu bruyant, mais pratique pour visiter la ville.",
    profilePicture: img,
    pictures:[
        { image: img },
        { image: bgBus },
    ]
  },
  {
    name: 'Sophie Dubois',
    address: '789 boulevard des Roses, 31000 Toulouse',
    date: '25 nov. 2024',
    friendsCount: '8',
    reviewsCount: '8',
    photosCount: '15',
    rating: 3,
    comment: "Mon séjour à l'Hôtel Le Paradis a été mitigé. La chambre était petite et sombre. Le personnel était distant. Le petit-déjeuner était décevant. L'emplacement est bien situé, mais l'hôtel ne vaut pas son prix.",
    profilePicture: bgBus,
    pictures:[ ]
  },
  {
    name: 'Pierre Durand',
    address: '10 rue des Tulipes, 13000 Marseille',
    date: '20 nov. 2024',
    friendsCount: '20',
    reviewsCount: '25',
    photosCount: '40',
    rating: 5,
    comment: "J'ai passé un excellent séjour à l'Hôtel Le Paradis. La chambre était luxueuse et spacieuse, avec une vue imprenable sur la ville. Le personnel était aux petits soins. Le petit-déjeuner était un festin. L'emplacement est idéal pour découvrir la ville.",
    profilePicture: tour,
    pictures:[ ]
  },
]);



</script>
