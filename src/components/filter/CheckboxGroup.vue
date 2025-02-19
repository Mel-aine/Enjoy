<template>
  <div>
    <div class="flex items-center" v-for="(item, index) in items" :key="index">
      <input type="checkbox" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded-sm">
      <label class="ml-2 text-sm font-medium text-gray-700">{{ item }}</label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array
});
</script>
