<template>
<div class="w-[400px] h-[230px] sm:w-[740px] sm:h-[170px]  p-2 sm:p-3  bg-white border border-gray-200 rounded-lg shadow-xl dark:border-gray-700">
    <div class=" text-sm font-bold tracking-tight text-gray-900 dark:text-white justify-between flex">
        <span class="bg-purple-100 rounded-full px-2 py-1">nom du bus</span>
        <span class="bg-orange-100 rounded-full px-2 py-1 ">{{ classe }}</span>
    </div>


    <div class="flex  flex-col md:flex-row items-center sm:gap-24 sm:space-x-24 ">
        <div class="mb-1 font-meduim text-gray-900 dark:text-gray-400 flex items-center w-full relative">
            <div class="inline-flex items-center justify-center w-full relative">
                <hr class="w-80 h-px mx-14 my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute px-3 font-normal text-gray-400 bg-white left-1/2 transform -translate-x-1/2 dark:text-white dark:bg-gray-900">
                   {{ travelTime }}h
                </span>

            </div>

            <div class="absolute left-0 mt-5">{{ departureTime }} <div class="text-md text-gray-600 font-normal">{{ departureBus }}</div></div>
            <div class="absolute right-0 mt-5">{{ arrivalTime }}  <div class="text-md text-gray-600 truncate w-12 font-normal">{{ arrivalBus }}</div></div>
        </div>
        <div class="text-md font-semibold text-gray-900 flex justify-between items-start w-full mt-1 md:mt-0">
        <span class="w-12 text-center overflow-hidden text-ellipsis whitespace-nowrap">{{ price }}</span>
        <span>FCFA</span>
    </div>
    </div>
    <div class="flex justify-between items-center translate-y-3 ">
      <div class="flex md:flex-row flex-col space-x-2">
        <button class="border rounded-full h-8 w-34 inline-flex items-center px-2 gap-2 border-gray-300 text-xs justify-start text-gray-800 hover:bg-gray-200 cursor-pointer">
           {{ nbre }} Correspondance
            <svg class="h-4 w-4 text-slate-500 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </button>

        <button class=" flex flex-row mt-1 sm:mt-0" @mouseover="showTooltip" @mouseleave="hideTooltip">
         <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <g transform="rotate(-45 12 18)">  <line x1="12" y1="18" x2="12.01" y2="18" />  <path d="M12 14a4 4 0 0 1 4 4" />  <path d="M12 10a8 8 0 0 1 8 8" />  <path d="M12 6a12 12 0 0 1 12 12" />  </g></svg>
         <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6" />  <line x1="9" y1="3" x2="9" y2="7" />  <line x1="15" y1="3" x2="15" y2="7" />  <path d="M12 16v2a2 2 0 0 0 2 2h3" /></svg>
        </button>
        <div v-show="tooltip" class="absolute bottom items-center mb-2 left-1/2 transform -translate-x-44 z-10 inline-block px-3 py-2 text-md font-normal text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xs tooltip">
          <div class="flex flex-row space-x-3">
            <div class="flex flex-row space-x-1">
              <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <g transform="rotate(-45 12 18)">  <line x1="12" y1="18" x2="12.01" y2="18" />  <path d="M12 14a4 4 0 0 1 4 4" />  <path d="M12 10a8 8 0 0 1 8 8" />  <path d="M12 6a12 12 0 0 1 12 12" />  </g></svg>
               <p>Wi-Fi gratuit</p>
            </div>
            <div class="flex flex-row space-x-1">
              <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6" />  <line x1="9" y1="3" x2="9" y2="7" />  <line x1="15" y1="3" x2="15" y2="7" />  <path d="M12 16v2a2 2 0 0 0 2 2h3" /></svg>
              <p>Prises Electriques</p>
            </div>
          </div>
        </div>
        <div class="border-l border-gray-700 px-2 flex-row flex">
          <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="5" r="2" />  <path d="M5 22v-5l-1-1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />  <circle cx="17" cy="5" r="2" />  <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" /></svg>
          <span class="px-2 text-md font-normal text-gray-600"> Presque Complet</span>
        </div>
      </div>

      <div class="flex flex-col items-end">

          <button @click="handleClick" class="inline-flex items-center px-3 py-2 gap-3 text-md font-normal text-center text-gray-800 bg-purple-300 rounded-lg hover:bg-purple-500">
            <!-- Spinner <div role="status">
              <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div> -->
            Continuer
              <svg class="h-6 w-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6" />
              </svg>
          </button>
      </div>
    </div>

    </div>

  </template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();


const tooltip = ref(false);

const showTooltip = () => {
  tooltip.value = true;
};

const hideTooltip = () => {
  tooltip.value = false;
};


const goToAnotherPage = () => {
  router.push('/checkout');
};
defineProps({
  travelTime : String,
  nbre : Number,
  departureTime : String,
  arrivalTime : String,
  departureBus : String,
  arrivalBus : String,
  price : Number,
  classe : String,

})

const emit = defineEmits(['click'])
const handleClick = () => {
    emit('click');
};

</script>

<style scoped>
.tooltip {
  transition: opacity 0.2s ease-in-out;
}
</style>
