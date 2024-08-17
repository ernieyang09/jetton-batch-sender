import './style.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import Noir from '@/themes/app-theme'
import router from '@/router'
import App from './App.vue'

createApp(App)
  .use(createPinia())
  .use(PrimeVue, {
    theme: {
      preset: Noir.preset,
      options: {
        // darkModeSelector: "system",
        darkModeSelector: '.'
      }
    }
  })
  .use(router)
  .mount('#app')
