<script setup>
import { CheckIcon } from 'lucide-vue-next';

const props = defineProps({
  steps: Array,
  currentStep: Number
});

// Fonction pour obtenir la classe d'une étape
const getStepClass = (index) => {
  if (index < props.currentStep) return 'bg-green-500 text-white';
  if (index === props.currentStep) return 'bg-customBlue text-white';
  return 'bg-gray-300 text-gray-500';
};

// Fonction pour obtenir la classe de la ligne
const getLineClass = (index) => {
  return index < props.currentStep ? 'bg-green-500' : 'dashed-line bg-gray-300';
};

const getCurrentColor = (index) => {
  if (index < props.currentStep) return 'text-green-500';
  if (index === props.currentStep) return 'text-customBlue';
  return 'text-gray-500';
};
</script>

<template>
  <div class="flex items-center mb-10">
    <template v-for="(step, index) in steps" :key="index">
      <!-- Étape -->
      <div class="flex items-center">
        <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="getStepClass(index)">
          <CheckIcon v-if="index < currentStep" size="16" class="text-white" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div class="ml-2 font-medium" :class="getCurrentColor(index)">
          {{ step }}
        </div>
      </div>

      <!-- Ligne entre les étapes -->
      <div v-if="index < steps.length - 1" class="flex-1 h-0.5 mx-4" :class="getLineClass(index)"></div>
    </template>
  </div>
</template>

<style scoped>
.dashed-line {
  border-bottom: 3px dashed #ffffff; /* Adjust color as needed */
  width: 20%; /* Adjust width as needed */
}</style>