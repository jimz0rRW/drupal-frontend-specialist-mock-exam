<template>
  <div class="container mx-auto px-4 py-8 max-w-6xl">
    <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-8 mb-6">
      <h1 class="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Section {{ currentSection }} Review
      </h1>
      <div v-if="sectionDomainLabel || sectionRangeLabel" class="mb-6">
        <p v-if="sectionDomainLabel" class="text-gray-700 dark:text-gray-200 font-medium">{{ sectionDomainLabel }}</p>
        <p v-if="sectionRangeLabel" class="text-sm text-gray-500 dark:text-gray-400">{{ sectionRangeLabel }}</p>
      </div>
      
      <!-- Score Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-center border border-blue-100 dark:border-blue-800/60">
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-300">{{ sectionScore.correct }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Correct</div>
        </div>
        <div class="bg-red-50 dark:bg-red-900/30 rounded-lg p-4 text-center border border-red-100 dark:border-red-800/60">
          <div class="text-2xl font-bold text-red-600 dark:text-red-300">{{ sectionScore.total - sectionScore.correct }}</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Incorrect</div>
        </div>
        <div class="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 text-center border border-green-100 dark:border-green-800/60">
          <div class="text-2xl font-bold text-green-600 dark:text-green-300">{{ sectionScore.percentage }}%</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">Score</div>
        </div>
      </div>

      <!-- Results Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-16">
                #
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Question
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Your Answer
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Correct Answer
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-24">
                Result
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            <tr
              v-for="result in sectionResults"
              :key="result.id"
              :class="{
                'bg-green-50 dark:bg-green-900/20': result.isCorrect,
                'bg-red-50 dark:bg-red-900/20': !result.isCorrect
              }"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                {{ result.id }}
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                {{ result.question }}
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                <div v-if="result.userAnswer.length === 0" class="text-gray-400 dark:text-gray-500 italic">
                  No answer
                </div>
                <div v-else>
                  <span
                    v-for="(answerIdx, idx) in result.userAnswer"
                    :key="idx"
                    class="inline-block mr-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded"
                  >
                    {{ getOptionLabel(result.options, answerIdx) }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                <span
                  v-for="(answerIdx, idx) in result.correctAnswer"
                  :key="idx"
                  class="inline-block mr-2 px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded"
                >
                  {{ getOptionLabel(result.options, answerIdx) }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  :class="{
                    'text-green-600 dark:text-green-300 font-bold': result.isCorrect,
                    'text-red-600 dark:text-red-300 font-bold': !result.isCorrect
                  }"
                >
                  {{ result.isCorrect ? '✓ Correct' : '✗ Incorrect' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section Navigation -->
      <div class="mt-6 mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Jump to Another Section:</label>
        <select
          :value="currentSection"
          @change="goToSectionFromReview($event.target.value)"
          class="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400"
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

      <!-- Action Buttons -->
      <div class="mt-8 flex justify-between items-center">
        <button
          v-if="currentSection > 1"
          @click="goToPreviousSection"
          class="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          Previous Section
        </button>
        <div v-else></div>

        <div class="flex gap-4">
          <button
            @click="goBackToSection"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Back to {{ sectionDisplayName }}
          </button>
          <button
            v-if="currentSection < totalSections"
            @click="goToNextSection"
            class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500"
          >
            Continue to Section {{ currentSection + 1 }}
          </button>
          <button
            v-else
            @click="goToFinalReview"
            class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500"
          >
            Final Review
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useExamStore } from '../stores/exam'
import { storeToRefs } from 'pinia'

const router = useRouter()
const route = useRoute()
const examStore = useExamStore()
const { sections } = storeToRefs(examStore)

// Get section from route params
const sectionNum = computed(() => parseInt(route.params.section, 10) || 1)
const currentSection = computed(() => sectionNum.value)
const sectionMeta = computed(() => sections.value.find(section => section.index === currentSection.value) || null)
const sectionDomainLabel = computed(() => sectionMeta.value && sectionMeta.value.domain ? sectionMeta.value.domain : '')
const sectionRangeLabel = computed(() => sectionMeta.value?.questionRangeLabel || '')
const sectionDisplayName = computed(() => sectionDomainLabel.value || `Section ${currentSection.value}`)
const totalSections = computed(() => examStore.totalSections)
const sectionResults = computed(() => examStore.getSectionResults(currentSection.value))
const sectionScore = computed(() => examStore.getSectionScore(currentSection.value))

function getOptionLabel(options, index) {
  if (!options || index < 0 || index >= options.length) return 'N/A'
  return options[index]
}

function goBackToSection() {
  examStore.goToSection(currentSection.value)
  router.push('/')
}

function goToPreviousSection() {
  examStore.goToSection(currentSection.value - 1)
  router.push('/')
}

function goToNextSection() {
  examStore.goToSection(currentSection.value + 1)
  router.push('/')
}

function goToFinalReview() {
  examStore.finishExam()
  router.push('/review')
}

function goToSectionFromReview(sectionNum) {
  const section = parseInt(sectionNum, 10)
  if (section >= 1 && section <= totalSections.value) {
    examStore.goToSection(section)
    router.push('/')
  }
}
</script>

