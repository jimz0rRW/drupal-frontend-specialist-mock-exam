import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs/promises'
import { existsSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET
const DATA_DIR = join(__dirname, 'data')

if (!JWT_SECRET) {
  console.error('JWT_SECRET is required. Copy server/.env.example to server/.env and set a secret.')
  process.exit(1)
}

// Ensure data directory exists
if (!existsSync(DATA_DIR)) {
  fs.mkdir(DATA_DIR, { recursive: true })
}

// CORS: DDEV, localhost, and private LAN only
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (same-origin, curl, server-to-server)
    if (!origin) {
      return callback(null, true)
    }

    const allowedOrigins = [
      /^https?:\/\/.*\.ddev\.site(:[0-9]+)?$/,
      /^https?:\/\/localhost(:[0-9]+)?$/,
      /^https?:\/\/127\.0\.0\.1(:[0-9]+)?$/,
      /^https?:\/\/192\.168\.\d+\.\d+(:[0-9]+)?$/,
      /^https?:\/\/10\.\d+\.\d+\.\d+(:[0-9]+)?$/,
    ]

    const isAllowed = allowedOrigins.some(pattern => pattern.test(origin))
    if (isAllowed) {
      callback(null, true)
    } else {
      callback(null, false)
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Type', 'Authorization']
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())

// Handle preflight OPTIONS requests explicitly
app.options('*', cors(corsOptions))

// Helper functions for file operations
async function readUsers() {
  try {
    const filePath = join(DATA_DIR, 'users.json')
    if (!existsSync(filePath)) {
      return []
    }
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading users:', error)
    return []
  }
}

async function writeUsers(users) {
  const filePath = join(DATA_DIR, 'users.json')
  await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8')
}

async function readSessions() {
  try {
    const filePath = join(DATA_DIR, 'sessions.json')
    if (!existsSync(filePath)) {
      return {}
    }
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading sessions:', error)
    return {}
  }
}

async function writeSessions(sessions) {
  const filePath = join(DATA_DIR, 'sessions.json')
  await fs.writeFile(filePath, JSON.stringify(sessions, null, 2), 'utf-8')
}

// Authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' })
    }
    req.user = user
    next()
  })
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Register
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' })
    }

    if (username.length < 3) {
      return res.status(400).json({ error: 'Username must be at least 3 characters' })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' })
    }

    const users = await readUsers()

    // Check if user already exists
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ error: 'Username already exists' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const newUser = {
      id: Date.now().toString(),
      username,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    }

    users.push(newUser)
    await writeUsers(users)

    // Generate token
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({
      token,
      user: {
        id: newUser.id,
        username: newUser.username
      }
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' })
    }

    const users = await readUsers()
    const user = users.find(u => u.username === username)

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid username or password' })
    }

    // Generate token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get user info
app.get('/api/user', authenticateToken, async (req, res) => {
  try {
    const users = await readUsers()
    const user = users.find(u => u.id === req.user.id)

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({
      id: user.id,
      username: user.username
    })
  } catch (error) {
    console.error('Get user error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Get sessions
app.get('/api/sessions', authenticateToken, async (req, res) => {
  try {
    const sessions = await readSessions()
    const userSessions = sessions[req.user.id] || []
    res.json(userSessions)
  } catch (error) {
    console.error('Get sessions error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Save session
app.post('/api/sessions', authenticateToken, async (req, res) => {
  try {
    const sessionData = req.body
    
    if (!sessionData.id) {
      return res.status(400).json({ error: 'Session ID is required' })
    }
    
    const sessions = await readSessions()

    if (!sessions[req.user.id]) {
      sessions[req.user.id] = []
    }

    // Check if session with same ID already exists
    const existingIndex = sessions[req.user.id].findIndex(s => s.id === sessionData.id)
    
    if (existingIndex !== -1) {
      // Update existing session
      sessions[req.user.id][existingIndex] = sessionData
    } else {
      // Add new session to the beginning
      sessions[req.user.id].unshift(sessionData)
    }

    // Keep only last 50 sessions per user
    sessions[req.user.id] = sessions[req.user.id].slice(0, 50)

    await writeSessions(sessions)

    res.json({ success: true, session: sessionData })
  } catch (error) {
    console.error('Save session error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete session
app.delete('/api/sessions/:sessionId', authenticateToken, async (req, res) => {
  try {
    const { sessionId } = req.params
    const sessions = await readSessions()

    if (sessions[req.user.id]) {
      sessions[req.user.id] = sessions[req.user.id].filter(s => s.id !== sessionId)
      await writeSessions(sessions)
    }

    res.json({ success: true })
  } catch (error) {
    console.error('Delete session error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Delete all sessions
app.delete('/api/sessions', authenticateToken, async (req, res) => {
  try {
    const sessions = await readSessions()
    sessions[req.user.id] = []
    await writeSessions(sessions)

    res.json({ success: true })
  } catch (error) {
    console.error('Delete all sessions error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})

