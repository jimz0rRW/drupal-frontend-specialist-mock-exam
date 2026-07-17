# Exam Server

Backend server for the Drupal Front-End Specialist Mock Exam application.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

## Configuration

The server runs on port 3001 by default. You can change this by setting the `PORT` environment variable.

For production, set a secure `JWT_SECRET` environment variable:
```bash
export JWT_SECRET=your-secret-key-here
```

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login with username and password
- `GET /api/user` - Get current user info (requires auth)

### Sessions
- `GET /api/sessions` - Get all sessions for current user (requires auth)
- `POST /api/sessions` - Save a new session (requires auth)
- `DELETE /api/sessions/:sessionId` - Delete a specific session (requires auth)
- `DELETE /api/sessions` - Delete all sessions for current user (requires auth)

## Data Storage

Data is stored in JSON files in the `server/data/` directory:
- `users.json` - User accounts
- `sessions.json` - Exam sessions (organized by user ID)

This directory is automatically created when the server starts.

## Security Notes

- Passwords are hashed using bcrypt
- JWT tokens are used for authentication (7-day expiration)
- CORS is enabled for development
- For production, consider:
  - Using a proper database instead of JSON files
  - Setting up HTTPS
  - Configuring CORS properly
  - Using environment variables for secrets

