<script setup>
const props = defineProps({
    lb: String,
    inputType: {
        type: String,
        default: 'text'
    },
    icon:{
        type: String,
        default: ''
    },
    ph:{
        type: String,
        default: ''
    },
    isRequired: {
        type: Boolean,
        default: false,
    },
// Désactivation du champ
    modelValue: {
        type: [String, Number], // Support for different input types like text and number
        default: ''
    },
    forLabel: String,
    id: String,

});
// Emit input event to update the v-model value
const emit = defineEmits(['update:modelValue'])

// Handle the input change
const handleInput = (event) => {
    console.log('valee', event);
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <div>
        <div class="relative">
            <div class="w-full">
                <!-- Label -->
                <label :for="forLabel" class="block text-sm text-customBlue mb-1">
                {{ lb }}<span v-if="isRequired" class="text-red-500">*</span>
                </label>

                <!-- Champ de saisie -->
                <div class="relative">
                <input
                    :type="inputType"
                    :id="id"
                    :placeholder="ph"
                    :value="modelValue"
                    :required="isRequired"
                    @input="handleInput"
                    class="block w-full px-4 py-2 text-sm bg-White border-2 border-orange-200 rounded-sm focus:border-customRed focus:outline-none pr-10"
                />

                <!-- Icône -->
                <i class="absolute right-3 top-1/2 transform -translate-y-1/2 text-customRed " :class="icon"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
