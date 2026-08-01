#!/usr/bin/env node
/**
 * Validates markdown question banks against the shared exam registry.
 *
 * Usage: node scripts/validateQuestions.js [examId]
 *   Without an exam id, every registered exam bank is validated.
 *
 * Structural problems (bad ids, missing answers/explanations, unknown
 * domains) are errors. Domain counts that diverge from registry targets
 * are reported as informational warnings.
 */
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { parseMarkdownQuestions } from '../src/utils/parseMarkdownQuestions.js'
import { EXAMS, getExam, getBankTargets } from '../src/exams/registry.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const questionsDir = join(__dirname, '../src/questions')

const examIdArg = process.argv[2]
const exams = examIdArg ? [getExam(examIdArg)] : EXAMS

if (examIdArg && (!exams[0] || exams[0].id !== examIdArg)) {
  console.error(`Unknown exam id: ${examIdArg}`)
  process.exit(1)
}

let hasErrors = false

for (const exam of exams) {
  const filename = exam.bankFile
  let content
  try {
    content = readFileSync(join(questionsDir, filename), 'utf-8')
  } catch {
    hasErrors = true
    console.error(`\n${filename}: bank file missing for exam "${exam.id}"`)
    continue
  }

  const questions = parseMarkdownQuestions(content)
  const errors = []
  const warnings = []

  if (questions.length === 0) {
    errors.push('No questions parsed')
  }

  const seenIds = new Set()
  let previousId = null
  const validDomains = new Set(exam.domains.map((d) => d.name))
  const perDomain = {}

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

    if (!validDomains.has(q.domain)) {
      errors.push(`${label}: unknown domain "${q.domain}"`)
    } else {
      perDomain[q.domain] = (perDomain[q.domain] || 0) + 1
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

  for (const { domain, count } of getBankTargets(exam)) {
    const actual = perDomain[domain] || 0
    if (actual !== count) {
      warnings.push(`${domain}: ${actual}/${count} target questions`)
    }
  }

  if (errors.length > 0) {
    hasErrors = true
    console.error(`\n${filename} (${exam.id}): ${questions.length} questions, ${errors.length} issue(s)`)
    for (const err of errors.slice(0, 40)) {
      console.error(`  - ${err}`)
    }
    if (errors.length > 40) {
      console.error(`  ... and ${errors.length - 40} more`)
    }
  } else {
    console.log(`${filename} (${exam.id}): OK (${questions.length} questions)`)
  }

  for (const warning of warnings) {
    console.log(`  target: ${warning}`)
  }
}

if (hasErrors) {
  process.exit(1)
}

console.log('\nAll question banks passed validation.')
