import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import store from '@/store'
// import { getRoutes } from '../api/home'

// async function initRoutes() {
//   let res = await getRoutes()
//   if (res.status === 200) {
//     console.log(res.data)
//   }
// }
// initRoutes()
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/iframe',
    name: 'Iframe',
    meta: {
      iframe: 1,
      url: 'http://192.168.0.183:8080/hiip-portal/a/sso/showSysIndex',
    },
  },
  {
    path: '/third',
    name: 'Third',
    component: () => import('../views/ThirdChild.vue'),
  },
  {
    path: '/tailwindcss',
    name: 'TailWindCSS',
    component: () => import('../views/tailwindcss/index'),
  },
]

const router = new VueRouter({
  routes,
})

router.addRoute({
  path: '/some/:id',
  name: 'Some',
  component: () => import('../views/Third.vue'),
})

router.beforeEach((to, from, next) => {
  console.log('to: ', to)
  // 判断用户是否已登录
  const isLoggedIn = store.state.isLoggedIn
  console.log('isLoggedIn: ', isLoggedIn)

  if (!isLoggedIn) {
    // 需要登录的页面且用户未登录，则跳转到登录页
    if (to.path !== '/login') {
      next('/login')
    } else next()
  } else {
    // 用户已登录或不需要登录的页面，直接进入目标页面
    next()
  }
})
export default router
