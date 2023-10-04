import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BolsistasPage from '../views/Bolsista/BolsistasPage.vue'
import DetalhesBolsista from '../views/Bolsista/DetalhesBolsista.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/listar-bolsistas',
      name: 'bolsista',
      component: BolsistasPage
    },
    {
      path: '/listar-bolsistas/:id',
      name: 'bolsista-detalhes',
      component: DetalhesBolsista
    }
  ]
})

export default router
