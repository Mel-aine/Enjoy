import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { createI18n } from 'vue-i18n'
import 'leaflet/dist/leaflet.css';

import messages from '@/lang/index'

import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
})
pinia.use(piniaPluginPersistedstate) // Ajoute le plugin

app.use(i18n)
app.use(pinia)
app.use(router)

app.mount('#app')
