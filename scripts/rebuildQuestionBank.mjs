/**
 * Merges patched questions + new questions into generated_questions.md
 */
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outPath = join(root, 'src/questions/generated_questions.md')

const dataDir = join(root, 'scripts/question-data')
const patched = JSON.parse(readFileSync(join(dataDir, 'questions_patched.json'), 'utf8'))
const neu = [
  ...JSON.parse(readFileSync(join(dataDir, 'new_q_fund_theme.json'), 'utf8')),
  ...JSON.parse(readFileSync(join(dataDir, 'new_q_tpl_layout.json'), 'utf8')),
  ...JSON.parse(readFileSync(join(dataDir, 'new_q_perf_sec.json'), 'utf8'))
]

const DOMAINS = [
  'Fundamental Web Development Concepts',
  'Theming Concepts',
  'Templates and Preprocess Functions',
  'Layout Configuration',
  'Performance',
  'Security'
]

/** Exam-ratio targets (Acquia FE Specialist weights) */
const TARGETS = {
  'Fundamental Web Development Concepts': 100,
  'Theming Concepts': 100,
  'Templates and Preprocess Functions': 100,
  'Layout Configuration': 60,
  'Performance': 20,
  'Security': 20
}

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

for (const q of neu) {
  if (!DOMAINS.includes(q.domain)) throw new Error('bad domain ' + q.domain)
  if (!q.options || q.options.length < 2) throw new Error('bad options')
  for (const i of q.correctAnswers) {
    if (i < 0 || i >= q.options.length) throw new Error(`bad index ${i}: ${q.question?.slice(0, 80)}`)
  }
  if (!q.explanation) throw new Error('no explanation')
}

const byDomain = Object.fromEntries(DOMAINS.map((d) => [d, []]))
for (const q of patched) byDomain[q.domain].push(normalize(q))
for (const q of neu) byDomain[q.domain].push(normalize(q))

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
let md = `# Drupal Front-End Specialist Practice Questions

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
