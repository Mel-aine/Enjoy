<template>
  <div class="space-y-1">
    <label :for="id" class="text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="relative">
      <input
        :id="id"
        type="number"
        min="1"
        max="10"
        class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="inputValue"
      />
      <UsersIcon class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { UsersIcon } from 'lucide-vue-next'

const props = defineProps({
  label: String,
  id: {
    type: String,
    default: () => `number-${Math.random().toString(36).substr(2, 9)}`,
  },
  modelValue: Number,
})

const emit = defineEmits(['update:modelValue'])
const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
