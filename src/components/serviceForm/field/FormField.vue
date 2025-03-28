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
            'shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md',
            error ? 'border-red-300' : ''
          ]"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :required="required"
        />
      </div>
      <p v-if="helpText" class="mt-1 text-sm text-gray-500">{{ helpText }}</p>
      <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    label: String,
    id: String,
    name: String,
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    modelValue: String,
    required: { type: Boolean, default: false },
    helpText: { type: String, default: '' },
    error: { type: String, default: '' }
  })
  
  defineEmits(['update:modelValue'])
  </script>
  