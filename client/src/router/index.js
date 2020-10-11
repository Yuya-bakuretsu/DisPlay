import Vue from 'vue'
import VueRouter from 'vue-router'
import toppage from '@/views/Toppage.vue'

Vue.use(VueRouter)

const routes = [
  {
    // TODO add login confirmation page
    path: '/',
    name: 'toppage',
    component: toppage
  }
]

const router = new VueRouter({
  routes
})

export default router
