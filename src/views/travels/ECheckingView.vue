<template>
<div>
  <div class="flex flex-col  md:flex-row  justify-center gap-4">
    <div class="min-h-screen flex flex-col  p-4">
      <button @click="back" class="flex flex-row items-center mb-2 hover:bg-gray-100 px-1 py-1 w-[100px] rounded-lg">
        <svg class="h-6 w-6 text-slate-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span class="text-lg font-semibold">{{ $t('retour')}}</span>
      </button>

    <div class="w-full md:w-[650px] sm:w[650px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 mb-4">
        <div class="mb-4">
          <span class="font-bold text-xl"><span class="rounded-md bg-purple-100 px-2">1</span> {{$t('passenger')}}</span>
        </div>
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div class="mb-4">
          <label for="prenom" class="block font-normal text-ellipsis text-gray-500">{{$t('first_name')}}</label>
          <input type="text" id="prenom" class="mt-1 block w-full p-2 border hover:bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" :placeholder="$t('entrez_votre_prenom')" />
        </div>

        <div>
          <label for="nom" class="block  font-normal text-ellipsis text-gray-500">{{$t('name')}}</label>
          <input type="text" id="nom" class="mt-1 block w-full p-2 border hover:bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" :placeholder="$t('entrez_votre_nom')" />
        </div>
      </div>
    </div>

    <div class="w-full md:w-[650px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 mb-4">
        <div class="mb-4">
          <span class="font-bold text-xl"><span class="rounded-md bg-purple-100 px-2">2</span> {{$t('reservation_siege')}}</span>
        </div>
        <div class="flex flex-col gap-4 items-center">
          <div class="w-full max-w-2xl p-6 bg-white border border-gray-200 rounded-lg flex justify-between items-center shadow-md dark:border-gray-700">
            <div class="flex items-center gap-2">
              <div class="relative">
              <div class="grid grid-cols-2 gap-1 ">
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>

                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>
              </div>
              <div class="absolute inset-0 p-14  " v-if=" reservedSeats.length > 0">
                <svg viewBox="0 0 50 50" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="10" ry="10" fill="green"/>
                  <polyline points="12,25 20,35 38,15" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              </div>
              <div v-if=" reservedSeats.length == 0">
                <h1 class="text-lg font-semibold">{{$t('choisir_siege')}}</h1>
                <span class="text-gray-500">{{$t('from')}} 1000 FCFA</span>
              </div>
              <div v-else>
                <h1 class="text-lg font-semibold">{{$t('siege_reserve')}}</h1>
                <p class="text-gray-500 font-light ">{{$t('nbre_siege')}} : <span class="text-gray-600 font-bold">{{ reservedSeats.length }}</span> </p>
                <p class="text-gray-500 font-thin ">{{$t('siege_select')}}:  <span class="text-gray-600 font-bold">{{ reservedSeats.map(seat => seat.number).join(', ') }}</span></p>
              </div>
            </div>
            <div>
              <button @click="openSidebar">
                <svg class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="w-full max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-md flex justify-between items-center dark:border-gray-700">
            <div class="flex items-center gap-2">
              <!-- SVG représentant plusieurs sièges de bus -->
              <div class="grid grid-cols-2 gap-1">
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>
                <svg viewBox="0 0 50 50" width="40" height="40">
                  <!-- Forme du siège -->
                  <rect x="5" y="10" width="40" height="25" rx="10" ry="10" stroke="grey" stroke-width="2.5" fill="none" />
                  <rect x="10" y="35" width="30" height="10" rx="5" ry="5" stroke="grey" stroke-width="2.5" fill="none" />
                </svg>

              </div>
              <div>
                <h1 class="text-lg font-semibold">{{$t('voyager_sans')}}</h1>
                <span class="text-gray-500">{{$t('from')}} 1000 FCFA</span>
              </div>
            </div>
            <div>
              <button @click="openSidebar">
                <svg class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>

    <div class="w-full md:w-[650px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 mb-4">
        <div class="mb-4">
          <span class="font-bold text-xl"><span class="rounded-md bg-purple-100 px-2">3</span> Contact</span>
        </div>
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div class="mb-4">
          <label for="email" class="block font-normal text-ellipsis text-gray-500">{{$t('email')}}</label>
          <input type="email" id="email" class="mt-1 block w-full p-2 border hover:bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" :placeholder="$t('entrez_votre_email', 'Entrez votre email')" />
        </div>

        <div>
          <label for="numero" class="block  font-normal text-ellipsis text-gray-500">{{$t('phone')}} ({{$t('facultatif')}})</label>
          <input type="phone" id="numero" class="mt-1 block w-full p-2 border hover:bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" :placeholder="$t('entrez_votre_numero_de_telephone')" />
        </div>
      </div>
    </div>
    <div class="w-full md:w-[650px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 mb-4">
    <div class="mb-4">
      <span class="font-bold text-xl">
        <span class="rounded-md bg-purple-100 px-2">4</span> {{$t('payment')}}
      </span>
    </div>
    <div class="space-y-4 ">
      <ul class="w-full max-w-3xl  bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white items-center">
      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
              <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-purple-400 bg-gray-100 border-gray-300   dark:bg-gray-600 dark:border-gray-500">
              <label for="list-radio-license" class="w-full py-3 ms-2 font-normal text-ellipsis text-gray-500 dark:text-gray-300"> Small Pay </label>
          </div>
      </li>
      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
              <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-purple-400 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500">
              <label for="list-radio-id" class="w-full py-3 ms-2 font-normal text-ellipsis text-gray-500 dark:text-gray-300">Orange Money</label>
          </div>
      </li>
      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
              <input id="list-radio-military" type="radio" value="" name="list-radio" class="w-4 h-4 text-purple-500 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500">
              <label for="list-radio-military" class="w-full py-3 ms-2 font-normal text-ellipsis text-gray-500 dark:text-gray-300">MTN Money</label>
          </div>
      </li>
      <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
              <input id="list-radio-military" type="radio" value="" name="list-radio" class="w-4 h-4 text-purple-500 bg-gray-100 border-gray-300  dark:bg-gray-600 dark:border-gray-500">
              <label for="list-radio-military" class="w-full py-3 ms-2 font-normal text-ellipsis text-gray-500 dark:text-gray-300">{{$t('card')}}</label>
          </div>
      </li>
  </ul>
    </div>
  </div>


    </div>
    <div class="mt-10 px-8">
      <DetailCommand/>
    </div>
    <!-- Sidebar -->
      <SeatReservation :isSidebarOpen="isSidebarOpen" @close="closeSidebar" @update:selectedSeats="handleSeatUpdate" />
      
  </div>
  <footer class="bg-white text-gray-800 p-4 text-center ">
        <img
          src="@/assets/voy.png"
          alt="Logo Flixbus"
          class="mx-auto mb-2 w-full h-[300px]"
        />
      </footer>
</div>
</template>
<script setup>
import DetailCommand from '../../components/Travels/DetailCommand.vue';
import SeatReservation from '../../components/Travels/SeatReservation.vue';
import {ref} from 'vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n();


const isSidebarOpen = ref(false);
const reservedSeats = ref([]);
const openSidebar = () => {
  isSidebarOpen.value = true;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;

};

const back = () =>{
  window.history.back();
}



const handleSeatUpdate = (seats) => {
    reservedSeats.value = seats;
    console.log("Sièges réservés mis à jour :", reservedSeats.value);
};

</script>
<style scoped >


</style>

