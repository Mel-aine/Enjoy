<template>
  <div class="border rounded-full h-6 w-24 border-gray-300 flex items-center justify-center text-gray-800 hover:bg-purple-100">
    <span class="px-1 text-gray-700 text-sm font-medium truncate">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String
});
</script>
