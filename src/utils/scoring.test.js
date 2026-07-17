import { describe, expect, it } from 'vitest'
import { answersMatch } from './scoring.js'

describe('answersMatch', () => {
  it('matches identical single-answer selections', () => {
    expect(answersMatch([1], [1])).toBe(true)
  })

  it('matches multi-select regardless of order', () => {
    expect(answersMatch([2, 0], [0, 2])).toBe(true)
  })

  it('rejects partial or extra selections', () => {
    expect(answersMatch([0], [0, 2])).toBe(false)
    expect(answersMatch([0, 1, 2], [0, 2])).toBe(false)
    expect(answersMatch([1], [0])).toBe(false)
  })

  it('rejects non-array inputs', () => {
    expect(answersMatch(null, [0])).toBe(false)
    expect(answersMatch([0], undefined)).toBe(false)
  })
})
