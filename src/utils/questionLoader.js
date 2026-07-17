// Question loader utility
// This will load questions from markdown files

import { parseMarkdownQuestions } from './parseMarkdownQuestions.js'

export { parseMarkdownQuestions }

const DEFAULT_EXAM_TYPE = 'generated'

function shouldIncludeFile(filename = '', examType = DEFAULT_EXAM_TYPE) {
  const normalizedType = (examType || DEFAULT_EXAM_TYPE).toLowerCase()

  if (normalizedType === 'all') {
    return true
  }

  const map = {
    generated: ['generated_questions.md']
  }

  if (map[normalizedType]) {
    return map[normalizedType].includes(filename)
  }

  return filename === normalizedType
}

export async function loadQuestionsFromMarkdown(examType = DEFAULT_EXAM_TYPE) {
  try {
    const questions = []

    const questionFiles = import.meta.glob('../questions/*.md', {
      query: '?raw',
      import: 'default',
      eager: true
    })

    for (const path in questionFiles) {
      if (path.includes('README.md') || path.includes('sample.md')) {
        continue
      }

      const filename = path.split('/').pop()

      if (!shouldIncludeFile(filename, examType)) {
        continue
      }
      const content = questionFiles[path]
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
