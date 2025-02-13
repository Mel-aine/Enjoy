import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/fr/categorie/:categoryType/:categoryId',
      name: 'DetailService',
      component: () => import('../views/services/DetailServices.vue'),
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('../views/restaurants/Menu.vue'),
    },

  ],
})

export default router
