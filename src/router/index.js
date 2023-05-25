import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores'
import routes from './routes'
// import { showLoadingToast, closeToast } from 'vant';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

//全局前置守卫
router.beforeEach((to) => {
  // showLoadingToast({message: t('Loading'), forbidClick: true, duration: 0})
  const userStore = useUserStore()
  if (to.meta.no_login) { // 无需登录的页面直接进入
    return true
  } else if (!userStore.token) { // 未登录或登录失效
    return { path: '/login', replace: true }
  } else { // 已经登陆
    return true
  }
})

router.afterEach(() => {
  // closeToast()
})

export default router
