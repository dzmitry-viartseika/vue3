import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Compute1d from '../views/Computed.vue'
import propsRules from '../views/propsRules.vue'

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
  {
    path: '/props',
    name: 'propsRules',
    component: propsRules
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
