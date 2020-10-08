import Vue from 'vue'
import VueRouter from 'vue-router'
import toppage from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HedgeHogs',
    component: HedgeHogs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Auth',
    component: Auth
  }
]

const router = new VueRouter({
  routes
})

export default router
