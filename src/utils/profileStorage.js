const PROFILES_KEY = 'exam_profiles'
const ACTIVE_PROFILE_KEY = 'exam_active_profile_id'

function sessionsKey(profileId) {
  return `exam_sessions_${profileId}`
}

export function getProfiles() {
  try {
    const raw = localStorage.getItem(PROFILES_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveProfiles(profiles) {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles))
}

export function getActiveProfileId() {
  return localStorage.getItem(ACTIVE_PROFILE_KEY)
}

export function setActiveProfileId(profileId) {
  if (profileId) {
    localStorage.setItem(ACTIVE_PROFILE_KEY, profileId)
  } else {
    localStorage.removeItem(ACTIVE_PROFILE_KEY)
  }
}

export function createProfileRecord(name) {
  const trimmed = name.trim()
  if (trimmed.length < 2) {
    throw new Error('Profile name must be at least 2 characters')
  }

  const profiles = getProfiles()
  if (profiles.some((p) => p.name.toLowerCase() === trimmed.toLowerCase())) {
    throw new Error('A profile with that name already exists')
  }

  const profile = {
    id: `profile_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    name: trimmed,
    createdAt: new Date().toISOString()
  }

  profiles.push(profile)
  saveProfiles(profiles)
  return profile
}

export function deleteProfileRecord(profileId) {
  const profiles = getProfiles().filter((p) => p.id !== profileId)
  saveProfiles(profiles)
  localStorage.removeItem(sessionsKey(profileId))
  if (getActiveProfileId() === profileId) {
    setActiveProfileId(null)
  }
}

export function getSessionsForProfile(profileId) {
  if (!profileId) return []
  try {
    const raw = localStorage.getItem(sessionsKey(profileId))
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveSessionsForProfile(profileId, sessions) {
  if (!profileId) return
  localStorage.setItem(sessionsKey(profileId), JSON.stringify(sessions))
}
