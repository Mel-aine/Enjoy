<!-- <template>
 <div class="flex flex-col sm:flex-row lg:items-center items-start justify-center sm:gap-20 gap-3   p-8 max-w-screen ">
  <div class="mb-4 sm:mb-0">
    <span class=" text-md font-semibold text-black">{{$t('overall_rate')}}</span>
    <div class="flex items-center  my-2 sm:my-1 md:my-1 space-x-1 ">
        <span v-for="star in rating" :key="star" class=" ">
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

  <div class="w-full sm:w-2/3 ">
    <div class="flex flex-col space-y-4">

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


</template> -->

<!--
<script setup>
import {ref,computed} from 'vue'
import { useI18n } from "vue-i18n";
import burger1 from '@/assets/hotel/mont2.jpg';
import burger2 from '@/assets/hotel/mont1.jpg';
import burger4 from '@/assets/hotel/djeuga.jpg';
import profil1 from '@/assets/hotel/djeuga.jpg';
import profil2 from '@/assets/hotel/mont2.jpg';



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


defineProps({
  rating : Number
})
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
    comment: "Hôtel fantastique. Personnel fantastique. Mention spéciale à l'incroyable personnel de sécurité. Lors de notre séjour avec des invités de marque, nous avons pu nous déplacer facilement dans l'établissement. Un merci spécial à Ugur Aktepe pour son aide. Un bel exemple de sécurité avec grâce et professionnalisme !! Merci encore.",
    profilePicture: profil1,
    pictures:[
        { image: burger4 },
        { image: burger1 },
        { image: burger2 },
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
    comment: "Excellent emplacement, chambres magnifiquement conçues et l'hospitalité exceptionnelle qui fait la renommée . Fortement recommandé pour votre prochain séjour .",
    profilePicture: profil2,
    pictures:[
        { image: burger2 },
        { image: burger4 },
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
    comment: "J'ai passé un très bon séjour dans cet hôtel. Le service de chambre était très aimable et professionnel et j'ai trouvé l'emplacement idéal. La chambre était spacieuse et je n'ai eu aucun problème de bruit. J'ai hâte d'y retourner. Cordialement,",
    profilePicture: profil1,
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
    comment: "Toujours le meilleur service, la nourriture, les chambres. Du personnel d'accueil au concierge, c'est ma maison , je n'essaierai jamais autre chose.",
    profilePicture: profil2,
    pictures:[ ]
  },
]);



</script> -->
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50"
  >
    <!-- En-tête avec statistiques -->
    <div class="container mx-auto px-4 py-8">
      <!-- Titre principal -->
      <div class="text-center mb-12">
        <h1
          class="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
        >
          {{ $t('customer_review') }}
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          {{ $t('discovery_experiance') }}
        </p>
      </div>


  <div class="max-w-6xl mx-auto p-4 bg-white">

    <div class="mb-8">


      <!-- Statistiques globales -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Note moyenne -->
          <div class="text-center lg:text-left">
            <div class="flex items-center justify-center lg:justify-start mb-2">
              <span class="text-4xl font-bold text-gray-900 mr-2">{{ stats.averageRating }}</span>
              <div class="flex">
                <StarIcon v-for="i in 5" :key="i" class="w-6 h-6" :class="i <= Math.round(stats.averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'" />
              </div>
            </div>
            <p class="text-gray-600">Basé sur {{ stats.totalReviews }} avis</p>
          </div>

          <!-- Répartition des notes -->
          <div class="space-y-2">
            <div v-for="rating in [5,4,3,2,1]" :key="rating" class="flex items-center text-sm">
              <span class="w-8 font-medium">{{ rating }}</span>
              <StarIcon class="w-4 h-4 text-yellow-400 fill-current mx-1" />
              <div class="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                <div class="bg-yellow-400 h-2 rounded-full transition-all duration-500" :style="{ width: getRatingPercentage(rating) + '%' }"></div>
              </div>
              <span class="w-12 text-right text-gray-600">{{ getRatingPercentage(rating) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtres et tri -->
      <div class="flex flex-col sm:flex-row gap-4 mb-6">
        <select v-model="selectedFilter" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="tous">Tous les avis</option>
          <option value="5-etoiles">5 étoiles</option>
          <option value="4-etoiles">4 étoiles</option>
          <option value="3-moins">3 étoiles et moins</option>
          <option value="verifies">Avis vérifiés</option>
        </select>
        <select v-model="sortBy" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option value="recent">Plus récents</option>
          <option value="rating-high">Note décroissante</option>
          <option value="rating-low">Note croissante</option>
          <option value="helpful">Plus utiles</option>
        </select>
      </div>
    </div>

    <!-- Liste des avis -->
    <div class="space-y-6">
      <div v-for="(review, index) in filteredReviews" :key="review.id" class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300" :style="{ animationDelay: `${index * 100}ms` }">
        <div class="flex flex-col sm:flex-row sm:items-start gap-4">
          <!-- Avatar et infos utilisateur -->
          <div class="flex-shrink-0">
            <div class="flex items-center gap-3">
              <img :src="review.avatar" :alt="review.author" class="w-12 h-12 rounded-full object-cover" />
              <div class="sm:hidden">
                <div class="flex items-center gap-2">
                  <h4 class="font-semibold text-gray-900">{{ review.author }}</h4>
                  <CheckCircleIcon v-if="review.verified" class="w-4 h-4 text-green-500" />
                </div>
                <p class="text-sm text-gray-500">{{ review.location }}</p>
              </div>
            </div>
          </div>

          <!-- Contenu de l'avis -->
          <div class="flex-1">
            <div class="hidden sm:flex items-center justify-between mb-3">
              <div class="flex items-center gap-2">
                <h4 class="font-semibold text-gray-900">{{ review.author }}</h4>
                <CheckCircleIcon v-if="review.verified" class="w-4 h-4 text-green-500" />
                <span class="text-sm text-gray-500">• {{ review.location }}</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <CalendarIcon class="w-4 h-4" />
                {{ review.date }}
              </div>
            </div>

            <div class="mb-3">
              <div class="flex items-center gap-2 mb-2">
                <div class="flex">
                  <StarIcon v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'" />
                </div>
                <span class="text-sm font-medium text-gray-700">{{ review.rating }}/5</span>
                <div class="sm:hidden flex items-center gap-1 text-sm text-gray-500 ml-auto">
                  <CalendarIcon class="w-4 h-4" />
                  {{ review.date }}
                </div>
              </div>
              <h3 class="font-semibold text-lg text-gray-900">{{ review.title }}</h3>
            </div>

            <p class="text-gray-700 leading-relaxed mb-4">{{ review.content }}</p>

            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <button class="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                <ThumbsUpIcon class="w-4 h-4" />
                Utile ({{ review.helpful }})
              </button>
              <span v-if="review.verified" class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Séjour vérifié</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Voir plus -->
    <div class="text-center mt-8">
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
        {{ $t('see_more_review') }}
      </button>
    </div>
  </div>
</div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Star as StarIcon, ThumbsUp as ThumbsUpIcon, Calendar as CalendarIcon, CheckCircle as CheckCircleIcon } from 'lucide-vue-next'

const selectedFilter = ref('tous')
const sortBy = ref('recent')

const stats = {
  totalReviews: 847,
  averageRating: 4.3,
  ratings: {
    5: 425,
    4: 238,
    3: 134,
    2: 35,
    1: 15
  }
}

const reviews = [
  {
    id: 1,
    author: "Marie Dubois",
    rating: 5,
    date: "15 Mai 2024",
    title: "Séjour exceptionnel !",
    content: "Un hôtel magnifique avec un service impeccable...",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1a0?w=150&h=150&fit=crop&crop=face",
    verified: true,
    helpful: 24,
    location: "Paris, France"
  },
  {
    id: 2,
    author: "Jean-Pierre Martin",
    rating: 4,
    date: "08 Mai 2024",
    title: "Très bon séjour",
    content: "Hôtel bien situé avec un excellent rapport qualité-prix...",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    verified: true,
    helpful: 18,
    location: "Lyon, France"
  },
  {
    id: 3,
    author: "Sophie Chen",
    rating: 5,
    date: "02 Mai 2024",
    title: "Parfait pour un weekend romantique",
    content: "Nous avons passé un weekend merveilleux...",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: false,
    helpful: 31,
    location: "Marseille, France"
  },
  {
    id: 4,
    author: "Thomas Weber",
    rating: 3,
    date: "28 Avril 2024",
    title: "Correct mais sans plus",
    content: "L'hôtel est correct pour le prix payé...",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true,
    helpful: 12,
    location: "Berlin, Allemagne"
  },
  {
    id: 5,
    author: "Isabella Rodriguez",
    rating: 5,
    date: "22 Avril 2024",
    title: "Une expérience inoubliable",
    content: "Tout était parfait du début à la fin !...",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    verified: true,
    helpful: 27,
    location: "Madrid, Espagne"
  }
]

const getRatingPercentage = (rating) => {
  return ((stats.ratings[rating] / stats.totalReviews) * 100).toFixed(0)
}

const filteredReviews = computed(() => {
  return reviews.filter((review) => {
    if (selectedFilter.value === 'tous') return true
    if (selectedFilter.value === '5-etoiles') return review.rating === 5
    if (selectedFilter.value === '4-etoiles') return review.rating === 4
    if (selectedFilter.value === '3-moins') return review.rating <= 3
    if (selectedFilter.value === 'verifies') return review.verified
    return true
  })
})
</script>

<style scoped>
/* Optional animation delay */
</style>




      <!-- Section statistiques globales -->
      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 mx-32 px-8">

        <div
          class="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                {{ $t("overall_rate") || "Note Globale" }}
              </h3>
              <div class="flex items-center mb-4">
                <div class="flex space-x-1 mr-4">
                  <div
                    v-for="star in 5"
                    :key="`global-${star}`"
                    class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                    :class="
                      star <= globalRating
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg'
                        : 'bg-gray-200'
                    "
                  >
                    <svg
                      class="w-5 h-5"
                      :class="
                        star <= globalRating ? 'text-white' : 'text-gray-400'
                      "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                </div>
                <span class="text-4xl font-bold text-gray-900">{{
                  globalRating.toFixed(1)
                }}</span>
              </div>
              <p class="text-gray-600 text-lg">
                {{ totalReviews.toLocaleString() }} {{ $t("review") || "avis" }}
              </p>
            </div>
            <div
              class="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center"
            >
              <span class="text-white text-3xl font-bold">{{
                globalRating.toFixed(1)
              }}</span>
            </div>
          </div>
        </div>


        <div
          class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500"
        >
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Distribution des Notes
          </h3>
          <div class="space-y-4">
            <div
              v-for="(distribution, index) in ratingDistribution"
              :key="`dist-${index}`"
              class="group flex items-center space-x-4"
            >
              <span class="text-sm font-semibold text-gray-700 w-12"
                >{{ 5 - index }} ⭐</span
              >
              <div class="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 ease-out"
                  :class="
                    5 - index >= 4
                      ? 'bg-gradient-to-r from-green-400 to-green-500'
                      : 5 - index >= 3
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                      : 'bg-gradient-to-r from-orange-400 to-red-500'
                  "
                  :style="{ width: distribution + '%' }"
                ></div>
              </div>
              <span class="text-sm font-medium text-gray-600 w-12"
                >{{ distribution }}%</span
              >
            </div>
          </div>
        </div>
      </div>


      <div
        class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-8 mx-32 px-8"
      >
        <div
          class="flex flex-col lg:flex-row gap-4 items-center justify-between"
        >




          <div class="flex flex-wrap gap-3">

              <select
                v-model="selectedRating"
                class="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              >
                <option v-for="option in ratingOptions" :key="option">
                  {{ option }}
                </option>
              </select>

              <select
                v-model="selectedLanguage"
                class="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              >
                <option v-for="option in languageOptions" :key="option">
                  {{ option }}
                </option>
              </select>

              <select
                v-model="selectedSort"
                class="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              >
                <option v-for="option in sortOptions" :key="option">
                  {{ option }}
                </option>
              </select>
          </div>

          <div class="relative w-full lg:w-80">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher dans les avis..."
              class="w-full px-4 py-3 pl-12 bg-white rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 outline-none transition-all duration-200"
            />
            <svg
              class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

        <div class="max-w-4xl mx-auto">


          <div class="space-y-8">
            <article
              v-for="(review) in filteredReviews"
              :key="review.id"
              class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <div class="flex items-center gap-4 mb-4">
                <img
                  :src="review.avatar"
                  alt="Avatar de {{ review.name }}"
                  class="w-14 h-14 rounded-full object-cover border-2 border-gradient-to-r from-purple-500 to-pink-500"
                />
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-gray-900">
                    {{ review.name }}
                  </h3>
                  <p class="text-sm text-gray-500">{{ review.location }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <StarRating :rating="review.rating" />
                  <span class="text-gray-600 text-sm">{{ review.date }}</span>
                </div>
              </div>

              <p class="text-gray-700 mb-4">{{ review.comment }}</p>


              <div
                v-if="review.photos.length"
                class="flex space-x-4 overflow-x-auto mb-4"
              >
                <img
                  v-for="(photo, idx) in review.photos"
                  :key="idx"
                  :src="photo"
                  alt="Photo avis"
                  class="w-32 h-20 rounded-lg object-cover flex-shrink-0"
                />
              </div>


              <div class="flex gap-6 text-gray-600 text-sm">
                <div class="flex items-center space-x-1">
                  <svg
                    class="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 10c0-1.105.895-2 2-2h2v8h2v-8h2l3 3V6l-3-3H6a4 4 0 00-4 4v3z"
                    />
                  </svg>
                  <span>{{ review.reactions.helpful }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <svg
                    class="w-5 h-5 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                  <span>{{ review.reactions.love }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <svg
                    class="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 2a6 6 0 016 6v2a6 6 0 11-12 0V8a6 6 0 016-6z"
                    />
                  </svg>
                  <span>{{ review.reactions.thanks }}</span>
                </div>
                <div class="flex items-center space-x-1">
                  <svg
                    class="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M6 6l8 8M6 14L14 6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>{{ review.reactions.ohno }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>


      <div class="flex justify-center my-12">
        <div class="flex items-center space-x-2">
          <button
            class="px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
          >
            Précédent
          </button>
          <button
            v-for="page in [1, 2, 3, 4, 5]"
            :key="page"
            class="w-10 h-10 rounded-xl flex items-center justify-center font-medium transition-all duration-200"
            :class="
              page === 1
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
            "
          >
            {{ page }}
          </button>
          <button
            class="px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
          >
            Suivant
          </button>
        </div>
      </div> -->
    <!-- </div>

</template>
<script setup>
import { ref, computed } from "vue";



// Filtres sélectionnés
const selectedSort = ref("Plus récents");
const selectedLanguage = ref("Toutes langues");
const selectedRating = ref("Toutes notes");
const searchQuery = ref("");

// Options des filtres
const sortOptions = [
  "Plus récents",
  "Plus anciens",
  "Note croissante",
  "Note décroissante",
  "Plus utiles",
];
const languageOptions = [
  "Toutes langues",
  "Français (156)",
  "Anglais (89)",
  "Espagnol (23)",
  "Allemand (15)",
];
const ratingOptions = [
  "Toutes notes",
  "5 étoiles",
  "4 étoiles",
  "3 étoiles",
  "2 étoiles",
  "1 étoile",
];

// Statistiques globales
const globalRating = 4.6;
const totalReviews = 1847;
const ratingDistribution = [85, 70, 30, 10, 5];

// Données des avis
const reviews = ref([
  {
    id: 1,
    name: "Marie Dubois",
    location: "Paris, France",
    date: "Il y a 2 jours",
    rating: 5,
    verified: true,
    elite: true,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    stats: { reviews: 127, photos: 89, friends: 245 },
    comment:
      "Expérience absolument fantastique ! L'attention aux détails était remarquable et le service client exceptionnel. Je recommande vivement cette entreprise à tous ceux qui recherchent la qualité et le professionnalisme.",
    photos: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1586861635167-e5223aaad4e4?w=300&h=200&fit=crop",
    ],
    reactions: { helpful: 24, love: 18, thanks: 12, ohno: 2 },
  },
  {
    id: 2,
    name: "Jean Martin",
    location: "Lyon, France",
    date: "Il y a 5 jours",
    rating: 4,
    verified: true,
    elite: false,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stats: { reviews: 45, photos: 23, friends: 89 },
    comment:
      "Très bonne expérience dans l'ensemble. Le produit correspondait parfaitement à mes attentes et la livraison a été rapide. Seul petit bémol, le packaging pourrait être amélioré pour une meilleure protection.",
    photos: [
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    ],
    reactions: { helpful: 15, love: 8, thanks: 6, ohno: 1 },
  },
  {
    id: 3,
    name: "Sophie Laurent",
    location: "Marseille, France",
    date: "Il y a 1 semaine",
    rating: 5,
    verified: true,
    elite: false,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    stats: { reviews: 78, photos: 34, friends: 156 },
    comment:
      "Service impeccable et résultats au-delà de mes espérances. L'équipe est très professionnelle et à l'écoute. Je n'hésiterai pas à faire appel à eux de nouveau.",
    photos: [],
    reactions: { helpful: 19, love: 14, thanks: 9, ohno: 1 },
  },
  {
    id: 4,
    name: "Pierre Moreau",
    location: "Toulouse, France",
    date: "Il y a 2 semaines",
    rating: 3,
    verified: false,
    elite: false,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    stats: { reviews: 23, photos: 12, friends: 67 },
    comment:
      "Expérience correcte mais sans plus. Le service était acceptable mais j'ai eu quelques problèmes de communication. Il y a de la place pour l'amélioration.",
    photos: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop",
    ],
    reactions: { helpful: 8, love: 3, thanks: 2, ohno: 5 },
  },
]);

// // Fonction pour basculer les dropdowns
// const toggleReviewDropdown = (index) => {
//   reviewDropdownStates.value[index] = !reviewDropdownStates.value[index];
// };

// Avis filtrés
const filteredReviews = computed(() => {
  let filtered = [...reviews.value];

  // Filtrage par recherche
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (review) =>
        review.comment.toLowerCase().includes(query) ||
        review.name.toLowerCase().includes(query)
    );
  }

  // Filtrage par note
  if (selectedRating.value !== "Toutes notes") {
    const rating = parseInt(selectedRating.value.charAt(0));
    filtered = filtered.filter((review) => review.rating === rating);
  }

  // Tri
  switch (selectedSort.value) {
    case "Plus anciens":
      filtered.reverse();
      break;
    case "Note croissante":
      filtered.sort((a, b) => a.rating - b.rating);
      break;
    case "Note décroissante":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "Plus utiles":
      filtered.sort((a, b) => b.reactions.helpful - a.reactions.helpful);
      break;
    default:
      break;
  }

  return filtered;
});
</script> -->
