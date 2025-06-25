<template>
    <div class="relative w-full max-w-md">
        <input v-model="query" @input="onInput" type="text" placeholder="Start typing..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" />

        <!-- Spinner -->
        <div v-if="isLoading" class="absolute right-3 top-2.5">
            <svg class="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
        </div>

        <!-- Dropdown -->
        <ul v-if="showDropdown && filteredOptions.length"
            class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            <li v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option)"
                class="px-4 py-2 cursor-pointer hover:bg-blue-100 flex flex-col">
                <span>{{ option.name }}</span>
                <span class="text-gray-600 text-sm">{{ option.location }}</span>
            </li>
        </ul>

        <!-- No results -->
        <div v-if="showDropdown && !filteredOptions.length && !isLoading"
            class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow p-3 text-sm text-gray-500">
            No results found
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { searchServiceByName } from '../../servicesApi/hotelServicesApi'

const query = ref('')
const isLoading = ref(false)
const filteredOptions = ref([])
const showDropdown = ref(false)
const debounceTimeout = ref(null)
const emits = defineEmits(['selected'])
const onInput = () => {
    showDropdown.value = true
    if (debounceTimeout.value) clearTimeout(debounceTimeout.value)

    debounceTimeout.value = setTimeout(fetchOptions, 300)
}

const fetchOptions = async () => {
    if (!query.value.trim()) {
        filteredOptions.value = []
        isLoading.value = false
        return
    }

    isLoading.value = true
    try {
        // Simulate external API call

        const res = await searchServiceByName(encodeURIComponent(query.value));
        const datas = res.data;

        // Example format: [{ label: 'Option 1', value: 1 }]
        filteredOptions.value = datas?.data?.map((e) => {
            console.log(e.addressService)
            const address = JSON.parse(e.addressService);

            return {
                ...e,
                location: address?.text || '',
                address :address

            }
        }) || []
    } catch (err) {
        console.error(err)
        filteredOptions.value = []
    } finally {
        isLoading.value = false
    }
}

const selectOption = (option) => {
    query.value = option.name
    showDropdown.value = false;
    emits('selected',option);
}
</script>
