// Question loader utility
// Loads the markdown question bank for a given registry exam id.

import { parseMarkdownQuestions } from './parseMarkdownQuestions.js'
import { getExam, DEFAULT_EXAM_ID, normalizeExamId } from '../exams/registry.js'

export { parseMarkdownQuestions }

// Lazy glob: each bank becomes its own chunk, fetched only when its exam loads.
const questionFiles = import.meta.glob('../questions/*.md', {
  query: '?raw',
  import: 'default'
})

export async function loadQuestionsFromMarkdown(examId = DEFAULT_EXAM_ID) {
  try {
    const exam = getExam(normalizeExamId(examId))
    const questions = []

    for (const path in questionFiles) {
      const filename = path.split('/').pop()

      if (filename !== exam.bankFile) {
        continue
      }

      const content = await questionFiles[path]()
      const parsedQuestions = parseMarkdownQuestions(content)
      questions.push(...parsedQuestions)
    }

    questions.sort((a, b) => {
      const idA = parseInt(a.id, 10)
      const idB = parseInt(b.id, 10)
      if (isNaN(idA) || isNaN(idB)) {
        return String(a.id).localeCompare(String(b.id))
      }
      return idA - idB
    })

    return questions
  } catch (error) {
    console.error('Error loading questions:', error)
    return []
  }
}
