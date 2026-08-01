import { describe, it, expect } from 'vitest'
import {
  EXAMS,
  DEFAULT_EXAM_ID,
  BANK_SIZE,
  normalizeExamId,
  getExam,
  isValidExamId,
  getBankTargets,
  computeSimulationCounts
} from './registry.js'
import { sampleSimulationQuestions } from '../utils/sampling.js'

describe('exam registry', () => {
  it('has unique exam ids and weights summing to 100', () => {
    const ids = EXAMS.map((exam) => exam.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const exam of EXAMS) {
      const totalWeight = exam.domains.reduce((sum, domain) => sum + domain.weight, 0)
      expect(totalWeight, exam.id).toBe(100)
    }
  })

  it('normalizes legacy identifiers to the front end specialist exam', () => {
    expect(normalizeExamId('generated')).toBe('front-end-specialist')
    expect(normalizeExamId('generated_questions.md')).toBe('front-end-specialist')
    expect(normalizeExamId(undefined)).toBe(DEFAULT_EXAM_ID)
    expect(normalizeExamId('nonsense')).toBe(DEFAULT_EXAM_ID)
    expect(normalizeExamId('site-builder')).toBe('site-builder')
  })

  it('resolves exams and validates ids', () => {
    expect(getExam('developer').shortTitle).toBe('Developer')
    expect(isValidExamId('backend-specialist')).toBe(true)
    expect(isValidExamId('generated')).toBe(false)
  })

  it('derives bank targets that sum to the bank size', () => {
    for (const exam of EXAMS) {
      const targets = getBankTargets(exam)
      expect(targets.reduce((sum, row) => sum + row.count, 0), exam.id).toBe(BANK_SIZE)
    }
  })

  it('computes simulation counts that sum to the official exam length', () => {
    const expected = {
      'front-end-specialist': [15, 15, 15, 9, 3, 3],
      'site-builder': [6, 14, 10, 10, 6, 4],
      developer: [6, 18, 15, 21],
      'backend-specialist': [10, 20, 4, 6, 8, 8, 4]
    }
    for (const exam of EXAMS) {
      const counts = computeSimulationCounts(exam)
      expect(counts.reduce((sum, row) => sum + row.count, 0), exam.id).toBe(exam.simulation.questionCount)
      expect(counts.map((row) => row.count), exam.id).toEqual(expected[exam.id])
    }
  })
})

describe('sampleSimulationQuestions', () => {
  it('draws the configured per-domain counts and keeps domains grouped', () => {
    const exam = getExam('site-builder')
    const pool = []
    for (const domain of exam.domains) {
      for (let i = 0; i < 30; i++) {
        pool.push({ id: `${domain.name}-${i}`, domain: domain.name })
      }
    }

    const sample = sampleSimulationQuestions(pool, exam)
    expect(sample.length).toBe(exam.simulation.questionCount)

    const perDomain = {}
    for (const question of sample) {
      perDomain[question.domain] = (perDomain[question.domain] || 0) + 1
    }
    for (const { domain, count } of computeSimulationCounts(exam)) {
      expect(perDomain[domain]).toBe(count)
    }

    const firstAppearance = [...new Set(sample.map((question) => question.domain))]
    expect(firstAppearance).toEqual(exam.domains.map((domain) => domain.name))
  })
})
