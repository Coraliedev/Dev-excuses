import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
