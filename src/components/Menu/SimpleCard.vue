<script setup>
defineProps({
  name: String
});
</script>

<template>
  <div class="flex flex-col justify-around h-20 min-w-22 w-28 p-4 rounded-lg shadow-lg drop-shadow-lg mr-5 cursor-pointer select-none transition-transform transform hover:scale-105">
      <div class="text-black font-semibold text-sm   ">
        <!-- <div class="text-slate-500 truncate text-xs "> Items</div> -->
        <h1 class="text-sm font-sans md:font-serif ">{{ name }}</h1>
      </div>
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
