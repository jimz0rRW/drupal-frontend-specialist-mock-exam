#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { parseMarkdownQuestions } from '../src/utils/parseMarkdownQuestions.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const questionsDir = join(__dirname, '../src/questions')

const banks = readdirSync(questionsDir)
  .filter((name) => name.endsWith('.md') && !['README.md', 'sample.md'].includes(name))
  .sort()

let hasErrors = false

for (const filename of banks) {
  const content = readFileSync(join(questionsDir, filename), 'utf-8')
  const questions = parseMarkdownQuestions(content)
  const errors = []

  if (questions.length === 0) {
    errors.push('No questions parsed')
  }

  const seenIds = new Set()
  let previousId = null

  for (const q of questions) {
    const label = `Question ${q.id}`

    if (seenIds.has(q.id)) {
      errors.push(`${label}: duplicate id`)
    }
    seenIds.add(q.id)

    if (previousId !== null && q.id < previousId) {
      errors.push(`${label}: out of order (follows ${previousId})`)
    }
    previousId = q.id

    if (!q.question || !q.question.trim()) {
      errors.push(`${label}: empty question text`)
    }

    if (!Array.isArray(q.options) || q.options.length < 2) {
      errors.push(`${label}: needs at least 2 options (has ${q.options?.length ?? 0})`)
    }

    if (!Array.isArray(q.correctAnswers) || q.correctAnswers.length === 0) {
      errors.push(`${label}: missing correct answers`)
    } else {
      for (const idx of q.correctAnswers) {
        if (!Number.isInteger(idx) || idx < 0 || idx >= q.options.length) {
          errors.push(`${label}: correct answer index ${idx} out of range`)
        }
      }
    }

    if (!q.explanation || !q.explanation.trim()) {
      errors.push(`${label}: missing explanation`)
    }
  }

  if (errors.length > 0) {
    hasErrors = true
    console.error(`\n${filename}: ${questions.length} questions, ${errors.length} issue(s)`)
    for (const err of errors.slice(0, 40)) {
      console.error(`  - ${err}`)
    }
    if (errors.length > 40) {
      console.error(`  ... and ${errors.length - 40} more`)
    }
  } else {
    console.log(`${filename}: OK (${questions.length} questions)`)
  }
}

if (hasErrors) {
  process.exit(1)
}

console.log('\nAll question banks passed validation.')
