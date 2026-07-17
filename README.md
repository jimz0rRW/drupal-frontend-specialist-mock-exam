# Drupal Front-End Specialist Mock Exam

A Vue.js practice app for the Drupal Front-End Specialist exam: one question at a time, instant feedback with explanations, section scoring, timers, dark mode, and local profiles with browser-stored sessions.

## Features

- One question at a time
- Single and multiple choice
- Progress tracking and question navigation
- Section and full-exam review with scores
- Questions stored as markdown
- Local profiles (no password / no server account)
- Session persistence in `localStorage` per profile
- Dark mode and responsive layout

## Question bank

Practice questions live in `src/questions/generated_questions.md` (**400** questions across the six Acquia Front End Specialist domains, weighted toward exam ratios).

| Domain | Count | Exam weight |
|--------|------:|:-----------:|
| Fundamental Web Development Concepts | 100 | 25% |
| Theming Concepts | 100 | 25% |
| Templates and Preprocess Functions | 100 | 25% |
| Layout Configuration | 60 | 15% |
| Performance | 20 | 5% |
| Security | 20 | 5% |

The bank is practice material aligned to the [Acquia Certified Drupal Front End Specialist](https://docs.acquia.com/acquia-academy/acquia-certified-drupal-front-end-specialist) blueprint (Drupal 10/11). Fundamentals intentionally covers all four study-guide objectives—including **PHP programming concepts** (syntax, arrays, control structures, OOP basics, and Drupal-relevant PHP such as `$variables` / render arrays)—not only HTML/CSS. Treat scores as study signals, not official exam accuracy. Run `npm run validate:questions` to check markdown structure.

## Setup

### Option A: DDEV (recommended)

Requires [DDEV](https://ddev.com/). Details live in [`.ddev/README.md`](.ddev/README.md).

```bash
ddev start
ddev npm install
ddev exec npm run dev
```

Then open the Vite HTTPS URL from `ddev describe` (typically port **5174**).

Or open the built site at the main DDEV URL after `npm run build` (docroot is `dist/`).

### Option B: npm only

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Usage

1. Start the frontend
2. Create or select a **profile** (stored in this browser only)
3. Practice the question bank; sessions auto-save for that profile
4. Resume past sessions from the Sessions page
5. Use **Profile: …** to switch or create another profile

Clearing site data / using another browser or device starts fresh — profiles do not sync.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production frontend build → `dist/` |
| `npm run validate:questions` | Validate markdown question banks |
| `npm test` | Unit tests (Vitest) |

## Architecture

```
src/          Vue 3 + Pinia + Vue Router + Tailwind
src/questions Markdown question banks
scripts/      Content tooling and validators
.ddev/        Optional local DDEV config
```

### Local data (`localStorage`)

- `exam_profiles` — profile list
- `exam_active_profile_id` — selected profile
- `exam_sessions_<profileId>` — sessions for that profile (max 50)

## Question format

See `src/questions/sample.md` and the banks themselves. Each question uses:

```markdown
### Question 1

**Domain:** Optional domain label

Question text here. (Choose two)

### Options
- Option A
- Option B

### Correct Answers
- [0] Option A

### Explanation
Why the answer is correct.
```
