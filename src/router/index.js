import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
    component: () => import('../views/Third.vue'),
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
  path: '/some',
  name: 'Some',
  component: () => import('../views/Third.vue'),
})
console.log(router.options.routes)
export default router
