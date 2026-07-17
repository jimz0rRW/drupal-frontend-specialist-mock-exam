// Question loader utility
// This will load questions from markdown files

import { parseMarkdownQuestions } from './parseMarkdownQuestions.js'

export { parseMarkdownQuestions }

function shouldIncludeFile(filename = '', examType = 'extracted') {
  const normalizedType = (examType || 'extracted').toLowerCase()

  if (normalizedType === 'all') {
    return true
  }

  const map = {
    extracted: ['extracted_questions.md'],
    generated: ['generated_questions.md']
  }

  if (map[normalizedType]) {
    return map[normalizedType].includes(filename)
  }

  return filename === normalizedType
}

export async function loadQuestionsFromMarkdown(examType = 'extracted') {
  try {
    // Try to load questions from markdown files
    const questions = []
    
    // Get list of markdown files in questions directory (exclude README.md)
    const questionFiles = import.meta.glob('../questions/*.md', {
      query: '?raw',
      import: 'default',
      eager: true
    })
    
    // Collect all questions from all files (excluding README.md and sample.md)
    for (const path in questionFiles) {
      // Skip README.md and sample.md files
      if (path.includes('README.md') || path.includes('sample.md')) {
        continue
      }

      const filename = path.split('/').pop()

      // Skip files that do not match the requested exam type
      if (!shouldIncludeFile(filename, examType)) {
        continue
      }
      const content = questionFiles[path]
      const parsedQuestions = parseMarkdownQuestions(content)
      questions.push(...parsedQuestions)
    }
    
    // Sort by question ID (numeric sort to ensure correct order 1, 2, 3, ..., 200)
    // This ensures questions are always in the same order regardless of file order
    questions.sort((a, b) => {
      const idA = parseInt(a.id, 10)
      const idB = parseInt(b.id, 10)
      if (isNaN(idA) || isNaN(idB)) {
        // Fallback for non-numeric IDs
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
