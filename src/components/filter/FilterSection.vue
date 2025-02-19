<template>
  <div class="border-b border-gray-200 pb-5">
    <h1 class="text-gray-950 text-lg font-semibold pb-2">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>
