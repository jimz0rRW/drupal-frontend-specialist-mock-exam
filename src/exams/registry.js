// Exam registry: single source of truth for every supported Acquia exam.
// Drives question loading, section labels, simulation sampling, timers,
// pass/fail scoring, picker UI, and content tooling.

export const EXAM_IDS = {
  FRONT_END_SPECIALIST: 'front-end-specialist',
  SITE_BUILDER: 'site-builder',
  DEVELOPER: 'developer',
  BACKEND_SPECIALIST: 'backend-specialist'
}

export const EXAMS = [
  {
    id: EXAM_IDS.FRONT_END_SPECIALIST,
    title: 'Acquia Certified Drupal Front End Specialist',
    shortTitle: 'Front End Specialist',
    drupalVersion: 'Drupal 10/11',
    bankFile: 'front_end_specialist.md',
    blueprintUrl: 'https://docs.acquia.com/acquia-academy/acquia-certified-drupal-front-end-specialist',
    domains: [
      { name: 'Fundamental Web Development Concepts', weight: 25 },
      { name: 'Theming Concepts', weight: 25 },
      { name: 'Templates and Preprocess Functions', weight: 25 },
      { name: 'Layout Configuration', weight: 15 },
      { name: 'Performance', weight: 5 },
      { name: 'Security', weight: 5 }
    ],
    simulation: { questionCount: 60, durationMinutes: 90, passPercent: 68 }
  },
  {
    id: EXAM_IDS.SITE_BUILDER,
    title: 'Acquia Certified Drupal Site Builder',
    shortTitle: 'Site Builder',
    drupalVersion: 'Drupal 10/11',
    bankFile: 'site_builder.md',
    blueprintUrl: 'https://docs.acquia.com/acquia-academy/acquia-certified-drupal-site-builder',
    domains: [
      { name: 'Understanding Drupal and Working with a Drupal Site', weight: 12 },
      { name: 'Content Modeling', weight: 28 },
      { name: 'Site Display', weight: 20 },
      { name: 'Site Configuration', weight: 20 },
      { name: 'Contributed Module and Theme Management', weight: 12 },
      { name: 'Security and Performance', weight: 8 }
    ],
    simulation: { questionCount: 50, durationMinutes: 75, passPercent: 68 }
  },
  {
    id: EXAM_IDS.DEVELOPER,
    title: 'Acquia Certified Drupal Developer',
    shortTitle: 'Developer',
    drupalVersion: 'Drupal 10/11',
    bankFile: 'developer.md',
    blueprintUrl: 'https://docs.acquia.com/acquia-academy/acquia-certified-drupal-developer',
    domains: [
      { name: 'Fundamental Web Development Concepts', weight: 10 },
      { name: 'Site Building', weight: 30 },
      { name: 'Front end Development (Theming)', weight: 25 },
      { name: 'Back end Development (Coding)', weight: 35 }
    ],
    simulation: { questionCount: 60, durationMinutes: 90, passPercent: 65 }
  },
  {
    id: EXAM_IDS.BACKEND_SPECIALIST,
    title: 'Acquia Certified Drupal Backend Specialist',
    shortTitle: 'Backend Specialist',
    drupalVersion: 'Drupal 10/11',
    bankFile: 'backend_specialist.md',
    blueprintUrl: 'https://docs.acquia.com/acquia-academy/acquia-certified-drupal-backend-specialist',
    domains: [
      { name: 'Fundamental Web Development Concepts', weight: 16 },
      { name: 'Drupal Core API', weight: 33 },
      { name: 'Debug Code and Troubleshooting', weight: 7 },
      { name: 'Theme Integration', weight: 10 },
      { name: 'Performance', weight: 14 },
      { name: 'Security', weight: 13 },
      { name: 'Leveraging Community', weight: 7 }
    ],
    simulation: { questionCount: 60, durationMinutes: 120, passPercent: 70 }
  }
]

export const DEFAULT_EXAM_ID = EXAM_IDS.FRONT_END_SPECIALIST

// Practice banks hold 400 questions per exam; domain targets derive from weights.
export const BANK_SIZE = 400

// Legacy session/bank identifiers mapped onto registry exam ids.
const LEGACY_EXAM_ALIASES = {
  generated: EXAM_IDS.FRONT_END_SPECIALIST,
  sample: EXAM_IDS.FRONT_END_SPECIALIST,
  generated_questions: EXAM_IDS.FRONT_END_SPECIALIST,
  'generated_questions.md': EXAM_IDS.FRONT_END_SPECIALIST
}

export function normalizeExamId(examId) {
  if (!examId) return DEFAULT_EXAM_ID
  const normalized = String(examId).trim().toLowerCase()
  if (LEGACY_EXAM_ALIASES[normalized]) return LEGACY_EXAM_ALIASES[normalized]
  return EXAMS.some((exam) => exam.id === normalized) ? normalized : DEFAULT_EXAM_ID
}

export function getExam(examId) {
  return EXAMS.find((exam) => exam.id === normalizeExamId(examId))
}

export function isValidExamId(examId) {
  return EXAMS.some((exam) => exam.id === examId)
}

// Per-domain question counts for one practice bank (weights applied to BANK_SIZE).
export function getBankTargets(exam) {
  return exam.domains.map((domain) => ({
    domain: domain.name,
    count: Math.round((BANK_SIZE * domain.weight) / 100)
  }))
}

// Per-domain question counts for a simulation sample, using the largest
// remainder method so counts sum exactly to the official exam length.
export function computeSimulationCounts(exam) {
  const total = exam.simulation.questionCount
  const rows = exam.domains.map((domain, index) => {
    const exact = (total * domain.weight) / 100
    return { domain: domain.name, index, exact, count: Math.floor(exact) }
  })

  let remainder = total - rows.reduce((sum, row) => sum + row.count, 0)
  const byFraction = [...rows].sort((a, b) => {
    const fracDiff = (b.exact - b.count) - (a.exact - a.count)
    return fracDiff !== 0 ? fracDiff : a.index - b.index
  })

  for (let i = 0; remainder > 0 && i < byFraction.length; i++, remainder--) {
    byFraction[i].count += 1
  }

  return rows
    .sort((a, b) => a.index - b.index)
    .map(({ domain, count }) => ({ domain, count }))
}
