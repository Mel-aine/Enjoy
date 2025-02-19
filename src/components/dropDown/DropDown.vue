<template>
  <div class="relative inline-block text-left">
    <div class="group">
      <button
        type="button"
        class="inline-flex justify-center items-center w-full px-4 py-2 text-sm text-white hover:bg-transparent focus:outline-none focus:bg-gray-700"
      >
        <slot></slot>
        <i class="fa fa-chevron-down text-xs ml-2 text-white"></i>
      </button>

      <div
        class="absolute sm:left-0 lg:left-3 transform sm:translate-x-0 lg:-translate-x-0 w-auto min-w-[200px] lg:min-w-[500px] max-w-[600px] origin-top rounded-md shadow-lg opacity-0 invisible z-50 group-hover:opacity-100 group-hover:visible transition duration-300"
      >
        <div class="border-b-4 border-customRed w-[110px]"></div>
        <div class="py-1 bg-customWhite rounded-lg rounded-tl-none">
          <ul class="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2 p-3">
            <li
              v-for="item in props.menuData.slice(0, 8)"
              :key="item.route"
              class="flex items-center"
            >
              <router-link
                :to="item.route"
                class="text-xs w-full text-gray-700 hover:bg-gray-300 p-2 flex items-center space-x-2"
              >
                <BaseIcon :name="item.icon" size="20" stroke-width="2" />
                <span class="whitespace-nowrap">{{ item.label }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from '../icons/BaseIcon.vue';

const props = defineProps({
  menuData: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
/* Ajoutez ici les styles spécifiques si nécessaire */
</style>