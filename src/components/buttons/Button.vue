<template>
    <button class="flex items-center justify-center whitespace-nowrap" :class="buttonClasses" @click="handleClick">
        <slot> </slot>
    </button>
</template>
<script setup>
import { computed } from 'vue';


const props = defineProps({
    variant: {
        type: String,
        default: 'nothing',
    },
    size: {
        type: String,
        default: 'sm',
    },
});

const emits = defineEmits(['click']);

const handleClick = () => {
    emits('click');
};

const buttonClasses = computed(() => {
    const baseClasses = 'front-medium rounded-sm focus:outline-none focus:ring-2 transition';

    const variantClasses = {
        nothing: '',
        ligth: 'bg-white/10 text-customWhite hover:bg-white/30 focus:ring-gray-100',
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
        danger: 'bg-customRed text-customWhite hover:bg-customRed focus:ring-red-300',

    };

    const sizeClasses = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-5 py-3 text-lg',
    };

    
    return `${baseClasses} ${variantClasses[props.variant] || ''} ${sizeClasses[props.size] || ''}`;

});

</script>