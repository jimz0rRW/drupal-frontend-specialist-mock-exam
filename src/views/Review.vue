<template>
  <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-8 mb-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-6">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
          Exam Results
          <span
            v-if="examConfig"
            class="block text-sm font-normal text-gray-600 dark:text-gray-400 mt-1"
          >
            {{ examConfig.title }} — {{ isSimulation ? 'Simulation' : 'Practice' }}
          </span>
        </h1>
        <div v-if="sessionInfo" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <div>Session: {{ formatDate(sessionInfo.endTime || sessionInfo.startTime) }}</div>
          <div class="text-xs">{{ formatDuration(sessionInfo.startTime, sessionInfo.endTime) }}</div>
        </div>
      </div>

      <!-- Simulation pass/fail banner -->
      <div
        v-if="isSimulation && passPercent !== null"
        class="mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border-2 text-center"
        :class="hasPassed
          ? 'bg-green-50 dark:bg-green-900/30 border-green-500 dark:border-green-400'
          : 'bg-red-50 dark:bg-red-900/30 border-red-500 dark:border-red-400'"
      >
        <div
          class="text-2xl sm:text-3xl font-bold"
          :class="hasPassed ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'"
        >
          {{ hasPassed ? 'Pass' : 'Fail' }}
        </div>
        <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-1">
          You scored {{ score.percentage }}% — the official pass mark is {{ passPercent }}%.
        </p>
        <p v-if="examStore.countdownExpired" class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          Time expired — the exam was submitted automatically.
        </p>
      </div>

      <!-- Score Summary -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 sm:p-4 text-center">
          <div class="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">{{ score.correct }}</div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Correct</div>
        </div>
        <div class="bg-red-50 dark:bg-red-900/30 rounded-lg p-3 sm:p-4 text-center">
          <div class="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400">{{ score.total - score.correct }}</div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Incorrect</div>
        </div>
        <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-3 sm:p-4 text-center">
          <div class="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">{{ score.percentage }}%</div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Score</div>
        </div>
      </div>

      <!-- Per-domain breakdown (simulation) -->
      <div v-if="isSimulation && domainBreakdown.length > 0" class="mb-6 sm:mb-8">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Score by Domain</h2>
        <div class="overflow-x-auto -mx-4 sm:mx-0">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Domain</th>
                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-24">Correct</th>
                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-24">Score</th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr v-for="row in domainBreakdown" :key="row.domain">
                <td class="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">{{ row.domain }}</td>
                <td class="px-3 sm:px-6 py-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">{{ row.correct }}/{{ row.total }}</td>
                <td
                  class="px-3 sm:px-6 py-3 text-xs sm:text-sm font-semibold"
                  :class="row.percentage >= (passPercent ?? 100) ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
                >
                  {{ row.percentage }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Results Table -->
      <div class="overflow-x-auto -mx-4 sm:mx-0">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-12 sm:w-16">
                #
              </th>
              <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Question
              </th>
              <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Your Answer
              </th>
              <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Correct Answer
              </th>
              <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-20 sm:w-24">
                Result
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <tr
              v-for="result in results"
              :key="result.id"
              :class="{
                'bg-green-50 dark:bg-green-900/20': result.isCorrect,
                'bg-red-50 dark:bg-red-900/20': !result.isCorrect
              }"
            >
              <td class="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-200">
                {{ result.id }}
              </td>
              <td class="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {{ result.question }}
                <p v-if="isSimulation && result.explanation" class="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
                  {{ result.explanation }}
                </p>
              </td>
              <td class="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <div v-if="result.userAnswer.length === 0" class="text-gray-400 dark:text-gray-500 italic">
                  No answer
                </div>
                <div v-else class="flex flex-wrap gap-1">
                  <span
                    v-for="(answerIdx, idx) in result.userAnswer"
                    :key="idx"
                    class="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                  >
                    {{ getOptionLabel(result.options, answerIdx) }}
                  </span>
                </div>
              </td>
              <td class="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="(answerIdx, idx) in result.correctAnswer"
                    :key="idx"
                    class="inline-block px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs"
                  >
                    {{ getOptionLabel(result.options, answerIdx) }}
                  </span>
                </div>
              </td>
              <td class="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                <span
                  :class="{
                    'text-green-600 dark:text-green-400 font-bold': result.isCorrect,
                    'text-red-600 dark:text-red-400 font-bold': !result.isCorrect
                  }"
                >
                  {{ result.isCorrect ? '✓ Correct' : '✗ Incorrect' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Action Buttons -->
      <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
        <button
          @click="goToExams"
          class="px-4 sm:px-6 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 text-sm sm:text-base"
        >
          Start New Exam
        </button>
        <button
          @click="goToSessions"
          class="px-4 sm:px-6 py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-700 text-sm sm:text-base"
        >
          View All Sessions
        </button>
        <button
          v-if="!isSimulation"
          @click="goToExam"
          class="px-4 sm:px-6 py-2 bg-gray-500 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 text-sm sm:text-base"
        >
          Back to Exam
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useExamStore } from '../stores/exam'
import { getSession } from '../utils/sessionStorage'

const router = useRouter()
const examStore = useExamStore()

const results = computed(() => examStore.results)
const score = computed(() => examStore.score)
const examConfig = computed(() => examStore.examConfig)
const isSimulation = computed(() => examStore.isSimulation)
const domainBreakdown = computed(() => examStore.domainBreakdown)
const passPercent = computed(() => examStore.passPercent)
const hasPassed = computed(() => examStore.hasPassed)

// Check if we're viewing a saved session
const sessionInfo = ref(null)

// Load session info if viewing a saved session
watch(() => examStore.currentSessionId, async (sessionId) => {
  if (sessionId) {
    try {
      sessionInfo.value = await getSession(sessionId)
    } catch (error) {
      console.error('Failed to load session info:', error)
    }
  } else {
    sessionInfo.value = null
  }
}, { immediate: true })

function formatDate(dateString) {
  if (!dateString) return 'Unknown'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function formatDuration(startTime, endTime) {
  if (!startTime || !endTime) return 'N/A'
  const start = new Date(startTime)
  const end = new Date(endTime)
  const diffMs = end - start
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const mins = diffMins % 60

  if (diffHours > 0) {
    return `Duration: ${diffHours}h ${mins}m`
  }
  return `Duration: ${mins}m`
}

function getOptionLabel(options, index) {
  if (!options || index < 0 || index >= options.length) return 'N/A'
  return options[index]
}

function goToExams() {
  router.push('/exams')
}

function goToExam() {
  router.push(`/exam/${examStore.examId}`)
}

function goToSessions() {
  router.push('/sessions')
}
</script>
