<template>
  <div class="space-y-1">
    <label :for="id" class="text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="relative">
      <input
        :id="id"
        type="date"
        class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="inputValue"
        :placeholder="placeholder"
      />
      <CalendarIcon class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CalendarIcon } from 'lucide-vue-next'

const props = defineProps({
  label: String,
  modelValue: String,
  placeholder: String,
  id: {
    type: String,
    default: () => `date-${Math.random().toString(36).substr(2, 9)}`,
  },
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
