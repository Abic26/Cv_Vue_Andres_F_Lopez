import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/hero_section.vue')

    },    {
      path: '/',
      name: 'habilidades',
      component: () => import('../components/hero_section_habilidades.vue')
    },    {
      path: '/',
      name: 'proyectos',
      component: () => import('../components/hero_section_proyectos.vue')
    },    {
      path: '/',
      name: 'conoceme',
      component: () => import('../components/hero_section_conoceme.vue')
    },
  
  ]
})

export default router
