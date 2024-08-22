import { Router } from 'vue-router'
import useAppStore from '@/store/modules/app'

export const createRouterMiddleware = (router: Router) => {
  const appStore = useAppStore()
  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !appStore.address) {
      // If the route requires authentication and the user is not authenticated, redirect to the login page
      next({ name: 'Login' })
    } else {
      // Otherwise, allow access to the route
      next()
    }
  })
}
