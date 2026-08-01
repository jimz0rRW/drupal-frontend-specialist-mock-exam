<template>
  <div class="fixed top-16 sm:top-20 right-3 sm:right-4 z-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 min-w-[140px] sm:min-w-[160px]">
    <!-- Simulation countdown: no controls, turns red when running low -->
    <div v-if="isSimulation" class="flex flex-col items-center gap-2">
      <div class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        Time Left
      </div>
      <div
        class="text-xl sm:text-2xl font-mono font-bold"
        :class="isRunningLow ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-gray-100'"
      >
        {{ formattedCountdown }}
      </div>
      <div v-if="isRunningLow" class="text-xs text-red-600 dark:text-red-400 font-medium">
        Wrapping up soon
      </div>
    </div>

    <!-- Practice stopwatch with manual controls -->
    <div v-else class="flex flex-col items-center gap-2">
      <div class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        Timer
      </div>
      <div class="text-xl sm:text-2xl font-mono font-bold text-gray-900 dark:text-gray-100">
        {{ formattedTime }}
      </div>
      <div class="flex gap-2">
        <button
          v-if="!isTimerRunning"
          @click="startTimer"
          class="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-500 dark:bg-green-600 text-white text-xs sm:text-sm rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition-colors flex items-center gap-1.5"
          title="Start timer"
        >
          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
          </svg>
          Start
        </button>
        <button
          v-else
          @click="pauseTimer"
          class="px-3 sm:px-4 py-1.5 sm:py-2 bg-yellow-500 dark:bg-yellow-600 text-white text-xs sm:text-sm rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors flex items-center gap-1.5"
          title="Pause timer"
        >
          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
          Pause
        </button>
        <button
          @click="resetTimer"
          class="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-500 dark:bg-gray-600 text-white text-xs sm:text-sm rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5"
          title="Reset timer"
        >
          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
          </svg>
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount } from 'vue'
import { useExamStore } from '../stores/exam'

const examStore = useExamStore()

const isSimulation = computed(() => examStore.isSimulation)
const isTimerRunning = computed(() => examStore.isTimerRunning)
const formattedTime = computed(() => examStore.formatTimerDuration(examStore.timerElapsed))
const formattedCountdown = computed(() => examStore.formatTimerDuration(examStore.countdownRemaining))
const isRunningLow = computed(() => examStore.countdownRemaining > 0 && examStore.countdownRemaining <= 5 * 60)

function startTimer() {
  examStore.startTimer()
}

function pauseTimer() {
  examStore.pauseTimer()
}

function resetTimer() {
  if (confirm('Are you sure you want to reset the timer? This cannot be undone.')) {
    examStore.resetTimer()
  }
}

// Cleanup intervals on unmount (remaining countdown persists via session save)
onBeforeUnmount(() => {
  if (examStore.isTimerRunning) {
    examStore.pauseTimer()
  }
  if (examStore.isCountdownRunning) {
    examStore.pauseCountdown()
  }
})
</script>
