# Acquia Drupal Mock Exams

A Vue.js practice app for four Acquia Drupal certification exams. Pick an exam, then either **practice** the full question bank with instant feedback, or run a timed **exam simulation** with a weighted random sample, a countdown, and pass/fail scoring against the official pass mark.

## Features

- Four exams: Front End Specialist, Site Builder, Developer, Backend Specialist (Drupal 10/11 blueprints)
- **Practice mode** — full 400-question bank, one question at a time, instant feedback with explanations, section reviews, manual stopwatch
- **Simulation mode** — blueprint-weighted random sample, countdown timer with auto-submit, deferred feedback, pass/fail vs the official mark, per-domain score breakdown
- Single and multiple choice, with explanations
- Progress tracking and question navigation grid
- Local profiles (no password / no server account)
- Session persistence in `localStorage` per profile (resume any session later)
- Dark mode and responsive layout

## Exams and question banks

Each exam has a **400-question** markdown bank in `src/questions/`, distributed across the official domains per blueprint weights. Simulation config (length, duration, pass mark) lives with the domains in the exam registry (`src/exams/registry.js`).

| Exam | Bank file | Simulation | Pass mark |
|------|-----------|------------|-----------|
| Front End Specialist | `front_end_specialist.md` | 60 q / 90 min | 68% |
| Site Builder | `site_builder.md` | 50 q / 75 min | 68% |
| Developer | `developer.md` | 60 q / 90 min | 65% |
| Backend Specialist | `backend_specialist.md` | 60 q / 120 min | 70% |

Banks are practice material aligned to the Acquia exam blueprints — treat scores as study signals, not official exam accuracy. Run `npm run validate:questions` to check bank structure (or `node scripts/validateQuestions.js <examId>` for one bank).

## Setup

### Option A: DDEV (recommended)

Requires [DDEV](https://ddev.com/). Details live in [`.ddev/README.md`](.ddev/README.md).

```bash
ddev start
ddev npm install
ddev exec npm run dev
```

Then open the Vite HTTPS URL (typically port **5174**).

Or open the built site at the main DDEV URL after `npm run build` (docroot is `dist/`).

Note: the DDEV hostname in `.ddev/config.yaml` and `vite.config.js` (`drupal-frontend-specialist-mock-exam.ddev.site`) follows the project directory name; it stays as-is unless you rename the directory.

### Option B: npm only

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Usage

1. Start the frontend
2. Create or select a **profile** (stored in this browser only)
3. On the exam picker, choose an exam and a mode — **Practice** or **Exam Simulation**
4. Practice: work through the bank in domain sections with instant feedback; Simulation: answer the timed sample, then review pass/fail, per-domain scores, and explanations
5. Sessions auto-save per profile; resume or review them from the Sessions page
6. Use **Profile: …** to switch or create another profile

Clearing site data / using another browser or device starts fresh — profiles do not sync.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production frontend build → `dist/` |
| `npm run validate:questions` | Validate all markdown question banks |
| `npm test` | Unit tests (Vitest) |

## Architecture

```
src/          Vue 3 + Pinia + Vue Router + Tailwind
src/exams/    Exam registry: metadata, domains, weights, simulation config
src/questions Markdown question banks (one per exam)
scripts/      Content tooling and validators
.ddev/        Optional local DDEV config
```

Key routes: `/profiles` → `/exams` (picker) → `/exam/:examId` (practice) and `/exam/:examId/simulate` (simulation) → `/review` (results).

The app is frontend-only: there is no backend server. All state lives in the browser.

### Local data (`localStorage`)

- `exam_profiles` — profile list
- `exam_active_profile_id` — selected profile
- `exam_sessions_<profileId>` — sessions for that profile (max 50), tagged with exam id and mode

## Question format

See `src/questions/README.md`. Each question uses:

```markdown
### Question 1

**Domain:** Domain name from the registry

Question text here. (Choose two)

### Options
- Option A
- Option B

### Correct Answers
- [0] Option A

### Explanation
Why the answer is correct.
```
