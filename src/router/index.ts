import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('@/pages/TeachersPage.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('@/pages/StudentsPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/ContactPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/pages/ContactsPage.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})