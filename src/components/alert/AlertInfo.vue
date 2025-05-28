<script setup>
import { defineEmits } from 'vue';
import { ref, onMounted } from 'vue';

const closeBtn = ref(null);

onMounted(() => {
  // Met le focus dès que le composant est monté
  closeBtn.value?.focus();
});

const emit = defineEmits(['close']); // Définition correcte de l'événement

const props = defineProps({
  type: { type: String, default: 'info' }, // success, danger, warning, info
  message: { type: String, required: true },
});

const close = () => {
  emit('close');
};

const alertTypes = {
  success: { bg: 'bg-green-50', text: 'text-green-800', darkBg: 'dark:bg-green-800', darkText: 'dark:text-green-400' },
  danger: { bg: 'bg-red-50', text: 'text-red-800', darkBg: 'dark:bg-gray-800', darkText: 'dark:text-red-400' },
  warning: { bg: 'bg-yellow-50', text: 'text-yellow-800', darkBg: 'dark:bg-yellow-800', darkText: 'dark:text-yellow-400' },
  info: { bg: 'bg-blue-50', text: 'text-blue-800', darkBg: 'dark:bg-blue-800', darkText: 'dark:text-blue-400' },
};

const selectedAlert = alertTypes[props.type] || alertTypes.info;
</script>

<template>
  <div
    :class="`flex justify-between items-center p-4 mb-4 text-sm rounded-lg ${selectedAlert.bg} ${selectedAlert.text} ${selectedAlert.darkBg} ${selectedAlert.darkText}`"
    role="alert">
    <div class="flex items-center">
      <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="font-medium">{{ message }}</span>
    </div>
    <button ref="closeBtn" @click="close"
      class="ml-4 pt-1.5 text-xl font-bold  rounded-full w-6 h-6 flex leading-none items-center justify-center hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500">
      &times;
    </button>
  </div>
</template>
