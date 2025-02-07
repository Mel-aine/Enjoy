<template>
    <button class="" :class="buttonClasses" @click="handleClick">
        <slot> </slot>
    </button>
</template>
<script setup>
import { computed } from 'vue';


const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
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
    const baseClasses = 'front-medium rounded focus:outline-none focus:ring-2 transition rounded-sm';

    const variantClasses = {
        ligth: 'bg-white text-indigo hover:bg-gray-200 focus:ring-gray-100',
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
        danger: 'bg-customRed text-white hover:bg-customRed focus:ring-red-300',

    };

    const sizeClasses = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-md',
        lg: 'px-5 py-3 text-lg',
    };

    
    return `${baseClasses} ${variantClasses[props.variant] || ''} ${sizeClasses[props.size] || ''}`;

});

</script>