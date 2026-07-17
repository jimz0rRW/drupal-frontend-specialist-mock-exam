import { createRouter, createWebHistory } from 'vue-router'
const Exam = () => import('../views/Exam.vue')
const Review = () => import('../views/Review.vue')
const SectionReview = () => import('../views/SectionReview.vue')
const Sessions = () => import('../views/Sessions.vue')
const Profiles = () => import('../views/Profiles.vue')
import { useProfileStore } from '../stores/profile'

const routes = [
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles
  },
  {
    path: '/login',
    redirect: '/profiles'
  },
  {
    path: '/',
    name: 'Exam',
    component: Exam,
    meta: { requiresProfile: true }
  },
  {
    path: '/section/:section/review',
    name: 'SectionReview',
    component: SectionReview,
    props: true,
    meta: { requiresProfile: true }
  },
  {
    path: '/review',
    name: 'Review',
    component: Review,
    meta: { requiresProfile: true }
  },
  {
    path: '/sessions',
    name: 'Sessions',
    component: Sessions,
    meta: { requiresProfile: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const profileStore = useProfileStore()
  profileStore.initProfiles()

  if (to.meta.requiresProfile && !profileStore.hasActiveProfile) {
    next('/profiles')
    return
  }

  // Direct visit to /profiles with an active profile → continue into the exam
  if (to.path === '/profiles' && profileStore.hasActiveProfile && !from.name) {
    next('/')
    return
  }

  next()
})

export default router
