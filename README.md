# Drupal Front-End Specialist Mock Exam

A Vue.js practice app for the Drupal Front-End Specialist exam: one question at a time, instant feedback with explanations, section scoring, timers, dark mode, and login with file-based session storage.

## Features

- One question at a time
- Single and multiple choice
- Progress tracking and question navigation
- Section and full-exam review with scores
- Questions stored as markdown
- User authentication (username/password)
- Session persistence via a local Express API (JSON files in `server/data/`)
- Dark mode and responsive layout

## Question banks

| Set | File | Count |
|-----|------|-------|
| Extracted | `src/questions/extracted_questions.md` | ~200 |
| Generated | `src/questions/generated_questions.md` | ~300 |

The generated bank is AI-assisted practice material. Treat scores as study signals, not official exam accuracy. Run `npm run validate:questions` to check markdown structure; spot-check answers before relying on them heavily.

## Setup

### Option A: DDEV (recommended)

Requires [DDEV](https://ddev.com/). Details live in [`.ddev/README.md`](.ddev/README.md).

```bash
ddev start
```

The API starts automatically. For frontend hot reload:

```bash
ddev npm install
ddev exec npm run dev
```

Then open the Vite HTTPS URL from `ddev describe` (typically port **5174**).

`JWT_SECRET` and `VITE_API_URL` are set in `.ddev/config.yaml` for local use. Replace the JWT secret if you share the project beyond a trusted team.

### Option B: npm only

1. **Frontend**

```bash
cp .env.example .env   # optional; defaults to http://localhost:3001/api
npm install
```

2. **Backend**

```bash
cd server
cp .env.example .env
# Edit .env and set JWT_SECRET (e.g. openssl rand -base64 32)
npm install
npm start              # or: npm run dev
```

3. **Run the frontend** (from repo root)

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Usage

1. Start the backend (DDEV or `npm start` in `server/`)
2. Start the frontend
3. Register or log in
4. Choose an exam set and practice; sessions auto-save
5. Resume past sessions from the Sessions page

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production frontend build → `dist/` |
| `npm run server` / `npm run dev:server` | Start Express API |
| `npm run validate:questions` | Validate markdown question banks |
| `npm test` | Unit tests (Vitest) |

## Architecture

```
src/          Vue 3 + Pinia + Vue Router + Tailwind
server/       Express API, JWT auth, JSON file storage
src/questions Markdown question banks
scripts/      Content tooling and validators
.ddev/        Local DDEV config (API daemon + Vite ports)
```

### API (requires auth unless noted)

- `POST /api/register`, `POST /api/login`
- `GET /api/user`
- `GET|POST|DELETE /api/sessions`, `DELETE /api/sessions/:sessionId`

### Data storage

JSON files under `server/data/` (gitignored):

- `users.json` — accounts with bcrypt-hashed passwords
- `sessions.json` — exam sessions by user id

Fine for local/team practice. For real production, use a proper database, HTTPS, rate limiting, and a strong unique `JWT_SECRET`.

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

## Security notes

- Passwords are hashed with bcrypt; auth uses JWT (7-day expiry)
- Set `JWT_SECRET` via `server/.env` or DDEV `web_environment` — the server will not start without it
- CORS allows DDEV, localhost, and private LAN origins only
