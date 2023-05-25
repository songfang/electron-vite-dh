import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {no_login: true},
  },
  {
    path: '/live',
    name: 'live',
    component: () => import('../views/Live.vue'),
    meta: {no_login: true},
  }
]
export default routes