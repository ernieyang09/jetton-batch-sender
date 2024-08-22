import './style.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import Noir from '@/themes/app-theme'
import router from '@/router'
import store from '@/store'
import { createRouterMiddleware } from './router/middleware'
import App from './App.vue'

createApp(App)
  .use(store)
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

createRouterMiddleware(router)
