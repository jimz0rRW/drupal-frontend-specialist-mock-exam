export function parseMarkdownQuestions(content) {
  const questions = []
  const lines = content.split('\n')
  
  let currentQuestion = null
  let currentOptions = []
  let currentCorrectAnswers = []
  let currentExplanation = []
  let inOptions = false
  let inCorrectAnswers = false
  let inExplanation = false
  let questionLines = []
  let currentDomain = ''
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmedLine = line.trim()
    
    // Question header: ## Question 1 (allowing either level 2 or level 3 headings)
    if (trimmedLine.match(/^#{2,3}\s+Question\s+(\d+)/i)) {
      // Save previous question if exists
      if (currentQuestion) {
        // Join question lines and clean up
        const questionText = questionLines.join(' ').trim()
        if (questionText) {
          currentQuestion.question = questionText
          
          // Final check for multiple answers in the question text
          if (!currentQuestion.multipleAnswers) {
            const multipleAnswerPattern = /(?:\(Choose\s+two\)|\(Choose\s+multiple\)|multiple\s+answers?|choose\s+two|choose\s+multiple)/i
            if (multipleAnswerPattern.test(questionText)) {
              currentQuestion.multipleAnswers = true
            }
          }
        }
        
        // Also check if there are multiple correct answers (another indicator)
        if (!currentQuestion.multipleAnswers && currentCorrectAnswers.length > 1) {
          currentQuestion.multipleAnswers = true
        }
        
        currentQuestion.domain = currentQuestion.domain || currentDomain
        currentQuestion.options = currentOptions
        currentQuestion.correctAnswers = currentCorrectAnswers
        currentQuestion.explanation = currentExplanation.join(' ').trim()
        questions.push(currentQuestion)
      }
      
      currentDomain = ''
      const questionNum = parseInt(trimmedLine.match(/^#{2,3}\s+Question\s+(\d+)/i)[1], 10)
      currentQuestion = {
        id: questionNum, // Store as number for proper sorting
        question: '',
        options: [],
        correctAnswers: [],
        explanation: '',
        multipleAnswers: false,
        domain: ''
      }
      currentOptions = []
      currentCorrectAnswers = []
      currentExplanation = []
      questionLines = []
      inOptions = false
      inCorrectAnswers = false
      inExplanation = false
      continue
    }
    
    if (!currentQuestion) continue
    
    const domainMatch = trimmedLine.match(/^\*\*Domain:\*\*\s*(.+)/i)
    if (domainMatch) {
      currentDomain = domainMatch[1].trim()
      currentQuestion.domain = currentDomain
      continue
    }

    // Check for multiple answers indicator in question text (check individual lines)
    if (trimmedLine.match(/(?:multiple\s+answers?|choose\s+two|choose\s+multiple)/i)) {
      currentQuestion.multipleAnswers = true
    }
    
    // Options section: ### Options
    if (trimmedLine.match(/^###\s+Options/i)) {
      // Save accumulated question text
      if (questionLines.length > 0) {
        const questionText = questionLines.join(' ').trim()
        currentQuestion.question = questionText
        
        // Check the full question text for multiple answer indicators
        if (!currentQuestion.multipleAnswers) {
          // Match patterns like: (Choose two), (Choose multiple), multiple answers, etc.
          const multipleAnswerPattern = /(?:\(Choose\s+two\)|\(Choose\s+multiple\)|multiple\s+answers?|choose\s+two|choose\s+multiple)/i
          if (multipleAnswerPattern.test(questionText)) {
            currentQuestion.multipleAnswers = true
          }
        }
        
        questionLines = []
      } else if (!currentQuestion.question) {
        // If no question text was collected, try to get it from the last non-empty line
        // This handles cases where there might be formatting issues
        currentQuestion.question = ''
      }
      inOptions = true
      inCorrectAnswers = false
      continue
    }
    
    // Correct Answers section: ### Correct Answers
    if (trimmedLine.match(/^###\s+Correct\s+Answers?/i)) {
      inOptions = false
      inCorrectAnswers = true
      inExplanation = false
      continue
    }
    
    // Explanation section: ### Explanation
    if (trimmedLine.match(/^###\s+Explanation/i)) {
      inOptions = false
      inCorrectAnswers = false
      inExplanation = true
      continue
    }
    
    // Collect question text (before options section)
    // Skip empty lines and headers, but collect all other text
    if (!inOptions && !inCorrectAnswers && !inExplanation && trimmedLine && !trimmedLine.startsWith('#')) {
      questionLines.push(trimmedLine)
      continue
    }
    
    // Collect explanation text
    if (inExplanation && trimmedLine && !trimmedLine.startsWith('#')) {
      currentExplanation.push(trimmedLine)
      continue
    }
    
    // Also handle case where question text might be on the same line as the header
    // (though this shouldn't happen with our format, but just in case)
    
    // Options list items
    if (inOptions && (trimmedLine.startsWith('-') || trimmedLine.startsWith('*'))) {
      const optionText = trimmedLine.replace(/^[-*]\s+/, '').trim()
      if (optionText) {
        currentOptions.push(optionText)
      }
      continue
    }
    
    // Correct answers list items
    if (inCorrectAnswers && (trimmedLine.startsWith('-') || trimmedLine.startsWith('*'))) {
      const answerText = trimmedLine.replace(/^[-*]\s+/, '').trim()
      if (!answerText) continue
      
      // First try to extract index from format like "[0] option text"
      let answerIndex = -1
      const indexMatch = answerText.match(/^\[(\d+)\]/)
      if (indexMatch) {
        answerIndex = parseInt(indexMatch[1], 10)
      } else {
        // Fallback: Try to find the index by matching option text
        answerIndex = currentOptions.findIndex(opt => {
          const optLower = opt.toLowerCase().trim()
          const ansLower = answerText.toLowerCase().trim()
          return optLower === ansLower || 
                 optLower.includes(ansLower) || 
                 ansLower.includes(optLower)
        })
        
        // If still not found, try to parse as plain index (0, 1, 2, etc.)
        if (answerIndex === -1) {
          const index = parseInt(answerText)
          if (!isNaN(index) && index >= 0 && index < currentOptions.length) {
            answerIndex = index
          }
        }
      }
      
      if (answerIndex >= 0 && answerIndex < currentOptions.length && !currentCorrectAnswers.includes(answerIndex)) {
        currentCorrectAnswers.push(answerIndex)
      }
      continue
    }
  }
  
  // Save last question
  if (currentQuestion) {
    const questionText = questionLines.join(' ').trim()
    if (questionText && !currentQuestion.question) {
      currentQuestion.question = questionText
      
      // Check the full question text for multiple answer indicators
      if (!currentQuestion.multipleAnswers) {
        // Match patterns like: (Choose two), (Choose multiple), multiple answers, etc.
        const multipleAnswerPattern = /(?:\(Choose\s+two\)|\(Choose\s+multiple\)|multiple\s+answers?|choose\s+two|choose\s+multiple)/i
        if (multipleAnswerPattern.test(questionText)) {
          currentQuestion.multipleAnswers = true
        }
      }
    }
    
    // Also check if there are multiple correct answers (another indicator)
    if (!currentQuestion.multipleAnswers && currentCorrectAnswers.length > 1) {
      currentQuestion.multipleAnswers = true
    }
    
    currentQuestion.domain = currentQuestion.domain || currentDomain
    currentQuestion.options = currentOptions
    currentQuestion.correctAnswers = currentCorrectAnswers
    currentQuestion.explanation = currentExplanation.join(' ').trim()
    questions.push(currentQuestion)
  }
  
  return questions
}
