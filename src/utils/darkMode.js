// Dark mode utilities

const DARK_MODE_KEY = 'darkMode'

/**
 * Get dark mode preference from localStorage
 */
export function getDarkModePreference() {
  try {
    const stored = localStorage.getItem(DARK_MODE_KEY)
    if (stored !== null) {
      return stored === 'true'
    }
    // Default to system preference if not set
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch (error) {
    console.error('Error reading dark mode preference:', error)
    return false
  }
}

/**
 * Set dark mode preference
 */
export function setDarkModePreference(isDark) {
  try {
    localStorage.setItem(DARK_MODE_KEY, String(isDark))
    applyDarkMode(isDark)
  } catch (error) {
    console.error('Error saving dark mode preference:', error)
  }
}

/**
 * Apply dark mode to the document
 */
export function applyDarkMode(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

/**
 * Initialize dark mode on app load
 */
export function initDarkMode() {
  const isDark = getDarkModePreference()
  applyDarkMode(isDark)
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only update if user hasn't set a preference
    if (localStorage.getItem(DARK_MODE_KEY) === null) {
      applyDarkMode(e.matches)
    }
  })
}

