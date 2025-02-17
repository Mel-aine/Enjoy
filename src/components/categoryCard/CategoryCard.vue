<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-[180px] min-w-30 w-[250px] p-4 rounded-lg shadow-lg drop-shadow-lg cursor-pointer select-none transition-transform transform hover:scale-105 bg-white hover:bg-orange-200">
    <i :class="icon" class="text-customBlue text-2xl mb-2"></i>
    <h1 class="text-lg font-semibold text-gray-700 text-center hover:text-customBlue">{{ name }}</h1>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
