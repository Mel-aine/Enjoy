<template>
    <div class="relative w-64">
        <!-- Input de recherche -->
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            @focus="open = true" @blur="onBlur" placeholder="Rechercher..."
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none" />

        <!-- Dropdown -->
        <ul v-if="open"
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-300 bg-white shadow-lg">
            <li v-for="option in filteredOptions" :key="option.id" @mousedown.prevent="selectOption(option)"
                class="flex items-center px-3 py-2 hover:bg-purple-100 cursor-pointer">
                <i :class="option.icon" class="text-gray-700 mr-2"></i>
                {{ option.label }}
            </li>

            <li v-if="filteredOptions.length === 0" class="px-3 py-2 text-gray-500">
                Aucune option trouvée
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    modelValue: String, // for v-model binding
    options: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(['update:modelValue', 'select'])

const open = ref(false)
const selected = ref(null)

const filteredOptions = computed(() => {
    const search = props.modelValue?.toLowerCase() || ''
    return props.options.filter((opt) =>
        opt.label.toLowerCase().includes(search)
    )
})

function selectOption(option) {
    selected.value = option
    emit('update:modelValue', option.label)
    open.value = false
    emit('select', option)
}

function onBlur() {
    setTimeout(() => {
        open.value = false
        if (!selected.value || props.modelValue !== selected.value.label) {
            emit('update:modelValue', selected.value ? selected.value.label : '')
        }
    }, 150)
}
</script>
