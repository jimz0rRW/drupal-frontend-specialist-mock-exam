/**
 * Rebuilds an exam's markdown question bank from JSON sources.
 *
 * Usage: node scripts/rebuildQuestionBank.mjs [examId]
 *   examId defaults to 'front-end-specialist'.
 *
 * JSON sources live in scripts/question-data/<examId>/*.json (arrays of
 * question objects). Domains, targets, and the output file come from the
 * shared exam registry (src/exams/registry.js).
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { getExam, getBankTargets } from '../src/exams/registry.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const examId = process.argv[2] || 'front-end-specialist'
const exam = getExam(examId)

if (!exam || exam.id !== examId) {
  console.error(`Unknown exam id: ${examId}`)
  process.exit(1)
}

const dataDir = join(root, 'scripts/question-data', exam.id)
const outPath = join(root, 'src/questions', exam.bankFile)

const DOMAINS = exam.domains.map((d) => d.name)
const TARGETS = Object.fromEntries(getBankTargets(exam).map((t) => [t.domain, t.count]))

const sourceFiles = readdirSync(dataDir).filter((name) => name.endsWith('.json')).sort()
if (sourceFiles.length === 0) {
  console.error(`No JSON sources found in ${dataDir}`)
  process.exit(1)
}

const sourceQuestions = sourceFiles.flatMap((name) =>
  JSON.parse(readFileSync(join(dataDir, name), 'utf8'))
)

function slug(d) {
  return d.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')
}

function normalize(q) {
  const multiple =
    q.multipleAnswers ||
    (q.correctAnswers?.length > 1) ||
    /\(Choose two\)/i.test(q.question || '')
  return {
    domain: q.domain,
    question: String(q.question).trim(),
    options: q.options,
    correctAnswers: [...q.correctAnswers].sort((x, y) => x - y),
    explanation: String(q.explanation).trim(),
    multipleAnswers: !!multiple
  }
}

for (const q of sourceQuestions) {
  if (!DOMAINS.includes(q.domain)) throw new Error('bad domain ' + q.domain)
  if (!q.options || q.options.length < 2) throw new Error('bad options')
  for (const i of q.correctAnswers) {
    if (i < 0 || i >= q.options.length) throw new Error(`bad index ${i}: ${q.question?.slice(0, 80)}`)
  }
  if (!q.explanation) throw new Error('no explanation')
}

const byDomain = Object.fromEntries(DOMAINS.map((d) => [d, []]))
for (const q of sourceQuestions) byDomain[q.domain].push(normalize(q))

let id = 1
const all = []
for (const d of DOMAINS) {
  const kept = byDomain[d].slice(0, TARGETS[d])
  console.log(`${d}: ${byDomain[d].length} -> ${kept.length}`)
  for (const q of kept) {
    all.push({ id: id++, ...q })
  }
}

function serialize(q) {
  const opts = q.options.map((o) => `- ${o}`).join('\n')
  const ans = q.correctAnswers.map((i) => `- [${i}] ${q.options[i]}`).join('\n')
  return `### Question ${q.id}

**Domain:** ${q.domain}

${q.question}

### Options
${opts}

### Correct Answers
${ans}

### Explanation
${q.explanation}
`
}

const toc = DOMAINS.map((d) => `- [${d}](#${slug(d)})`).join('\n')
let md = `# ${exam.title} Practice Questions

## Jump to Section:

${toc}

`
for (const d of DOMAINS) {
  md += `## ${d}\n\n`
  for (const q of all.filter((x) => x.domain === d)) {
    md += serialize(q) + '\n'
  }
}

writeFileSync(outPath, md)
console.log('Wrote', all.length, 'questions to', outPath)
