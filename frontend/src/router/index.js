import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'DevExcuses',
    component: () => import('../views/DevExcuses.vue')
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  {
    name: 'LostPage',
    path: '/lost',
    component: () => import('../views/LostPage.vue')
  },
  {
    path: '/:http_code(\\d+)',
    name: 'http_code',
    component: () => import('../views/HttpCode.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  if (to.name === 'LostPage') {
    setTimeout(() => {
      router.push({ name: 'DevExcuses' })
    }, 5000)
  }
})

export default router
