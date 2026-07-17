// API utility functions

// Function to get API base URL (called dynamically each time)
function getApiBaseUrl() {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL
  }

  if (typeof window !== 'undefined' && window.location) {
    const hostname = window.location.hostname

    if (hostname && hostname.includes('.ddev.site')) {
      const baseHost = hostname.replace(/:\d+$/, '')
      return `https://${baseHost}:3002/api`
    }
  }

  return 'http://localhost:3001/api'
}

// Export function to get API base URL (called dynamically each time)
export { getApiBaseUrl }

// Use a function that will be called each time, not a constant
const API_BASE_URL = () => getApiBaseUrl()

// Get auth token from localStorage
function getAuthToken() {
  return localStorage.getItem('authToken')
}

// Set auth token
function setAuthToken(token) {
  if (token) {
    localStorage.setItem('authToken', token)
  } else {
    localStorage.removeItem('authToken')
  }
}

// Get auth headers
function getAuthHeaders() {
  const token = getAuthToken()
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  }
}

// API calls
export const api = {
  // Authentication
  async register(username, password) {
    const response = await fetch(`${API_BASE_URL()}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Registration failed')
    }
    
    const data = await response.json()
    setAuthToken(data.token)
    return data
  },

  async login(username, password) {
    const response = await fetch(`${API_BASE_URL()}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    
    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Login failed')
    }
    
    const data = await response.json()
    setAuthToken(data.token)
    return data
  },

  async logout() {
    setAuthToken(null)
  },

  async getUser() {
    const response = await fetch(`${API_BASE_URL()}/user`, {
      headers: getAuthHeaders()
    })
    
    if (!response.ok) {
      if (response.status === 401) {
        setAuthToken(null)
      }
      const error = await response.json()
      throw new Error(error.error || 'Failed to get user')
    }
    
    return await response.json()
  },

  // Sessions
  async getSessions() {
    const response = await fetch(`${API_BASE_URL()}/sessions`, {
      headers: getAuthHeaders()
    })
    
    if (!response.ok) {
      if (response.status === 401) {
        setAuthToken(null)
      }
      const error = await response.json()
      throw new Error(error.error || 'Failed to get sessions')
    }
    
    return await response.json()
  },

  async saveSession(sessionData) {
    const response = await fetch(`${API_BASE_URL()}/sessions`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(sessionData)
    })
    
    if (!response.ok) {
      if (response.status === 401) {
        setAuthToken(null)
      }
      const error = await response.json()
      throw new Error(error.error || 'Failed to save session')
    }
    
    return await response.json()
  },

  async deleteSession(sessionId) {
    const response = await fetch(`${API_BASE_URL()}/sessions/${sessionId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    
    if (!response.ok) {
      if (response.status === 401) {
        setAuthToken(null)
      }
      const error = await response.json()
      throw new Error(error.error || 'Failed to delete session')
    }
    
    return await response.json()
  },

  async clearAllSessions() {
    const response = await fetch(`${API_BASE_URL()}/sessions`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    })
    
    if (!response.ok) {
      if (response.status === 401) {
        setAuthToken(null)
      }
      const error = await response.json()
      throw new Error(error.error || 'Failed to clear sessions')
    }
    
    return await response.json()
  }
}

export { getAuthToken, setAuthToken }

