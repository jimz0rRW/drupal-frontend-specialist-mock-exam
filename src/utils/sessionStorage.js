import {
  getActiveProfileId,
  getSessionsForProfile,
  saveSessionsForProfile
} from './profileStorage'

function requireProfileId() {
  const profileId = getActiveProfileId()
  if (!profileId) {
    throw new Error('No active profile')
  }
  return profileId
}

/**
 * Get all saved sessions for the active profile
 */
export async function getAllSessions() {
  try {
    return getSessionsForProfile(requireProfileId())
  } catch (error) {
    console.error('Error loading sessions:', error)
    return []
  }
}

/**
 * Save a session for the active profile
 */
export async function saveSession(sessionData) {
  try {
    const profileId = requireProfileId()
    const sessions = getSessionsForProfile(profileId)
    const existingIndex = sessions.findIndex((s) => s.id === sessionData.id)

    if (existingIndex !== -1) {
      sessions[existingIndex] = sessionData
    } else {
      sessions.unshift(sessionData)
    }

    saveSessionsForProfile(profileId, sessions.slice(0, 50))
    return true
  } catch (error) {
    console.error('Error saving session:', error)
    return false
  }
}

/**
 * Get a specific session by ID
 */
export async function getSession(sessionId) {
  try {
    const sessions = await getAllSessions()
    return sessions.find((s) => s.id === sessionId) || null
  } catch (error) {
    console.error('Error getting session:', error)
    return null
  }
}

/**
 * Delete a session
 */
export async function deleteSession(sessionId) {
  try {
    const profileId = requireProfileId()
    const sessions = getSessionsForProfile(profileId).filter((s) => s.id !== sessionId)
    saveSessionsForProfile(profileId, sessions)
    return true
  } catch (error) {
    console.error('Error deleting session:', error)
    return false
  }
}

/**
 * Delete all sessions for the active profile
 */
export async function clearAllSessions() {
  try {
    const profileId = requireProfileId()
    saveSessionsForProfile(profileId, [])
    return true
  } catch (error) {
    console.error('Error clearing sessions:', error)
    return false
  }
}

/**
 * Generate a unique session ID
 */
export function generateSessionId() {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}
