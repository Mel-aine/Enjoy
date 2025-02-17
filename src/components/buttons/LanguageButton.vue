<template>
  <div class="relative">
  <!-- Button -->
  <div class="flex items-center gap-2 cursor-pointer">
    <img :src="selectLanguage.icon" alt="Language icon" class="h-6 w-6 rounded-full" />
    <span class="font-semibold">{{ $t(selectLanguage.name) }}</span>
    <button @click="show = !show" type="button"
      class="relative rounded-md text-left text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-haspopup="listbox" :aria-expanded="show.toString()" aria-labelledby="language-select">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-5 h-5 transition-transform duration-200" :class="{'rotate-180': show}">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>

  <!-- Dropdown Menu -->
  <ul v-if="show" style="width: 140px;" class="absolute z-10 mt-1 max-h-50 overflow-auto rounded-md bg-white dark:bg-gray-800 py-2 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out"
    tabindex="-1" role="listbox" aria-labelledby="language-select">
    <!-- Options -->
    <li v-for="(language, i) in languages" :key="i"
      class="relative cursor-pointer select-none py-2 pl-3 pr-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      role="option" @click="setLanguage(language)">
      <div class="flex items-center gap-2">
        <img :src="language.icon" alt="Language icon" class="h-5 w-5 rounded-full" />
        <span class="ml-2 block truncate font-medium">{{ language.name }}</span>
      </div>
      <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
        v-if="selectLanguage.code === language.code">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
        </svg>
      </span>
    </li>
  </ul>
</div>

</template>

<script setup>
import { computed, ref } from 'vue'
import sw from '@/assets/images/united-kingdom_551844.png'
import cm from '@/assets/images/Flag_of_France.png'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/lang/language'
const t = useI18n({ useScope: 'global' })

const languages = [
  {
    code: 'en',
    name: 'English',
    icon: sw,
  },
  {
    code: 'fr',
    name: 'French',
    icon: cm,
  },
]
const show = ref(false)
const useLanguage = useLanguageStore()
const selectLanguage = computed(() => {
  return languages.filter((e) => e.code === useLanguage.locale)[0]
})
const setLanguage = (lg) => {
  console.log('setLanguage', lg)
  show.value = !show
  if (lg.code !== t.locale.value) {
    t.locale.value = lg.code
    useLanguage.set(t.locale.value)
  }
  console.log('useLanguage', useLanguage.locale)
}
</script>
