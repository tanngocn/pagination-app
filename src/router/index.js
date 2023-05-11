import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '../views/home/LayoutWrapper.vue'
import RegisterView from '../views/home/RegisterView.vue'
import UpdateView from '../views/home/UpdateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      props: route => ({ page: parseInt(route.query.page) || 1 }),
      children: [
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
        },
        {
          path: 'update',
          name: 'update',
          component: UpdateView,
        },

      ]
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
