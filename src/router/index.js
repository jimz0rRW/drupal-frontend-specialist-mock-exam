import { createRouter, createWebHistory } from 'vue-router'
const Exam = () => import('../views/Exam.vue')
const Review = () => import('../views/Review.vue')
const SectionReview = () => import('../views/SectionReview.vue')
const Sessions = () => import('../views/Sessions.vue')
const Login = () => import('../views/Login.vue')
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Exam',
    component: Exam,
    meta: { requiresAuth: true }
  },
  {
    path: '/section/:section/review',
    name: 'SectionReview',
    component: SectionReview,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/review',
    name: 'Review',
    component: Review,
    meta: { requiresAuth: true }
  },
  {
    path: '/sessions',
    name: 'Sessions',
    component: Sessions,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Initialize auth if needed
  if (!authStore.user && authStore.isAuthenticated === false) {
    await authStore.initAuth()
  }
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router

