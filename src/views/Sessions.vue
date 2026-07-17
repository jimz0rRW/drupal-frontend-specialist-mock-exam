<template>
  <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-8 mb-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">Exam Sessions</h1>
        <button
          v-if="sessions.length > 0"
          @click="confirmClearAll"
          class="px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded-lg hover:bg-red-600 dark:hover:bg-red-700 text-sm w-full sm:w-auto"
        >
          Clear All Sessions
        </button>
      </div>

      <div v-if="sessions.length === 0" class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400 mb-4">No saved sessions yet.</p>
        <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Complete an exam to save your results here.</p>
        <button
          @click="goToExam"
          class="mt-4 px-6 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
        >
          Start New Exam
        </button>
      </div>

      <div v-else class="space-y-3 sm:space-y-4">
        <!-- Sessions List -->
        <div
          v-for="session in sessions"
          :key="session.id"
          class="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 hover:shadow-md dark:hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          :class="{
            'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20': session.status === 'in-progress'
          }"
        >
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-start gap-3 sm:gap-0">
            <div class="flex-1 w-full">
              <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Session {{ formatDate(session.endTime || session.startTime) }}
                  <span v-if="session.status === 'in-progress'" class="ml-2 text-xs sm:text-sm font-normal text-blue-600 dark:text-blue-400">
                    (In Progress)
                  </span>
                </h3>
                <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {{ formatExamType(session.examType) }}
                </span>
                <span
                  v-if="(session.status === 'completed' || !session.status) && session.score"
                  class="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit"
                  :class="{
                    'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300': session.score.percentage >= 70,
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300': session.score.percentage >= 50 && session.score.percentage < 70,
                    'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300': session.score.percentage < 50
                  }"
                >
                  {{ session.score.percentage }}%
                </span>
                <span
                  v-else-if="session.status === 'in-progress'"
                  class="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                >
                  In Progress
                </span>
              </div>
              
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-3 text-xs sm:text-sm">
                <div v-if="session.status === 'completed'">
                  <span class="text-gray-500 dark:text-gray-400">Correct:</span>
                  <span class="ml-2 font-semibold text-green-600 dark:text-green-400">{{ session.score?.correct || 0 }}</span>
                </div>
                <div v-if="session.status === 'completed'">
                  <span class="text-gray-500 dark:text-gray-400">Incorrect:</span>
                  <span class="ml-2 font-semibold text-red-600 dark:text-red-400">{{ (session.score?.total || 0) - (session.score?.correct || 0) }}</span>
                </div>
                <div>
                  <span class="text-gray-500 dark:text-gray-400">Total:</span>
                  <span class="ml-2 font-semibold text-gray-700 dark:text-gray-300">{{ session.totalQuestions || session.score?.total || 0 }}</span>
                </div>
                <div>
                  <span class="text-gray-500 dark:text-gray-400">Duration:</span>
                  <span class="ml-2 font-semibold text-gray-700 dark:text-gray-300">
                    <span v-if="session.timerElapsed">{{ formatTimerDuration(session.timerElapsed) }}</span>
                    <span v-else>{{ formatDuration(session.startTime, session.endTime) }}</span>
                  </span>
                </div>
                <div v-if="session.status === 'in-progress'">
                  <span class="text-gray-500 dark:text-gray-400">Progress:</span>
                  <span class="ml-2 font-semibold text-blue-600 dark:text-blue-400">
                    Question {{ (session.currentQuestionIndex || 0) + 1 }} of {{ session.totalQuestions || 0 }}
                  </span>
                </div>
              </div>
              
              <div class="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Started: {{ formatDateTime(session.startTime) }}
                <span v-if="session.endTime"> • Ended: {{ formatDateTime(session.endTime) }}</span>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:ml-4">
              <button
                v-if="session.status === 'in-progress'"
                @click="resumeSession(session)"
                class="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-700 text-sm w-full sm:w-auto"
              >
                Resume
              </button>
              <button
                v-if="session.status === 'completed' || (!session.status && session.endTime)"
                @click="viewSession(session)"
                class="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 text-sm w-full sm:w-auto"
              >
                View Details
              </button>
              <button
                @click="deleteSession(session.id)"
                class="px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded-lg hover:bg-red-600 dark:hover:bg-red-700 text-sm w-full sm:w-auto"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { getAllSessions, deleteSession as deleteSessionStorage, clearAllSessions, getSession } from '../utils/sessionStorage'
import { useExamStore } from '../stores/exam'
import { loadQuestionsFromMarkdown } from '../utils/questionLoader'

const router = useRouter()
const examStore = useExamStore()
const { examType } = storeToRefs(examStore)

const sessions = ref([])

async function ensureExamQuestions(type = 'generated') {
  const targetType = type || 'generated'

  if (examType.value === targetType && examStore.questions.length > 0) {
    return true
  }

  try {
    const loadedQuestions = await loadQuestionsFromMarkdown(targetType)
    if (!loadedQuestions.length) {
      console.warn(`No questions found for exam type: ${targetType}`)
      return false
    }

    examStore.loadQuestions(loadedQuestions, targetType)
    return true
  } catch (error) {
    console.error('Error loading questions for sessions view:', error)
    return false
  }
}

onMounted(async () => {
  await loadSessions()

  if (examStore.questions.length === 0) {
    await ensureExamQuestions(examType.value || 'generated')
  }
})

async function loadSessions() {
  try {
    const allSessions = await getAllSessions()
    // Sort sessions: in-progress first, then by date (newest first)
    sessions.value = allSessions.sort((a, b) => {
      // If status is missing, assume completed (for backward compatibility)
      const aStatus = a.status || 'completed'
      const bStatus = b.status || 'completed'
      
      // In-progress sessions first
      if (aStatus === 'in-progress' && bStatus !== 'in-progress') return -1
      if (aStatus !== 'in-progress' && bStatus === 'in-progress') return 1
      
      // Then sort by date (newest first)
      const aDate = new Date(a.endTime || a.startTime)
      const bDate = new Date(b.endTime || b.startTime)
      return bDate - aDate
    })
  } catch (error) {
    console.error('Failed to load sessions:', error)
  }
}

function formatDate(dateString) {
  if (!dateString) return 'Unknown'
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function formatExamType(type) {
  if (type === 'sample') {
    return 'Sample Exam'
  }

  if (!type || type === 'generated') {
    return 'Practice Exam'
  }

  const normalized = String(type)
  return normalized.charAt(0).toUpperCase() + normalized.slice(1)
}

function formatDateTime(dateString) {
  if (!dateString) return 'Unknown'
  const date = new Date(dateString)
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
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
    return `${diffHours}h ${mins}m`
  }
  return `${mins}m`
}

function formatTimerDuration(seconds) {
  if (!seconds) return 'N/A'
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`
  }
  return `${secs}s`
}

async function viewSession(session) {
  try {
    const loaded = await ensureExamQuestions('generated')

    if (!loaded) {
      alert('Unable to load questions for this session. Please verify the question set exists.')
      return
    }

    // Load the session into the store
    examStore.loadSession(session)
    // Navigate to review page
    router.push('/review')
  } catch (error) {
    console.error('Failed to view session:', error)
    alert('Failed to load session. Please try again.')
  }
}

async function resumeSession(session) {
  try {
    const loaded = await ensureExamQuestions('generated')

    if (!loaded) {
      alert('Unable to load questions for this session. Please verify the question set exists.')
      return
    }

    // Load the session into the store (will restore position)
    if (await examStore.resumeSession(session)) {
      // Navigate to exam page to continue
      router.push('/')
    } else {
      alert('Failed to resume session. Please try again.')
    }
  } catch (error) {
    console.error('Failed to resume session:', error)
    alert('Failed to resume session. Please try again.')
  }
}

async function deleteSession(sessionId) {
  if (confirm('Are you sure you want to delete this session?')) {
    try {
      await deleteSessionStorage(sessionId)
      await loadSessions()
    } catch (error) {
      console.error('Failed to delete session:', error)
      alert('Failed to delete session. Please try again.')
    }
  }
}

async function confirmClearAll() {
  if (confirm('Are you sure you want to delete ALL sessions? This cannot be undone.')) {
    try {
      await clearAllSessions()
      await loadSessions()
    } catch (error) {
      console.error('Failed to clear sessions:', error)
      alert('Failed to clear sessions. Please try again.')
    }
  }
}

function goToExam() {
  router.push('/')
}
</script>

