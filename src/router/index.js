import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: (resolve) => require(['@/views/About'], resolve),
  },
  {
    path: '/exit',
    name: 'Exit',
    component: () => import(/* webpackChunkName: "exit" */ '../views/Exit.vue'),
  },
  {
    path: '/some',
    name: 'Some',
    component: () => import(/* webpackChunkName: "some" */ '../views/Some.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  console.log('to: ', to)
  console.log('from: ', from)
  store.commit('ADD_CACHE', to.name)
  next()
})

export default router
