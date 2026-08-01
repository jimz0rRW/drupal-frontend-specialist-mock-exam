import { computeSimulationCounts } from '../exams/registry.js'

export function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Draw a weighted random sample of questions matching an exam's official
 * blueprint. Questions stay grouped by domain (in registry order) so
 * domain-driven sections keep working; order within each domain is random.
 */
export function sampleSimulationQuestions(allQuestions, exam) {
  const counts = computeSimulationCounts(exam)

  return counts.flatMap(({ domain, count }) => {
    const pool = allQuestions.filter((question) => question.domain === domain)
    return shuffleArray(pool).slice(0, count)
  })
}
