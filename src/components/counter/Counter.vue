<template>
  <div class="flex items-center justify-between w-full">
    <span class="whitespace-nowrap"><slot></slot></span>
    <div class="flex border rounded-md overflow-hidden">
      <button
        type="button"
        class="px-4 py-2 text-black bg-white border-r hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="decrement"
        :disabled="modelValue === 0"
      >
        -
      </button>

      <span class="px-6 py-2 text-black bg-white">{{ modelValue }}</span>

      <button
        type="button"
        class="px-4 py-2 text-black bg-white border-l hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        @click="increment"
        :disabled="modelValue === 42"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: Number,
});
const emit = defineEmits(["update:modelValue"]);

const increment = () => {
  emit("update:modelValue", props.modelValue + 1);
};

const decrement = () => {
  if (props.modelValue > 0) {
    emit("update:modelValue", props.modelValue - 1);
  }
};
</script>
