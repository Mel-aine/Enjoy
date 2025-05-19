<template>
  <div @click="filterOption(label)" class="border rounded-full h-6 w-24 border-gray-300 flex items-center justify-center text-gray-800 hover:bg-purple-100 cursor-default">
    <span class="px-1 text-gray-700 text-sm font-medium truncate">{{ label }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue"
defineProps({
  label: String
});
const clicked = ref(false);
const emit = defineEmits(["optionFilter"])
const filterOption = (label) => {
clicked.value = !clicked.value;
emit("optionFilter", label)
console.log('donner envoyer', label)
}
</script>
