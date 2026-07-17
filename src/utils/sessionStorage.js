// Session storage utilities - now using API instead of localStorage

import { api } from './api'

/**
 * Get all saved sessions from API
 */
export async function getAllSessions() {
  try {
    return await api.getSessions()
  } catch (error) {
    console.error('Error loading sessions:', error)
    return []
  }
}

/**
 * Save a session via API
 */
export async function saveSession(sessionData) {
  try {
    await api.saveSession(sessionData)
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
    return sessions.find(s => s.id === sessionId)
  } catch (error) {
    console.error('Error getting session:', error)
    return null
  }
}

/**
 * Delete a session via API
 */
export async function deleteSession(sessionId) {
  try {
    await api.deleteSession(sessionId)
    return true
  } catch (error) {
    console.error('Error deleting session:', error)
    return false
  }
}

/**
 * Delete all sessions via API
 */
export async function clearAllSessions() {
  try {
    await api.clearAllSessions()
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

