<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-medium gap-2 rounded-lg transition',
      sizeClasses[size],
      variantClasses[variant],
      className,
      { 'cursor-not-allowed opacity-50': disabled },
    ]"
    @click="onClick"
    :disabled="disabled"
  >
    <span v-if="startIcon" class="flex items-center">
      <component :is="startIcon" />
    </span>
    <slot></slot>
    <span v-if="endIcon" class="flex items-center">
      <component :is="endIcon" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'outline' | 'neutral'|'danger'
  startIcon?: object
  endIcon?: object
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: 'md',
  variant: 'primary',
  className: '',
  disabled: false,
})

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-5 py-3.5 text-sm',
}

const variantClasses = {
  primary: 'bg-primary text-white shadow-theme-xs hover:bg-primary/25 disabled:bg-purple-300',
  danger:  'bg-red-800 text-white shadow-theme-xs hover:bg-red-600 disabled:bg-red-300',
  neutral:' border-none bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300',
  outline:
    'bg-white text-primary ring-1 ring-inset ring-primary hover:bg-gray-50    hover:bg-white/25 dark:hover:text-primary',
}

const onClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick()
  }
}
</script>
