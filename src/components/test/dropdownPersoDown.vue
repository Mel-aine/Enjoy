<template>
    <div class="relative inline-block text-left">
      <div class="group" @mouseenter="openDropdown" @mouseleave="closeDropdown">
        <button
          type="button"
          class="inline-flex justify-center items-center w-full px-5 py-2 text-md text-white hover:bg-transparent focus:outline-none focus:bg-gray-700"
        >
          <slot name="button"> No boutton </slot>
          <i class="fa fa-chevron-down text-sm ml-2 text-white"></i>
        </button>
  
        <div
          ref="dropdownContentRef"
          :style="dropdownStyle"
          class="absolute left-0 z-[1000] transform min-w-[200px] origin-top rounded-md shadow-lg transition-opacity duration-300"
          v-show="isOpen"
        >
          <div class="border-b-4 border-customRed w-[110px]"></div>
          <div class="py-1 bg-customWhite rounded-lg rounded-tl-none">
            <ul :class="['grid', `grid-cols-${props.columns}`, 'gap-x-3 gap-y-2 px-3']">
              <li v-for="item in props.menuData.slice(0, 8)" :key="item.route" class="flex items-center">
                <router-link
                  :to="item.route"
                  class="text-md w-full text-gray-700 hover:bg-gray-300 p-2 flex items-center space-x-2"
                >
                  <BaseIcon :name="item.icon" size="20" stroke-width="2" class="min-w-5" />
                  <span class="whitespace-nowrap">{{ item.label }}</span>
                </router-link>
              </li>
              <li v-if="menuData.length === 0" class="text-center text-gray-500">
                Aucune donnée disponible
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, ref, nextTick } from 'vue';
  import BaseIcon from '../icons/BaseIcon.vue';
  
  const props = defineProps({
    menuData: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Number,
      default: 1,
    },
  });
  
  const dropdownWidth = ref('500px');
  const isOpen = ref(false);
  const dropdownContentRef = ref(null);
  
  const dropdownStyle = computed(() => ({
    width: dropdownWidth.value,
  }));
  
  const openDropdown = async () => {
    isOpen.value = true ;
    if (isOpen.value) {
      await nextTick();
      if (dropdownContentRef.value) {
        dropdownWidth.value = `${dropdownContentRef.value.offsetWidth}px`;
        console.log('dropdownWidth', dropdownWidth.value);
      }
    }
  };
  
  const closeDropdown = () => {
    isOpen.value = false;
  };
  </script>
  