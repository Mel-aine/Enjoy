<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';


const props = defineProps({
  lb: String,
  options: Array,
  defaultValue: Array,
  isRequired: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true,
    default: () => []  // Valeur par défaut vide si non définie
  },
  disabled: {
    type: Boolean,
    default: false
  }, // Désactivation du champ
});

const isDropdownOpen = ref(false);


const selectWrapper = ref(null);

const selectedOption = ref(props.options.find(option => option.value === props.modelValue) || null);

// Synchroniser la sélection de l'option avec la prop modelValue
watch(() => props.modelValue, (newVal) => {
  selectedOption.value = props.options.find(option => option.value === newVal) || null;
});

// Gérer l'ouverture et la fermeture du dropdown
const handleDropdownToggle = () => {
  if (!props.disabled) {
    isDropdownOpen.value = !isDropdownOpen.value;
  }
};

// Gérer la sélection d'une option
const selectOption = (option) => {
  if (!props.disabled) {
    selectedOption.value = option;
    isDropdownOpen.value = false;
    emit('update:modelValue', option.value); // Propager la nouvelle valeur avec v-model
    emit('select', option); // Émettre un événement pour l'option sélectionnée
  }
}

const handleClickOutside = (event) => {
  if (selectWrapper.value && !selectWrapper.value.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

// Écouter l'événement click globalement
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});



const emit = defineEmits(['update:modelValue', 'select'])


// Nettoyer l'écouteur d'événements lors du démontage
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div ref="selectWrapper" class="w-full">
    <div :class="['relative font-sans cursor-pointer', disabled ? 'cursor-not-allowed text opacity-50' : '']"
      @click="handleDropdownToggle">
      <div
        :class="[' px-4 py-2 text-sm bg-White border-2  rounded-sm focus:border-customRed pr-10  flex justify-between w-full appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0', isDropdownOpen ? ' border-customRed text-gray-900' : 'bg-transparent border-orange-200']">
        <span>{{ selectedOption ? selectedOption.label : " " }}</span>

        <span :class="[isDropdownOpen ? ' text-customRed' : ' text-orange-200']">▼</span>
      </div>
      <label for="floating_select" class="text-base"
        :class="['absolute  text-gray-500 dark:text-gray-400 duration-300 transform text-base -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1', isDropdownOpen ? '  text-gray-950' : 'text-gray-500']">
        {{ lb }}<span v-if="isRequired" class="text-red-500">*</span>
      </label>
      <input type="hidden" :required="isRequired" :value="selectedOption ? selectedOption.value : ''" class="" />
      <ul v-if="isDropdownOpen"
        class="custom-scrollbar text-lg sm:text-base absolute top-full left-0 right-0 bg-white border-2 border-orange-200 border-t-0 rounded-b-lg max-h-40 overflow-y-auto z-50 mt-1">
        <li v-for="option in options" :key="option.value" @click="!disabled && selectOption(option)"
          :class="['px-5 py-2 cursor-pointer hover:bg-gray-200', disabled ? 'cursor-not-allowed text-gray-400' : '']">
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.cursor-not-allowed {
  cursor: not-allowed;
}

.text {
  background-color: #f3f4f6;
  /* Fond grisé */
}

.opacity-50 {
  opacity: 0.5;
}

.custom-scrollbar {
  scrollbar-width: thin;
  /* Pour Firefox */
  scrollbar-color: #3b82f6 #e5e7eb;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #e5e7eb;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #3b82f6;
  border-radius: 20px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #25ebe5;
}
</style>
