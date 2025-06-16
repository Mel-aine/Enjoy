<template>
    <div class="relative w-full">
        <input ref="inputRef" type="text" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Search for a place..." />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
    modelValue: String,
    country: { type: String, default: 'cm' }, // You can customize this
})

const emit = defineEmits(['update:modelValue', 'placeChanged'])

const inputRef = ref(null)

onMounted(() => {
    if (!window.google?.maps?.places) {
        console.error('Google Maps Places API not loaded.')
        return
    }

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.value, {
        types: ['geocode'], // or ['establishment']
        componentRestrictions: { country: props.country },
    })

    autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()

        if (!place.geometry || !place.geometry.location) {
            console.warn('No location available for the selected place')
            return
        }

        const result = {
            name: place.name || '',
            address: place.formatted_address || '',
            location: {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            },
        }

        emit('update:modelValue', place.formatted_address)
        emit('placeChanged', result)
    })
})
</script>
