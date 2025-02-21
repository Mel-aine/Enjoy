import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/EHomeView.vue'
import { useFooterStore } from '@/stores/footer'

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
      path: '/fr/categorie/:categoryId',
      name: 'DetailService',
      component: () => import('../views/EDetailServices.vue'),
    },
    {
      path: '/recherche',
      name: 'recherche',
      component: () => import('../components/restaurants/FilterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/ELoginView.vue'),
    },
    {
      path: '/addBusiness',
      name: 'addBusiness',
      component: () => import('../views/EAddBusiness.vue'),
    },

  ],
})

router.beforeEach((to, from, next) => {
  const footerStore = useFooterStore()

  if (to.fullPath != '/') {
    footerStore.updateFooter(false)
    console.log('to.fullPath', to.fullPath)
  }

  next()
})
export default router
