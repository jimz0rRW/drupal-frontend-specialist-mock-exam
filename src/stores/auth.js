import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, getAuthToken } from '../utils/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  // Initialize auth state from token
  async function initAuth() {
    const token = getAuthToken()
    if (token) {
      try {
        const userData = await api.getUser()
        user.value = userData
      } catch (error) {
        console.error('Failed to initialize auth:', error)
        // Token might be invalid, clear it
        await api.logout()
      }
    }
  }

  // Register
  async function register(username, password) {
    isLoading.value = true
    error.value = null
    try {
      const data = await api.register(username, password)
      user.value = data.user
      return data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Login
  async function login(username, password) {
    isLoading.value = true
    error.value = null
    try {
      const data = await api.login(username, password)
      user.value = data.user
      return data
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Logout
  async function logout() {
    await api.logout()
    user.value = null
    error.value = null
  }

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    initAuth,
    register,
    login,
    logout
  }
})

