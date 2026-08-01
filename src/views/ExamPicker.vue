<template>
  <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">Acquia Drupal Mock Exams</h1>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Pick an exam, then practice the full question bank or run a timed simulation.
        </p>
      </div>
      <div class="flex gap-2 w-full sm:w-auto">
        <button
          @click="goToSessions"
          class="px-3 py-2 bg-green-500 text-white rounded text-xs sm:text-sm hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 flex-1 sm:flex-none"
        >
          View Sessions
        </button>
        <button
          @click="switchProfile"
          class="px-3 py-2 bg-gray-500 text-white rounded text-xs sm:text-sm hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 flex-1 sm:flex-none"
        >
          Profile: {{ profileStore.activeProfile?.name }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <div
        v-for="exam in exams"
        :key="exam.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 flex flex-col"
      >
        <div class="flex-1">
          <div class="flex items-start justify-between gap-2 mb-1">
            <h2 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              {{ exam.title }}
            </h2>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-3">{{ exam.drupalVersion }}</p>

          <dl class="grid grid-cols-3 gap-2 mb-4 text-center">
            <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2">
              <dt class="text-xs text-gray-500 dark:text-gray-400">Exam length</dt>
              <dd class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {{ exam.simulation.questionCount }} questions
              </dd>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2">
              <dt class="text-xs text-gray-500 dark:text-gray-400">Duration</dt>
              <dd class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {{ exam.simulation.durationMinutes }} min
              </dd>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2">
              <dt class="text-xs text-gray-500 dark:text-gray-400">Pass mark</dt>
              <dd class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {{ exam.simulation.passPercent }}%
              </dd>
            </div>
          </dl>

          <h3 class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            Domains ({{ bankSize(exam) }} practice questions)
          </h3>
          <ul class="space-y-1 mb-4">
            <li
              v-for="domain in exam.domains"
              :key="domain.name"
              class="flex justify-between items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300"
            >
              <span>{{ domain.name }}</span>
              <span class="text-gray-500 dark:text-gray-400 ml-2 whitespace-nowrap">{{ domain.weight }}%</span>
            </li>
          </ul>
        </div>

        <div class="flex flex-col sm:flex-row gap-2 mt-auto">
          <button
            @click="startPractice(exam.id)"
            class="flex-1 px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 text-sm font-medium"
          >
            Practice
          </button>
          <button
            @click="startSimulation(exam.id)"
            class="flex-1 px-4 py-2 bg-purple-500 dark:bg-purple-600 text-white rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 text-sm font-medium"
          >
            Exam Simulation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProfileStore } from '../stores/profile'
import { EXAMS, getBankTargets } from '../exams/registry'

const router = useRouter()
const profileStore = useProfileStore()

const exams = computed(() => EXAMS)

function bankSize(exam) {
  return getBankTargets(exam).reduce((sum, target) => sum + target.count, 0)
}

function startPractice(examId) {
  router.push(`/exam/${examId}`)
}

function startSimulation(examId) {
  router.push(`/exam/${examId}/simulate`)
}

function goToSessions() {
  router.push('/sessions')
}

function switchProfile() {
  profileStore.clearActiveProfile()
  router.push('/profiles')
}
</script>
