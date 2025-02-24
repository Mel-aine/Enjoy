<template>
  <div class="flex flex-col space-y-2">
    <div v-for="option in props.options" :key="option.value" class="flex items-center">
      <input 
        type="radio" 
        :value="option.value" 
        v-model="modelValue" 
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
               dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 
               dark:bg-gray-700 dark:border-gray-600"
      />
      <label 
        :for="`radio-${option.value}`" 
        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: String,
  options: {
    type: Array,
    required: true
  }
});
</script>
