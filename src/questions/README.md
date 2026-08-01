# Questions Directory

One markdown question bank per exam. The exam registry (`src/exams/registry.js`) maps each exam id to its bank file, domains, and domain targets.

| Bank file | Exam |
|-----------|------|
| `front_end_specialist.md` | Acquia Certified Drupal Front End Specialist |
| `site_builder.md` | Acquia Certified Drupal Site Builder |
| `developer.md` | Acquia Certified Drupal Developer |
| `backend_specialist.md` | Acquia Certified Drupal Backend Specialist |

Each bank holds **400 questions** grouped under `## Domain` sections matching the official blueprint weights, with a `## Jump to Section:` table of contents at the top.

## Question Format

```markdown
### Question 1

**Domain:** Theming Concepts

Question text here. For multiple-answer questions add (Choose two).

### Options
- Option A
- Option B
- Option C

### Correct Answers
- [0] Option A
- [1] Option B

### Explanation
Why the answers are correct.

### Question 2

...
```

## Notes

- Question numbers are sequential within a bank (1–400)
- `**Domain:**` must match one of the exam's registry domain names exactly
- `### Correct Answers` uses `[<option index>] <option text>`; multiple entries mark a multiple-answer question
- The explanation must not start with `#` (it would be parsed as a heading)
- Validate with `npm run validate:questions` (all banks, or `node scripts/validateQuestions.js <examId>` for one)

`sample.md` is a tiny illustrative bank and is not loaded by any exam.
