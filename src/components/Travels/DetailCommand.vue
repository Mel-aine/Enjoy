<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();


const totalTime = 600; // 10 minutes (600 secondes)
const time = ref(totalTime);
const isCancelled = ref(false);
let timer = null;

// Formater le temps en mm:ss
const formattedTime = computed(() => {
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});

// Calculer la progression en pourcentage (0 à 100)
const progress = computed(() => (time.value / totalTime) * 100);

// Calculer la circonférence du cercle SVG (progression visuelle)
const circleRadius = 8;  // Le rayon du cercle est de 12
const circumference = 2 * Math.PI * circleRadius;  // Circonférence du cercle

// Calculer le décalage pour le cercle de progression (ajustement dynamique)
const progressOffset = computed(() => {
  return circumference * (1 - progress.value / 100);
});

const color = computed(() => {
  if (time.value > totalTime * 0.5) {  // Si plus de 50% du temps restant
    return "green";
  } else {
    return "red";
  }

})

const startTimer = () => {
  timer = setInterval(() => {
    if (time.value > 0) {
      time.value--;
    } else {
      stopTimer();
      isCancelled.value = true; // Annuler la commande
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
};

// const resetTimer = () => {
//   stopTimer();
//   time.value = totalTime;
//   isCancelled.value = false;
//   startTimer();
// };

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <div class="">
    <div class="flex flex-col items-start justify-center p-1 space-y-1 mb-4">
    <div class="flex justify-between items-center w-full max-w-sm space-x-14">
      <h1 class="text-xl font-semibold text-gray-950">{{ $t('your_order') }}</h1>
      <div class="flex items-center  bg-white border border-gray-300 rounded-lg px-1 shadow-lg">
        <!-- Cercle de progression -->
        <div class="relative w-10 h-10">
          <svg class="w-full h-full transform -rotate-90 ">
            <!-- Cercle de fond -->
            <circle cx="50%" cy="50%" r="8" stroke="lightgray" stroke-width="4" fill="none"/>
            <!-- Cercle de progression -->
            <circle cx="50%" cy="50%" r="8" :stroke="color" stroke-width="4" fill="none" stroke-dasharray="50.24" :stroke-dashoffset="progressOffset" stroke-linecap="round" class="transition-all duration-1000 ease-linear " />
          </svg>
        </div>
        <!-- Temps restant -->
        <div class="text-xl font-bold text-gray-700">
          {{ formattedTime }}
        </div>
      </div>
    </div>
  </div>
<div class="w-full max-w-sm px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:border-gray-700 ">
  <div class="flex flex-row space-x-2 items-center mb-2">
    <span>mer.26 fevr. </span>
    <svg class="h-4 w-4 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="13" y1="18" x2="19" y2="12" />  <line x1="13" y1="6" x2="19" y2="12" /></svg>
    <span>jeudi.27 fevr</span>
  </div>
  <div class=" text-sm font-bold tracking-tight text-gray-900 dark:text-white">
        <span class="bg-purple-100 rounded-full px-2 py-1">nom du bus</span>
  </div>
  <div class="flex items-center justify-between mx-8 mt-2 ">
    <div class="flex items-center gap-10 ">
      <span class="text-gray-400 text-ellipsis font-normal text-lg">berlin</span>
      <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="18" y2="6.01" />  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />  <line x1="9" y1="4" x2="9" y2="17" />  <line x1="15" y1="15" x2="15" y2="20" /></svg>
    </div>
    <span>12:00</span>
  </div>
 <div class="flex items-center justify-between mx-8  ">
    <div class="flex items-center gap-10 ">
      <span class="text-gray-400 text-ellipsis font-normal text-lg">berlin</span>
      <svg class="h-6 w-6 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="18" y2="6.01" />  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />  <line x1="9" y1="4" x2="9" y2="17" />  <line x1="15" y1="15" x2="15" y2="20" /></svg>
    </div>
    <span>12:00</span>
  </div>
  <div class="mt-2">
    <span class="text-bold text-lg text-ellipsis text-purple-500">{{$t('direct')}}</span>
  </div>


</div>

<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 mt-4">
<div class="flex justify-between ">
  <span>TOTAL</span>
  <span class="text-lg font-bold text-gray-900 dark:text-white"> totalPrice  FCFA</span>

</div>

</div>
<button class="w-full max-w-sm rounded-lg bg-purple-400 items-center p-2 mt-4" >{{ $t('valider') }}</button>
</div>

</template>
