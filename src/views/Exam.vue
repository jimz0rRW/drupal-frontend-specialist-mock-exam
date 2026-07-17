<template>
  <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-4xl">
    <!-- Timer Widget -->
    <ExamTimer />
    
    <!-- Exam Selection -->
    <div class="mb-4 sm:mb-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
      <label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Select Exam Set</label>
      <select
        :value="selectedExamType"
        @change="onExamSelection($event.target.value)"
        class="block w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400"
      >
        <option v-for="option in availableExamOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <p v-if="examLoadError" class="mt-2 text-sm text-red-600 dark:text-red-400">{{ examLoadError }}</p>
    </div>

    <div v-if="isLoadingExam" class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400">Loading {{ selectedExamLabel }}...</p>
    </div>

    <div v-else-if="questions.length === 0" class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400 mb-4">No questions loaded. Please verify the selected exam set has questions.</p>
      <button 
        @click="loadSampleQuestions" 
        class="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
      >
        Load Sample Questions
      </button>
    </div>

    <div v-else>
      <!-- Section Info -->
      <div class="mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 sm:p-4">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3">
          <h2 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Section {{ currentSection }} of {{ totalSections }}
            <span
              v-if="currentSectionLabel"
              class="block text-sm font-normal text-gray-600 dark:text-gray-300 mt-1 sm:mt-0"
            >
              {{ currentSectionLabel }}
            </span>
          </h2>
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              @click="goToSessions"
              class="px-3 py-1 bg-green-500 text-white rounded text-xs sm:text-sm hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 w-full sm:w-auto"
            >
              View Sessions
            </button>
            <button
              @click="handleLogout"
              class="px-3 py-1 bg-gray-500 text-white rounded text-xs sm:text-sm hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 w-full sm:w-auto"
            >
              Logout ({{ authStore.user?.username }})
            </button>
            <span v-if="currentSectionRange" class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {{ currentSectionRange }}
            </span>
          </div>
        </div>
        
        <!-- Section Navigation -->
        <div class="mt-3">
          <label class="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Jump to Section:</label>
          <select
            :value="currentSection"
            @change="goToSelectedSection($event.target.value)"
            class="block w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400"
          >
            <option
              v-for="sectionItem in sections"
              :key="sectionItem.index"
              :value="sectionItem.index"
            >
              {{ sectionItem.label }}<template v-if="sectionItem.questionRangeLabel"> ({{ sectionItem.questionRangeLabel }})</template>
            </option>
          </select>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="mb-4 sm:mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            Question {{ questionNumberInSection }} of {{ sectionQuestions.length }} ({{ sectionDisplayName }})
          </span>
          <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ Math.round(progress) }}%</span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            class="bg-blue-500 dark:bg-blue-600 h-2 rounded-full transition-all duration-300" 
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </div>

      <!-- Question Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
        <div v-if="currentQuestion">
          <h2 class="text-base sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
            {{ currentQuestion.question || `Question ${currentQuestion.id} (text not loaded)` }}
          </h2>
          <p v-if="currentQuestion.multipleAnswers" class="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-2 italic">
            (Select all that apply)
          </p>
        </div>

        <!-- Multiple Choice Options -->
        <div class="space-y-3">
          <label
            v-for="(option, shuffledIndex) in shuffledOptions"
            :key="shuffledIndex"
            class="flex items-start p-3 sm:p-4 border-2 rounded-lg transition-colors"
            :class="{
              // Before submission
              'border-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-500': isSelected(shuffledIndex) && !isSubmitted,
              'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 bg-white dark:bg-gray-800': !isSelected(shuffledIndex) && !isSubmitted,
              'cursor-pointer': !isSubmitted,
              // After submission - correct answer selected
              'border-green-500 bg-green-100 dark:bg-green-900/30 dark:border-green-500': isSubmitted && isSelected(shuffledIndex) && isCorrectAnswer(shuffledIndex),
              // After submission - correct answer NOT selected (missed)
              'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-500': isSubmitted && !isSelected(shuffledIndex) && isCorrectAnswer(shuffledIndex),
              // After submission - incorrect answer selected
              'border-red-500 bg-red-100 dark:bg-red-900/30 dark:border-red-500': isSubmitted && isSelected(shuffledIndex) && !isCorrectAnswer(shuffledIndex),
              // After submission - incorrect answer not selected
              'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800': isSubmitted && !isSelected(shuffledIndex) && !isCorrectAnswer(shuffledIndex),
              'cursor-not-allowed': isSubmitted
            }"
          >
            <input
              :type="currentQuestion.multipleAnswers ? 'checkbox' : 'radio'"
              :name="`question-${currentQuestion.id}`"
              :value="shuffledIndex"
              :checked="isSelected(shuffledIndex)"
              :disabled="isSubmitted"
              @change="handleAnswerChange(shuffledIndex, $event)"
              class="mt-1 mr-3"
            />
            <span class="flex-1 text-sm sm:text-base text-gray-700 dark:text-gray-300">{{ option }}</span>
            <span v-if="isSubmitted && isCorrectAnswer(shuffledIndex)" class="ml-2 text-xs sm:text-sm text-green-600 dark:text-green-400 font-semibold">
              ✓ Correct Answer
            </span>
            <span v-else-if="isSubmitted && isSelected(shuffledIndex) && !isCorrectAnswer(shuffledIndex)" class="ml-2 text-xs sm:text-sm text-red-600 dark:text-red-400 font-semibold">
              ✗ Your Answer (Incorrect)
            </span>
          </label>
        </div>
        
        <!-- Validation Result -->
        <div v-if="isSubmitted" class="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg" :class="isAnswerCorrect ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400' : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-400'">
          <div class="flex items-center mb-2">
            <span v-if="isAnswerCorrect" class="text-green-700 dark:text-green-400 font-semibold text-base sm:text-lg">
              ✓ Correct Answer!
            </span>
            <span v-else class="text-red-700 dark:text-red-400 font-semibold text-base sm:text-lg">
              ✗ Incorrect Answer
            </span>
          </div>
        </div>
        
        <!-- Explanation -->
        <div v-if="isSubmitted && currentQuestion.explanation" class="mt-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 class="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Explanation:</h3>
          <p class="text-sm sm:text-base text-gray-700 dark:text-gray-300">{{ currentQuestion.explanation }}</p>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-0">
        <button
          @click="previousQuestion"
          :disabled="!canGoPrevious"
          class="px-4 sm:px-6 py-2 bg-gray-500 dark:bg-gray-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 dark:hover:bg-gray-600 text-sm sm:text-base"
        >
          Previous
        </button>

        <div class="flex gap-2">
          <button
            v-if="isSubmitted && isLastQuestionInSection"
            @click="finishSection"
            class="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 dark:hover:bg-green-700 text-sm sm:text-base"
          >
            Finish {{ sectionDisplayName }}
          </button>
          <button
            v-else-if="isSubmitted && !isLastQuestionInSection"
            @click="nextQuestion"
            class="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 text-sm sm:text-base"
          >
            Next
          </button>
          <button
            v-else
            @click="submitAnswer"
            :disabled="!hasAnswer"
            class="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            Submit Answer
          </button>
        </div>
      </div>

      <!-- Question Navigation Grid (Current Section Only) -->
      <div class="mt-6 sm:mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 sm:p-4">
        <h3 class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Questions in Section {{ currentSection }} ({{ sectionQuestions.length }} questions total):
        </h3>
        <div class="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
          <button
            v-for="(q, sectionIndex) in sectionQuestions"
            :key="q.id"
            @click="goToQuestionInSection(sectionIndex)"
            class="px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded transition-colors font-medium"
            :class="getQuestionButtonClass(q.id, sectionIndex)"
          >
            {{ currentSectionStartIndex + sectionIndex + 1 }}
          </button>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2 space-y-1 sm:space-y-0 sm:space-x-3">
          <span class="inline-flex items-center"><span class="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 dark:bg-blue-600 rounded mr-1"></span> Current question</span>
          <span class="inline-flex items-center"><span class="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400 rounded mr-1"></span> Correct</span>
          <span class="inline-flex items-center"><span class="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-red-100 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-400 rounded mr-1"></span> Incorrect</span>
          <span class="inline-flex items-center"><span class="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-500 dark:border-yellow-400 rounded mr-1"></span> Answer saved (not submitted)</span>
          <span class="inline-flex items-center"><span class="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-gray-200 dark:bg-gray-700 rounded mr-1"></span> Not answered</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useExamStore } from '../stores/exam'
import { useAuthStore } from '../stores/auth'
import { loadQuestionsFromMarkdown } from '../utils/questionLoader'
import ExamTimer from '../components/ExamTimer.vue'

const router = useRouter()
const examStore = useExamStore()
const authStore = useAuthStore()

const { examType, sections, currentSectionData, currentSectionLabel, currentSectionRange } = storeToRefs(examStore)

const examCounts = ref({ extracted: 200, generated: 300 })

const availableExamOptions = computed(() => [
  { value: 'extracted', label: `Extracted Exam (${examCounts.value.extracted} questions)` },
  { value: 'generated', label: `Generated Exam (${examCounts.value.generated} questions)` }
])

const selectedExamType = ref(examType.value || 'extracted')
const isLoadingExam = ref(false)
const examLoadError = ref('')

const selectedExamLabel = computed(() => {
  const option = availableExamOptions.value.find(opt => opt.value === selectedExamType.value)
  return option ? option.label : 'Selected Exam'
})

const questions = computed(() => examStore.questions)
const currentQuestion = computed(() => examStore.currentQuestion)
const currentQuestionIndex = computed(() => examStore.currentQuestionIndex)
const currentSection = ref(examStore.currentSection)
const totalSections = computed(() => examStore.totalSections)
const totalQuestions = computed(() => examStore.totalQuestions)
const sectionQuestions = computed(() => examStore.sectionQuestions)
const questionNumberInSection = computed(() => examStore.questionNumberInSection)
const progress = computed(() => examStore.progress)
const canGoNext = computed(() => examStore.canGoNext)
const canGoPrevious = computed(() => examStore.canGoPrevious)
const isLastQuestionInSection = computed(() => examStore.isLastQuestionInSection)
const currentSectionStartIndex = computed(() => currentSectionData.value ? currentSectionData.value.startIndex : 0)
const sectionDisplayName = computed(() => currentSectionLabel.value || `Section ${currentSection.value}`)

watch(examType, (newType) => {
  if (newType && newType !== selectedExamType.value) {
    selectedExamType.value = newType
  }
})

async function loadExamByType(type) {
  const targetType = type || 'extracted'
  isLoadingExam.value = true
  examLoadError.value = ''

  try {
    const loadedQuestions = await loadQuestionsFromMarkdown(targetType)
    if (loadedQuestions.length === 0) {
      examLoadError.value = 'No questions found for the selected exam.'
      examStore.loadQuestions([], targetType)
      return
    }

    examCounts.value[targetType] = loadedQuestions.length
    examStore.loadQuestions(loadedQuestions, targetType)
  } catch (error) {
    console.error('Error loading questions:', error)
    examLoadError.value = 'Failed to load questions for the selected exam.'
  } finally {
    isLoadingExam.value = false
  }
}

async function onExamSelection(type) {
  if (!type) {
    return
  }

  const currentType = examType.value || selectedExamType.value || 'extracted'

  if (type === currentType && questions.value.length > 0) {
    selectedExamType.value = type
    return
  }

  if (questions.value.length > 0 && !isLoadingExam.value) {
    const confirmReset = confirm('Switching exam will reset your current progress. Continue?')
    if (!confirmReset) {
      selectedExamType.value = currentType
      return
    }
  }

  selectedExamType.value = type
  await loadExamByType(type)
}

// Check if current question has been submitted
const isSubmitted = computed(() => {
  if (!currentQuestion.value) return false
  return examStore.isQuestionSubmitted(currentQuestion.value.id)
})

// Check if current answer is correct
const isAnswerCorrect = computed(() => {
  if (!currentQuestion.value) return false
  return examStore.isAnswerCorrect(currentQuestion.value.id)
})

// Check if user has selected an answer
const hasAnswer = computed(() => {
  if (!currentQuestion.value) return false
  const answer = examStore.getAnswer(currentQuestion.value.id)
  return answer && answer.length > 0
})

// Get shuffled options for current question
const shuffledOptions = computed(() => {
  if (!currentQuestion.value) return []
  return examStore.getShuffledOptionsArray(currentQuestion.value.id)
})

// Sync currentSection ref with store
watch(() => examStore.currentSection, (newSection) => {
  currentSection.value = newSection
})

// Save session before page unload
const handleBeforeUnload = async (event) => {
  if (!examStore.isExamComplete) {
    // Save session as in-progress
    await examStore.saveCurrentSession(false)
  }
}

onMounted(async () => {
  try {
    const initialType = examType.value || selectedExamType.value || 'extracted'
    selectedExamType.value = initialType

    if (questions.value.length === 0) {
      await loadExamByType(initialType)
    } else {
      examCounts.value[initialType] = questions.value.length
      currentSection.value = examStore.currentSection
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
  } catch (error) {
    console.error('Error loading questions:', error)
    examLoadError.value = 'Failed to load questions for the selected exam.'
  }
})

onBeforeUnmount(() => {
  // Remove beforeunload handler
  window.removeEventListener('beforeunload', handleBeforeUnload)
  // Save session one more time before component unmounts
  if (!examStore.isExamComplete) {
    examStore.saveCurrentSession(false)
  }
})

function isSelected(shuffledIndex) {
  if (!currentQuestion.value) return false
  const currentAnswer = examStore.getAnswer(currentQuestion.value.id) || []
  // Convert shuffled index to original index
  const originalIndex = examStore.shuffledToOriginalIndex(currentQuestion.value.id, shuffledIndex)
  // Check if the original index is in the answer array
  return Array.isArray(currentAnswer) && currentAnswer.includes(originalIndex)
}

function handleAnswerChange(shuffledIndex, event) {
  if (!currentQuestion.value) return
  
  // Convert shuffled index to original index
  const originalIndex = examStore.shuffledToOriginalIndex(currentQuestion.value.id, shuffledIndex)
  const currentAnswer = examStore.getAnswer(currentQuestion.value.id) || []
  let newAnswer

  if (currentQuestion.value.multipleAnswers) {
    // Multiple choice - toggle option
    if (event.target.checked) {
      newAnswer = [...currentAnswer, originalIndex]
    } else {
      newAnswer = currentAnswer.filter(idx => idx !== originalIndex)
    }
  } else {
    // Single choice
    newAnswer = event.target.checked ? [originalIndex] : []
  }

  examStore.setAnswer(currentQuestion.value.id, newAnswer)
}

function questionHasAnswer(questionId) {
  const answer = examStore.getAnswer(questionId)
  return answer && answer.length > 0
}

function questionIsSubmitted(questionId) {
  return examStore.isQuestionSubmitted(questionId)
}

function questionIsCorrect(questionId) {
  return questionIsSubmitted(questionId) && examStore.isAnswerCorrect(questionId)
}

function questionIsIncorrect(questionId) {
  return questionIsSubmitted(questionId) && !examStore.isAnswerCorrect(questionId)
}

function questionHasSavedAnswer(questionId) {
  return questionHasAnswer(questionId) && !questionIsSubmitted(questionId)
}

function isCorrectAnswer(shuffledIndex) {
  if (!currentQuestion.value) return false
  // Use the store helper to check if shuffled index is correct
  return examStore.isShuffledIndexCorrect(currentQuestion.value.id, shuffledIndex)
}

function submitAnswer() {
  if (!currentQuestion.value) return
  if (!hasAnswer.value) return
  
  // Mark question as submitted
  examStore.submitAnswer(currentQuestion.value.id)
}

function nextQuestion() {
  examStore.nextQuestion()
}

function previousQuestion() {
  examStore.previousQuestion()
}

function goToQuestion(index) {
  examStore.goToQuestion(index)
}

function finishSection() {
  // Navigate to section review
  router.push(`/section/${examStore.currentSection}/review`)
}

function goToQuestionInSection(sectionIndex) {
  const sectionStart = currentSectionStartIndex.value
  examStore.goToQuestion(sectionStart + sectionIndex)
}

function isCurrentQuestionInSection(sectionIndex) {
  const sectionStart = currentSectionStartIndex.value
  return currentQuestionIndex.value === sectionStart + sectionIndex
}

function getQuestionButtonClass(questionId, sectionIndex) {
  if (isCurrentQuestionInSection(sectionIndex)) {
    return 'bg-blue-500 dark:bg-blue-600 text-white ring-2 ring-blue-300 dark:ring-blue-400'
  }
  if (questionIsCorrect(questionId)) {
    return 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50'
  }
  if (questionIsIncorrect(questionId)) {
    return 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-400 text-red-800 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
  }
  if (questionHasSavedAnswer(questionId)) {
    return 'bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-500 dark:border-yellow-400 text-yellow-800 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/50'
  }
  return 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
}

function goToSelectedSection(sectionNum) {
  const section = parseInt(sectionNum, 10)
  if (section >= 1 && section <= totalSections.value) {
    examStore.goToSection(section)
  }
}

function finishExam() {
  examStore.finishExam()
  router.push('/review')
}

function goToSessions() {
  router.push('/sessions')
}

async function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    await authStore.logout()
    router.push('/login')
  }
}

function loadSampleQuestions() {
  // This will be replaced with actual markdown loading
  const sampleQuestions = [
    {
      id: 1,
      question: 'What is Vue.js?',
      options: ['A JavaScript framework', 'A CSS library', 'A database', 'A server'],
      correctAnswers: [0],
      multipleAnswers: false
    },
    {
      id: 2,
      question: 'Which of the following are Vue.js features?',
      options: ['Reactive data binding', 'Component-based architecture', 'Virtual DOM', 'All of the above'],
      correctAnswers: [0, 1, 2],
      multipleAnswers: true
    }
  ]
  examLoadError.value = ''
  isLoadingExam.value = false
  examStore.loadQuestions(sampleQuestions, selectedExamType.value || 'extracted')
}
</script>

