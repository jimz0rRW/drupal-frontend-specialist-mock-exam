import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { saveSession, generateSessionId } from '../utils/sessionStorage'
import { answersMatch } from '../utils/scoring.js'

export const useExamStore = defineStore('exam', () => {
  const questions = ref([])
  const examType = ref('generated')
  const currentQuestionIndex = ref(0)
  const currentSection = ref(1) // 1-10 (20 questions per section)
  const answers = ref({})
  const submittedQuestions = ref({}) // Track which questions have been submitted
  const optionShuffling = ref({}) // Store shuffled option order for each question: { questionId: { shuffledOrder: [0,2,1,3], originalToShuffled: {0:0, 1:2, 2:1, 3:3}, shuffledToOriginal: {0:0, 1:2, 2:1, 3:3} } }
  const isExamComplete = ref(false)
  const currentSessionId = ref(null) // Track current session ID
  const sessionStartTime = ref(null) // Track when session started
  const QUESTIONS_PER_SECTION = 20
  
  // Timer state
  const timerElapsed = ref(0) // Total elapsed time in seconds
  const timerStartTime = ref(null) // When timer was started (for calculating pause/resume)
  const isTimerRunning = ref(false)
  let timerInterval = null

  const totalQuestions = computed(() => questions.value.length)

  const sections = computed(() => {
    const allQuestions = questions.value
    if (!allQuestions.length) {
      return []
    }

    const allHaveDomains = allQuestions.every(question => question?.domain && String(question.domain).trim().length > 0)

    if (allHaveDomains) {
      const groupedSections = []
      let startIndex = 0
      let currentDomain = allQuestions[0].domain

      for (let i = 1; i <= allQuestions.length; i++) {
        const nextQuestion = allQuestions[i]
        const nextDomain = nextQuestion ? nextQuestion.domain : null

        if (i === allQuestions.length || nextDomain !== currentDomain) {
          const endIndex = i
          const questionCount = endIndex - startIndex
          groupedSections.push({
            index: groupedSections.length + 1,
            domain: currentDomain,
            label: currentDomain,
            startIndex,
            endIndex,
            questionCount,
            questionRangeLabel: questionCount > 0
              ? `Questions ${startIndex + 1}-${endIndex}`
              : ''
          })

          startIndex = i
          currentDomain = nextDomain
        }
      }

      return groupedSections
    }

    const fallbackSections = []
    let startIndex = 0
    let sectionIndex = 1

    while (startIndex < allQuestions.length) {
      const endIndex = Math.min(startIndex + QUESTIONS_PER_SECTION, allQuestions.length)
      const questionCount = endIndex - startIndex

      fallbackSections.push({
        index: sectionIndex,
        domain: null,
        label: `Section ${sectionIndex}`,
        startIndex,
        endIndex,
        questionCount,
        questionRangeLabel: questionCount > 0
          ? `Questions ${startIndex + 1}-${endIndex}`
          : ''
      })

      startIndex = endIndex
      sectionIndex++
    }

    return fallbackSections
  })

  const totalSections = computed(() => sections.value.length)

  const currentSectionData = computed(() => {
    if (currentSection.value < 1 || currentSection.value > sections.value.length) {
      return null
    }
    return sections.value[currentSection.value - 1]
  })

  const currentSectionLabel = computed(() => {
    const section = currentSectionData.value
    if (!section) {
      return ''
    }
    return section.domain && String(section.domain).trim().length > 0
      ? section.domain
      : ''
  })

  const currentSectionRange = computed(() => {
    const section = currentSectionData.value
    if (!section || section.questionCount === 0) {
      return ''
    }
    const start = section.startIndex + 1
    const end = section.endIndex
    return start === end ? `Question ${start}` : `Questions ${start}-${end}`
  })

  // Get questions for current section
  const sectionQuestions = computed(() => {
    const section = currentSectionData.value
    if (!section) {
      return []
    }
    return questions.value.slice(section.startIndex, section.endIndex)
  })

  // Get current question (overall index)
  const currentQuestion = computed(() => {
    if (currentQuestionIndex.value < 0 || currentQuestionIndex.value >= questions.value.length) {
      return null
    }
    return questions.value[currentQuestionIndex.value]
  })

  // Progress within current section
  const progress = computed(() => {
    const section = currentSectionData.value
    if (!section || section.questionCount === 0) {
      return 0
    }

    const indexWithinSection = currentQuestionIndex.value - section.startIndex
    if (indexWithinSection < 0) {
      return 0
    }

    return ((indexWithinSection + 1) / section.questionCount) * 100
  })

  // Question number within section (1-based)
  const questionNumberInSection = computed(() => {
    const section = currentSectionData.value
    if (!section) {
      return 0
    }
    return currentQuestionIndex.value - section.startIndex + 1
  })

  const canGoNext = computed(() => {
    const section = currentSectionData.value
    if (!section || section.questionCount === 0) {
      return false
    }
    return currentQuestionIndex.value < section.endIndex - 1
  })

  const canGoPrevious = computed(() => {
    const section = currentSectionData.value
    if (!section || section.questionCount === 0) {
      return false
    }
    return currentQuestionIndex.value > section.startIndex
  })

  const isLastQuestionInSection = computed(() => {
    const section = currentSectionData.value
    if (!section || section.questionCount === 0) {
      return false
    }
    return currentQuestionIndex.value === section.endIndex - 1
  })

  function getSectionIndexForQuestion(questionIndex) {
    return sections.value.findIndex(section => (
      questionIndex >= section.startIndex && questionIndex < section.endIndex
    ))
  }

  function loadQuestions(loadedQuestions, type = 'generated') {
    questions.value = loadedQuestions
    examType.value = type
    currentQuestionIndex.value = 0
    currentSection.value = sections.value.length > 0 ? 1 : 0
    answers.value = {}
    submittedQuestions.value = {}
    optionShuffling.value = {}
    isExamComplete.value = false
    // Reset timer
    resetTimer()
    // Start a new session
    currentSessionId.value = generateSessionId()
    sessionStartTime.value = new Date().toISOString()
  }
  
  // Shuffle array using Fisher-Yates algorithm
  function shuffleArray(array) {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
  
  // Get or create shuffled option order for a question
  function getShuffledOptions(questionId) {
    if (!optionShuffling.value[questionId]) {
      const question = questions.value.find(q => q.id === questionId)
      if (!question || !question.options) {
        return { shuffledOptions: [], originalToShuffled: {}, shuffledToOriginal: {} }
      }
      
      // Create array of indices [0, 1, 2, 3, ...]
      const originalIndices = question.options.map((_, idx) => idx)
      // Shuffle the indices
      const shuffledOrder = shuffleArray(originalIndices)
      
      // Create mapping: original index -> shuffled index
      const originalToShuffled = {}
      // Create mapping: shuffled index -> original index
      const shuffledToOriginal = {}
      
      shuffledOrder.forEach((originalIdx, shuffledIdx) => {
        originalToShuffled[originalIdx] = shuffledIdx
        shuffledToOriginal[shuffledIdx] = originalIdx
      })
      
      // Store the mapping
      optionShuffling.value[questionId] = {
        shuffledOrder,
        originalToShuffled,
        shuffledToOriginal
      }
    }
    
    return optionShuffling.value[questionId]
  }
  
  // Get shuffled options array for display
  function getShuffledOptionsArray(questionId) {
    const question = questions.value.find(q => q.id === questionId)
    if (!question || !question.options) {
      return []
    }
    
    const shuffling = getShuffledOptions(questionId)
    return shuffling.shuffledOrder.map(originalIdx => question.options[originalIdx])
  }
  
  // Convert shuffled index to original index
  function shuffledToOriginalIndex(questionId, shuffledIndex) {
    const shuffling = getShuffledOptions(questionId)
    return shuffling.shuffledToOriginal[shuffledIndex] !== undefined
      ? shuffling.shuffledToOriginal[shuffledIndex]
      : shuffledIndex
  }
  
  // Convert original index to shuffled index
  function originalToShuffledIndex(questionId, originalIndex) {
    const shuffling = getShuffledOptions(questionId)
    return shuffling.originalToShuffled[originalIndex] !== undefined
      ? shuffling.originalToShuffled[originalIndex]
      : originalIndex
  }
  
  // Check if a shuffled index is a correct answer
  function isShuffledIndexCorrect(questionId, shuffledIndex) {
    const question = questions.value.find(q => q.id === questionId)
    if (!question) return false
    
    const originalIndex = shuffledToOriginalIndex(questionId, shuffledIndex)
    return question.correctAnswers && question.correctAnswers.includes(originalIndex)
  }

  function setAnswer(questionId, selectedAnswers) {
    answers.value[questionId] = selectedAnswers
    // Auto-save when answer changes
    autoSaveSession()
  }

  function getAnswer(questionId) {
    return answers.value[questionId] || []
  }

  function nextQuestion() {
    if (canGoNext.value) {
      currentQuestionIndex.value++
      // Auto-save when navigating
      autoSaveSession()
    }
  }

  function previousQuestion() {
    if (canGoPrevious.value) {
      currentQuestionIndex.value--
      // Auto-save when navigating
      autoSaveSession()
    }
  }

  function goToQuestion(index) {
    if (index >= 0 && index < totalQuestions.value) {
      currentQuestionIndex.value = index
      const sectionIndex = getSectionIndexForQuestion(index)
      if (sectionIndex !== -1) {
        currentSection.value = sectionIndex + 1
      }
      // Auto-save when navigating
      autoSaveSession()
    }
  }

  function goToSection(sectionNum) {
    if (sectionNum < 1 || sectionNum > totalSections.value) {
      return
    }

    const section = sections.value[sectionNum - 1]
    if (!section) {
      return
    }

    currentSection.value = sectionNum
    currentQuestionIndex.value = section.startIndex
    // Auto-save when navigating
    autoSaveSession()
  }

  function finishSection() {
    // Section is complete, can review
    return true
  }

  async function finishExam() {
    isExamComplete.value = true
    // Save session as completed when exam is finished
    await saveCurrentSession(true)
  }
  
  // Timer functions
  function startTimer() {
    if (!isTimerRunning.value) {
      isTimerRunning.value = true
      const baseTime = timerElapsed.value // Current accumulated time
      timerStartTime.value = Date.now() - (baseTime * 1000) // Adjust start time to account for existing elapsed time
      timerInterval = setInterval(() => {
        if (timerStartTime.value) {
          const elapsed = Math.floor((Date.now() - timerStartTime.value) / 1000)
          timerElapsed.value = elapsed
        }
      }, 1000)
    }
  }
  
  function pauseTimer() {
    if (isTimerRunning.value) {
      isTimerRunning.value = false
      if (timerInterval) {
        clearInterval(timerInterval)
        timerInterval = null
      }
      // Update elapsed time with the time that just passed
      if (timerStartTime.value) {
        const elapsed = Math.floor((Date.now() - timerStartTime.value) / 1000)
        timerElapsed.value = elapsed
      }
      timerStartTime.value = null
    }
  }
  
  function resetTimer() {
    pauseTimer()
    timerElapsed.value = 0
  }
  
  function getTimerDuration() {
    return timerElapsed.value
  }
  
  function formatTimerDuration(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }
  
  // Load timer state from session
  function loadTimerState(sessionData) {
    if (sessionData.timerElapsed) {
      timerElapsed.value = sessionData.timerElapsed
    }
    // Don't auto-start timer when loading a session
    isTimerRunning.value = false
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }
  
  // Save current session (in-progress or completed)
  async function saveCurrentSession(isComplete = false) {
    if (!currentSessionId.value || questions.value.length === 0) {
      return false
    }
    
    const sessionData = {
      id: currentSessionId.value,
      startTime: sessionStartTime.value,
      status: isComplete ? 'completed' : 'in-progress',
      answers: { ...answers.value },
      submittedQuestions: { ...submittedQuestions.value },
      optionShuffling: { ...optionShuffling.value }, // Save shuffled order to restore later
      currentQuestionIndex: currentQuestionIndex.value, // Save current position
      currentSection: currentSection.value, // Save current section
      totalQuestions: totalQuestions.value,
      questionIds: questions.value.map(q => q.id),
      timerElapsed: timerElapsed.value, // Save timer duration
      examType: examType.value,
      // Only include endTime and results if completed
      ...(isComplete && {
        endTime: new Date().toISOString(),
        results: results.value,
        score: score.value
      })
    }
    
    try {
      return await saveSession(sessionData)
    } catch (error) {
      console.error('Failed to save session:', error)
      return false
    }
  }
  
  // Auto-save session (debounced)
  let autoSaveTimeout = null
  async function autoSaveSession() {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout)
    }
    
    autoSaveTimeout = setTimeout(async () => {
      if (!isExamComplete.value) {
        await saveCurrentSession(false) // Save as in-progress
      }
    }, 2000) // Debounce: save 2 seconds after last change
  }
  
  // Load a saved session (in-progress or completed)
  function loadSession(sessionData) {
    // Load questions first if not already loaded
    if (questions.value.length === 0) {
      // Questions should be loaded separately
      console.warn('Questions must be loaded before loading a session')
      return false
    }
    
    // Restore session state
    currentSessionId.value = sessionData.id
    sessionStartTime.value = sessionData.startTime
    answers.value = { ...sessionData.answers }
    submittedQuestions.value = { ...sessionData.submittedQuestions }
    if (sessionData.examType) {
      examType.value = sessionData.examType
    }
    
    // Restore option shuffling if available (for in-progress sessions)
    if (sessionData.optionShuffling) {
      optionShuffling.value = { ...sessionData.optionShuffling }
    }
    
    // Restore timer state
    loadTimerState(sessionData)
    
    // Restore position for in-progress sessions
    // If status is missing and endTime is missing, assume in-progress (backward compatibility)
    const isInProgress = sessionData.status === 'in-progress' || (!sessionData.status && !sessionData.endTime)
    
    if (isInProgress) {
      currentQuestionIndex.value = sessionData.currentQuestionIndex ?? 0
      const sectionIdx = getSectionIndexForQuestion(currentQuestionIndex.value)
      if (sectionIdx !== -1) {
        currentSection.value = sectionIdx + 1
      } else if (sections.value.length > 0) {
        currentSection.value = 1
      } else {
        currentSection.value = 0
      }
      isExamComplete.value = false // Mark as in-progress
    } else {
      isExamComplete.value = true // Mark as complete
    }
    
    return true
  }
  
  // Resume an in-progress session
  async function resumeSession(sessionData) {
    if (loadSession(sessionData)) {
      // Navigate to exam view (router will handle navigation)
      return true
    }
    return false
  }

  function resetExam() {
    currentQuestionIndex.value = 0
    currentSection.value = sections.value.length > 0 ? 1 : 0
    answers.value = {}
    submittedQuestions.value = {}
    optionShuffling.value = {}
    isExamComplete.value = false
    // Reset timer
    resetTimer()
    // Start a new session
    currentSessionId.value = generateSessionId()
    sessionStartTime.value = new Date().toISOString()
  }
  
  // Check if answer is correct for a question
  function isAnswerCorrect(questionId) {
    const question = questions.value.find(q => q.id === questionId)
    if (!question) return false
    
    const userAnswer = getAnswer(questionId) || []
    const correctAnswer = question.correctAnswers || []
    return answersMatch(userAnswer, correctAnswer)
  }
  
  // Mark question as submitted
  function submitAnswer(questionId) {
    submittedQuestions.value[questionId] = true
  }
  
  // Check if question has been submitted
  function isQuestionSubmitted(questionId) {
    return submittedQuestions.value[questionId] === true
  }

  // Get results for a specific section
  function getSectionResults(sectionNum) {
    if (sectionNum < 1 || sectionNum > sections.value.length) {
      return []
    }

    const section = sections.value[sectionNum - 1]
    const sectionQuestionsList = questions.value.slice(section.startIndex, section.endIndex)
    
    return sectionQuestionsList.map(q => {
      const userAnswer = getAnswer(q.id)
      const correctAnswer = q.correctAnswers || []

      return {
        id: q.id,
        question: q.question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: answersMatch(userAnswer, correctAnswer),
        options: q.options
      }
    })
  }

  // Get score for a specific section
  function getSectionScore(sectionNum) {
    const sectionResults = getSectionResults(sectionNum)
    const correct = sectionResults.filter(r => r.isCorrect).length
    return {
      correct,
      total: sectionResults.length,
      percentage: sectionResults.length > 0 
        ? Math.round((correct / sectionResults.length) * 100) 
        : 0
    }
  }

  const results = computed(() => {
    return questions.value.map(q => {
      const userAnswer = getAnswer(q.id)
      const correctAnswer = q.correctAnswers || []

      return {
        id: q.id,
        question: q.question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: answersMatch(userAnswer, correctAnswer),
        options: q.options
      }
    })
  })

  const score = computed(() => {
    const correct = results.value.filter(r => r.isCorrect).length
    return {
      correct,
      total: totalQuestions.value,
      percentage: totalQuestions.value > 0 
        ? Math.round((correct / totalQuestions.value) * 100) 
        : 0
    }
  })

  return {
    questions,
    examType,
    currentQuestionIndex,
    currentSection,
    answers,
    isExamComplete,
    currentQuestion,
    sections,
    currentSectionData,
    currentSectionLabel,
    currentSectionRange,
    totalQuestions,
    totalSections,
    sectionQuestions,
    progress,
    questionNumberInSection,
    canGoNext,
    canGoPrevious,
    isLastQuestionInSection,
    loadQuestions,
    setAnswer,
    getAnswer,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    goToSection,
    finishSection,
    finishExam,
    resetExam,
    getSectionResults,
    getSectionScore,
    results,
    score,
    isAnswerCorrect,
    submitAnswer,
    isQuestionSubmitted,
    getShuffledOptions,
    getShuffledOptionsArray,
    shuffledToOriginalIndex,
    originalToShuffledIndex,
    isShuffledIndexCorrect,
    saveCurrentSession,
    loadSession,
    resumeSession,
    autoSaveSession,
    currentSessionId,
    sessionStartTime,
    // Timer functions
    timerElapsed,
    isTimerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    getTimerDuration,
    formatTimerDuration
  }
})

