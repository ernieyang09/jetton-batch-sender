import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/views/login/index.vue'

export const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
