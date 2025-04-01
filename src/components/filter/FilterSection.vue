<template>
  <div class="border-b border-gray-200 pb-5">
    <div>
      <div class="flex items-center justify-between">
        <h1 class="text-gray-950 text-lg font-semibold">{{ title }}</h1>
        <!-- <BaseIcon name="Filter" size="20" stroke-width="2" class="text-black" /> -->
      </div>
    <!-- <h1 class="text-gray-950 text-lg font-semibold pb-2">{{ title }}</h1> -->

    <slot></slot>
  </div>
  </div>
</template>

<script setup>
// import BaseIcon from '../icons/BaseIcon.vue';
defineProps({
  title: String
});
</script>
