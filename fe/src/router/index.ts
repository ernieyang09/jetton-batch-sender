import { createWebHistory, createRouter } from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Exec from '@/views/exec/index.vue'
import BaseLayout from '@/components/BaseLayout.vue'

export const routes = [
  {
    path: '/',
    component: BaseLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/exec',
        name: 'Exec',
        component: Exec
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
