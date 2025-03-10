<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <div>
      <button @click="toggleDropdown" :class="buttonClasses" class="px-4 py-2 rounded-sm">
        <slot name="button">Menu</slot>
        <i class="fa fa-chevron-down text-xs ml-1" :class="props.iconColor"></i>
      </button>
    </div>

    <div v-show="isOpen"
      class="absolute transform -translate-x-1 z-[100] bg-white shadow-xl mt-2 rounded-lg transition duration-300"
      :style="dropdownStyle">
      <div class="p-3" ref="dropdownContentRef">
        <slot name="content">No content available</slot>
        <div v-show="props.footerDropdown">
          <slot name="footerDrop"> <span class="text-red-500 text-center">No footer element please check this element on
              your component template name missing !!! </span></slot>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
const props = defineProps({

  footerDropdown: {
    type: Boolean,
    default: false
  },
  iconColor: {
    type: String,
    default: "text-white" 
  }
});

const isOpen = ref(false);
const dropdownRef = ref(null);
const dropdownContentRef = ref(null);
const dropdownWidth = ref('auto');

const toggleDropdown = async () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    await nextTick();
    if (dropdownContentRef.value) {
      dropdownWidth.value = `${dropdownContentRef.value.offsetWidth}px`;
    }
  }
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});

const dropdownStyle = computed(() => ({
  width: dropdownWidth.value,
}));

const buttonClasses = computed(() => ({
  'focus:outline-none bg-white/10 text-white focus:ring-teal-500 transition': isOpen.value,
  'text-white': !isOpen.value,
}));
</script>

<style scoped>
/**** Styles supplémentaires si nécessaire ****/
</style>