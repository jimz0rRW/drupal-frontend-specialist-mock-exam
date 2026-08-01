import { createRouter, createWebHistory } from 'vue-router'
const Exam = () => import('../views/Exam.vue')
const ExamPicker = () => import('../views/ExamPicker.vue')
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
    path: '/',
    redirect: '/exams'
  },
  {
    path: '/exams',
    name: 'ExamPicker',
    component: ExamPicker,
    meta: { requiresProfile: true }
  },
  {
    path: '/exam/:examId',
    name: 'Exam',
    component: Exam,
    meta: { requiresProfile: true, mode: 'practice' }
  },
  {
    path: '/exam/:examId/simulate',
    name: 'ExamSimulation',
    component: Exam,
    meta: { requiresProfile: true, mode: 'simulation' }
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
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/exams'
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

  // Direct visit to /profiles with an active profile → continue to exam picker
  if (to.path === '/profiles' && profileStore.hasActiveProfile && !from.name) {
    next('/exams')
    return
  }

  next()
})

export default router
