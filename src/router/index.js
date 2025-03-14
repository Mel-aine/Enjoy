import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/EHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { showFooter2:true},
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    // {
    //   path: '/fr/categorie/:categoryId',
    //   name: 'DetailService',
    //   component: () => import('../views/EDetailServices.vue'),
    // },
    {
      path: '/hotel',
      name: 'hotel',
      component: () => import('../views/hotel/EHotelView.vue'),
      meta: { hideComponent: true },
    },
    {
      path: '/recherche/:id',
      name: 'recherche',
      component: () => import('../components/services/FilterView.vue'),
      meta: { hideComponent: true , showHeader2:true ,showFooter2:true},
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/ELoginView.vue'),
      meta: { hideComponent: true, },

    },
    {
      path: '/addBusiness',
      name: 'addBusiness',
      component: () => import('../views/EAddBusiness.vue'),
      meta: { showFooter2:true},
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/travels/ECheckingView.vue'),
      meta: { hideComponent: true , showHeader2:false},
    },    {
      path: '/travel/:id',
      name: 'travel',
      component: () => import('../views/travels/EAgencyView.vue'),
      meta: { hideComponent: true },

    },
    {
      path: '/all_service/:id',
      name: 'all_service',
      component: () => import('@/views/allServices/EServiceDetailView.vue'),
      meta: { hideComponent: true , showHeader2:true ,showFooter2:true},
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: () => import('@/views/restaurant/ERestaurantDetail.vue'),
      meta: { hideComponent: true , showHeader2:true ,showFooter2:true},
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/restaurant/EMenu.vue'),
      meta: { hideComponent: true },
    },
    {
      path: '/recherche/:serviceId/:placeId',
      name: 'services',
      component: () => import('@/views/allServices/EServiceView.vue'),
      meta: { hideComponent: true, showHeader2: true, showFooter2: true },
    },
    {
      path: '/bookingHotel',
      name: 'booking',
      component: () => import('@/views/hotel/EBookingHotelView.vue'),
      meta: { hideComponent: true , showHeader2:true ,showFooter2:true},
    },

  ],
})

// router.beforeEach((to, from, next) => {
//   const footerStore = useFooterStore()

//   if (to.fullPath != '/') {
//     footerStore.updateFooter(false)
//     console.log('to.fullPath', to.fullPath)
//   }

//   next()
// })
export default router
