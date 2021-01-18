import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Compute1d from '../views/Computed.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Compute1d
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
