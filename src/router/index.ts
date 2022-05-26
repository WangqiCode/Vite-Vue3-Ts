import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { Router } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/main/login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home/home.vue')
  }
]
const router: Router = createRouter({
  routes,
  history: createWebHashHistory()
})
router.beforeEach((to, from) => {
  window.$loadingBar?.start()
})
router.afterEach(to => {
  window.$loadingBar?.finish()
})
export default router
