import { createRouter, createWebHashHistory } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path => component
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue'),
      children: [
        {
          path: '/main/analysis/dashboard',
          component: () => import('../views/main/analysis/dashboard/dashboard.vue')
        },
        {
          path: '/main/analysis/overview',
          component: () => import('../views/main/analysis/overview/overview.vue')
        },
        {
          path: '/main/system/role',
          component: () => import('../views/main//system/role/role.vue')
        },
        {
          path: '/main/system/user',
          component: () => import('../views/main//system/user/user.vue')
        },
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/not-found.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
