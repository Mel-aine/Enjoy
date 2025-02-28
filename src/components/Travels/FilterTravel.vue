<template>
  <div class="flex flex-col items-center">
        <!-- date -->
  <div class="inline-flex rounded-md shadow-xs pb-5 ">
    <button v-for="(date, index) in dateOptions" :key="index"
       :class="[
         'sm:px-20 py-3 text-md px-10 font-normal  ',
         index === 0 ? 'text-gray-400 bg-white border border-gray-200 rounded-s-lg' :
         index === dateOptions.length - 1 ? 'text-gray-900 bg-white border border-gray-200 rounded-e-lg' :
         'text-gray-900 bg-white border-t border-b border-gray-200',
         'hover:bg-gray-300 focus:z-10 focus:ring-2 focus:ring-purple-500 focus:text-purple-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-purple-500 dark:focus:text-white'
       ]">
      {{ date }}
    </button>
  </div>
<!-- Bouton de filtre -->
<div class="flex items-center justify-between gap-4 space-x-1 flex-col md:flex-row sm:gap-40">
  <div class="border rounded-full h-8 w-32 pl-2 space-x-1 border-gray-300 flex items-center justify-start text-gray-800 hover:bg-gray-200 cursor-pointer">
    <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="14" cy="6" r="2" />  <line x1="4" y1="6" x2="12" y2="6" />  <line x1="16" y1="6" x2="20" y2="6" />  <circle cx="8" cy="12" r="2" />  <line x1="4" y1="12" x2="6" y2="12" />  <line x1="10" y1="12" x2="20" y2="12" />  <circle cx="17" cy="18" r="2" />  <line x1="4" y1="18" x2="15" y2="18" />  <line x1="19" y1="18" x2="20" y2="18" /></svg>
    <span class=" text-gray-900 text-lg font-semibold ">{{$t('filters')}}</span>
  </div>
  <div class="flex items-center hover:bg-gray-200 rounded-md p-1 ">
    <input type="checkbox" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm">
    <label class="ml-2 text-md font-normal text-gray-700">{{ $t('direct_only') }}</label>
  </div>
  <div class="text-md font-normal text-gray-700 flex justify-between item-start ">
    <span class="w-12 text-center overflow-hidden text-ellipsis whitespace-nowrap">10</span>
     {{$t('resultat')}}
  </div>
</div>

            <!-- alert -->
<div class="pt-5">
  <div class="rounded-md border border-blue-400 sm:p-7 sm:py-3 p-2 py-1 bg-blue-100">
    <div class="flex items-start justify-between space-x-28 ">
      <div class="flex items-center">
        <!-- Icône SVG pivotée -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-400 mr-3 mt-1 transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"/>
        </svg>
        <p class="text-xs text-gray-700 sm:text-lg">{{ $t('phrase') }}.</p>
      </div>
      <div>
        <span class="sm:text-xl font-semibold text-gray-950 text-sm">1000 FCFA</span>
      </div>
    </div>
  </div>
</div>

            <!-- navigation -->
<div class="flex flex-col gap-2 items-center justify-center py-5">
  <div v-for="item in busInformation " :key="item.classe">
    <CardView
    :classe="item.classe"
    :nbre="item.correspondances"
    :price="item.prix"
    :departureTime="item.horaires_de_depart"
    :arrivalTime="item.heure_darrivee"
    :travelTime ="item.duree_du_trajet"
    :departureBus ="item.bus_depart"
    :arrivalBus="item.bus_arrivee"
    @click="handle"
    />
  </div>

</div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import CardView from './CardView.vue';
import { useRouter } from 'vue-router';
import { useI18n } from "vue-i18n";
const { t } = useI18n();


const router = useRouter();

// Fonction pour formater la date au format "dim, 23 févr."
const formatDate = (date) => {
  return date.toLocaleDateString('fr-FR', {
    weekday: 'short',  // "dim"
    day: '2-digit',    // "23"
    month: 'short',    // "févr."
  });
};

// Calcul des dates dynamiques
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

// Tableau contenant les dates d'hier, aujourd'hui et demain
const dateOptions = ref([
  formatDate(yesterday),
  formatDate(today),
  formatDate(tomorrow),
]);

const busInformation = ref([
  {
    bus_depart: "Yaoundé ",
    bus_arrivee: "Douala" ,
    horaires_de_depart: "04h30",
    duree_du_trajet: "5",
    heure_darrivee: " 9h30 ",
    prix: 6000 ,
    correspondances: 0,
    duree_des_correspondances: "N/A",
    classe : "Classe VIP"
  },
  {
    bus_depart: "Yaoundé ",
    bus_arrivee: "Douala" ,
    horaires_de_depart: "06h",
    duree_du_trajet: "5",
    heure_darrivee: "11h",
    prix: 3500,
    correspondances: 0,
    duree_des_correspondances: "N/A",
    classe : "Classe Standard"
  },
  {
    bus_depart: "Yaoundé ",
    bus_arrivee: "Douala" ,
    horaires_de_depart: "10h",
    duree_du_trajet: "5 ",
    heure_darrivee: "15h",
    prix: 6000,
    correspondances: 0,
    duree_des_correspondances: "N/A",
    classe : "Classe Premium"
  }
]);

const handle = () =>{

  router.push('/checkout');

  console.log('clicked');
}
</script>
