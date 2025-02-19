<template>
    <div class="p-6 bg-transparent flex flex-col items-center space-y-1 ">
      <!-- Icône centrée -->
      <i :class="icon" class="text-2xl text-customBlue"></i>
      <!-- <BaseIcon  :name="icon" size="22" stroke-width="2" class="rounded-full w-20 h-10 p-2 bg-customNeutreColor"/>  -->

      <!-- Description centrée -->
      <p class="text-customRed text-lg text-center font-poppins">{{ category }}</p>
    </div>
  </template>

  <script setup>
  import BaseIcon from '../icons/BaseIcon.vue';
  defineProps({
    icon: {
      type: String,
      required: true,
      default: 'Circle',
    },
    category: {
      type: String,
      required: true,
      default: 'Description dynamique ici.',
    },
  });
  </script>
