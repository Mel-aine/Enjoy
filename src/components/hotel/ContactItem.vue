<template>
  <div class="flex items-center gap-3">
    <div class="p-2 rounded-lg" :class="bgColor">
      <component :is="icons[icon]" class="w-5 h-5" :class="color" />
    </div>
    <div>
      <p class="text-sm font-medium text-gray-900">{{ label }}</p>
      <a v-if="link" :href="link" target="_blank" class="text-blue-600 hover:underline text-sm">{{ value }}</a>
      <p v-else class="text-sm text-gray-600">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
import { Mail, Phone, Globe } from 'lucide-vue-next'

const props = defineProps({
  icon: String,
  label: String,
  value: String,
  link: String
})

const icons = { Mail, Phone, Globe }
const color = {
  Mail: 'text-blue-600',
  Phone: 'text-green-600',
  Globe: 'text-purple-600'
}[props.icon]
const bgColor = {
  Mail: 'bg-blue-100',
  Phone: 'bg-green-100',
  Globe: 'bg-purple-100'
}[props.icon]
</script>
