import { createRouter, createWebHashHistory } from 'vue-router'
import localCache from '@/utils/cache'

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
// 导航守卫，如果用户直接进入非登录页面，要判断本地是否要token缓存，不然就不用登录直接进入页面
router.beforeEach((to) => {
  if (to.path !== './login') {
    const token = localCache.getCache('token')
    if (!token) {
      return './login'
    }
  }
})

export default router
