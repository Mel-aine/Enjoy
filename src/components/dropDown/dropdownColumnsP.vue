<template>
  <div class="relative inline-block text-left p-3" ref="dropdownRef">
    <div @mouseenter="openDropdown" @mouseleave="closeDropdown">
      <button :class="buttonClasses" class="px-4 py-2 rounded-sm">
        <slot name="button">Menu</slot>
        <i class="fa fa-chevron-down text-xs ml-1 " :class="props.iconColor"></i>
      </button>
    </div> 

    <div v-show="isOpen" ref="dropdownContentRef"
      class="absolute transform -translate-x-1 z-[99] shadow-xl mt-2 transition duration-300 overflow-x-auto max-h-40 scrollbar-hide"
      :style="dropdownStyle" @mouseenter="cancelClose" @mouseleave="closeDropdown">
      <div v-show="isOpen" class="border-b-4 border-customRed w-[110px]"></div>
      <div
        class="bg-white left-0  transform w-auto origin-top rounded-lg rounded-tl-none shadow-lg transition-opacity duration-300 p-3 min-w-max ">
        <ul :class="['grid', props.columnClass, 'gap-x-3 gap-y-2', 'grid-cols-1 md:grid-cols-2 ']">
          <li v-for="item in props.menuData.slice(0, 8)" :key="item.route" class="flex items-center">
            <router-link :to="item.route"
              class="text-md w-full text-gray-700 hover:bg-gray-300 p-2 flex items-center space-x-2 min-w-max">
              <BaseIcon v-if="item.icon" :name="item.icon" size="20" stroke-width="2" />
              <span class="truncate">{{ item.label }}</span>
            </router-link>
          </li>
          <li v-if="props.menuData.length === 0" class="text-center text-gray-500">
            Aucune donnée disponible
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue';
import BaseIcon from '../icons/BaseIcon.vue';


const props = defineProps({
  menuData: {
    type: Array,
    default: () => [],
  },
  columnClass: {
    type: String,
    default: 'grid-cols-1',
  },
  iconColor: {
    type: String,
    default: "text-white" // Couleur par défaut
  }
  
});

const isOpen = ref(false);
const dropdownRef = ref(null);
const dropdownContentRef = ref(null);
const dropdownWidth = ref('auto');
let closeTimeout = null;

const updateDropdownWidth = () => {
  if (dropdownContentRef.value) {
    dropdownWidth.value = `${dropdownContentRef.value.scrollWidth}px`;
  }
};

const openDropdown = async () => {
  isOpen.value = true;
  await nextTick();
  updateDropdownWidth();
};

const closeDropdown = () => {
  closeTimeout = setTimeout(() => {
    isOpen.value = false;
  }, 10);
};

const cancelClose = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
};

onMounted(() => {
  updateDropdownWidth();
});

const dropdownStyle = computed(() => ({
  minWidth: 'auto',
  width: dropdownWidth.value,
}));

const buttonClasses = computed(() => ({
  'focus:outline-none bg-white/10 text-white focus:ring-teal-500 transition': isOpen.value,
  'text-white': !isOpen.value,
}));
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
