import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/first',
    component: Home,
    children: [
      {
        path: '/home/first',
        component: () => import('@/views/tabs/first.vue'),
      },
      {
        path: '/home/second',
        component: () => import('@/views/tabs/second.vue'),
      },
    ],
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
    path: '/sidebar',
    // redirect: '/home/first',
    component: Layout,
    children: [
      {
        path: '/home/first',
        component: () => import('@/views/tabs/first.vue'),
      },
    ],
  },
  {
    path: '/echarts',
    component: Layout,
    children: [
      { path: '/echarts/bar', component: () => import('@/views/echarts/bar') },
      {
        path: '/echarts/line',
        component: () => import('@/views/echarts/line'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    next()
  }
  next()
})
export default router
