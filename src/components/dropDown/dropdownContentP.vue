<template>
  <div class="relative inline-block text-left w-max" ref="dropdownRef">
    <!-- Button -->
    <button
      @click="toggleDropdown"
      :class="[
        'flex items-center gap-1 px-4 py-2 bg-white/10 text-white rounded-md transition duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orange-700',
        isOpen ? 'ring-2 ring-orange-700' : ''
      ]"
    >
      <slot name="button">Menu</slot>
      <i
        class="fa fa-chevron-down text-xs ml-1 transition-transform duration-200"
        :class="[{ 'rotate-180': isOpen }, props.iconColor]"
      ></i>
    </button>

    <!-- Dropdown Panel -->
    <transition name="fade-slide">
      <div
        v-show="isOpen"
        class="absolute z-[100] mt-1 border-t-2 border-primary bg-white shadow-lg  overflow-hidden w-full"
      >
        <div class="p-3 " ref="dropdownContentRef">
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
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
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>