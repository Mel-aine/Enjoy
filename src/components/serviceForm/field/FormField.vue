<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="mt-1">
      <input
        :type="type"
        :name="name"
        :id="id"
        :class="[
          'w-full px-3 py-2 border rounded-lg focus:ring-2 sm:text-sm',
          isValid === false ? 'border-red-500 focus:ring-red-200' :
          isValid ? 'border-green-500 focus:ring-indigo-500' :
          'border-gray-300 focus:ring-indigo-500'
        ]"        :placeholder="placeholder"
        v-model="internalValue"
        :required="required"
      />
    </div>
    <p v-if="helpText" class="mt-1 text-sm text-gray-500">{{ helpText }}</p>
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  label: String,
  id: String,
  name: String,
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  modelValue: String,
  required: { type: Boolean, default: false },
  helpText: { type: String, default: '' },
  error: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue']);
const internalValue = ref(props.modelValue || '');

// Mettre à jour la valeur interne quand la prop change
watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue;
});

// Émettre la nouvelle valeur à chaque modification
watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
