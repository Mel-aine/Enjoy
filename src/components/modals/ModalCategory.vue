<template>
  <div>
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg sm:w-[400px] w-[300px] max-w-full p-6 relative" @click.stop>
          <!-- Bouton de fermeture -->
          <button class="absolute top-2 right-4 pt-2 text-customBlueVariant hover:text-customRed" @click="closeModal">✖</button>

          <!-- Titre -->
          <h2 class="text-xl font-semibold text-gray-900">{{ title }}</h2>

          <!-- Contenu dynamique -->
          <div class="mt-4">
            <slot></slot>
          </div>
          <div v-if="showActionButton" class="mt-4 flex justify-end">
            <button class="bg-customRed text-white px-4 py-2 rounded-lg hover:bg-customBlueVariant" @click="closeModal">
              {{ actionText }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Définition des props
defineProps({
  isOpen: Boolean,
  title: String,
  showActionButton: { type: Boolean, default: false },
  actionText: { type: String, default: "OK" }
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
