import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Lugares from '../views/AboutView.vue'
import Hobbies from '../views/Hobbies.vue'
import FamilyView from '../views/FamilyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lugares',
      name: 'lugares',
      component: Lugares
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: Hobbies
    },
    {
      path: '/familyView',
      name: 'familyView',
      component: FamilyView
    },
   
  ]
})

export default router
