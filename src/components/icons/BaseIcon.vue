<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
  name: String, // Nom de l'icône
  size: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  strokeWidth: {
    type: [Number, String],
    default: 1.5
  },
  customColor: {
    type: String,
    default: ''
  },
})

const IconComponent = computed(() => icons[props.name] || null)
</script>

<template>
  <component 
    :is="IconComponent" 
    v-if="IconComponent" 
    :size="size" 
    :color="color" 
    :stroke-width="strokeWidth" :class="customColor"
  />
  <span v-else>⚠️ Icône non trouvée</span>
</template>
