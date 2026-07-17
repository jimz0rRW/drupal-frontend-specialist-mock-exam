<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
    <div class="max-w-md w-full">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
          Drupal Front-End Specialist Mock Exam
        </h1>

        <div v-if="authStore.error" class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
          <p class="text-sm text-red-700 dark:text-red-400">{{ authStore.error }}</p>
        </div>

        <div v-if="isRegister" class="mb-4">
          <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Register</h2>
          <form @submit.prevent="handleRegister" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                v-model="registerUsername"
                type="text"
                required
                minlength="3"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter username (min 3 characters)"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                v-model="registerPassword"
                type="password"
                required
                minlength="6"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password (min 6 characters)"
              />
            </div>
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ authStore.isLoading ? 'Registering...' : 'Register' }}
            </button>
          </form>
          <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <button @click="isRegister = false" class="text-blue-500 dark:text-blue-400 hover:underline">
              Login
            </button>
          </p>
        </div>

        <div v-else>
          <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Login</h2>
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                v-model="loginUsername"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                v-model="loginPassword"
                type="password"
                required
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ authStore.isLoading ? 'Logging in...' : 'Login' }}
            </button>
          </form>
          <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
            <button @click="isRegister = true" class="text-blue-500 dark:text-blue-400 hover:underline">
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const isRegister = ref(false)
const loginUsername = ref('')
const loginPassword = ref('')
const registerUsername = ref('')
const registerPassword = ref('')

async function handleLogin() {
  try {
    await authStore.login(loginUsername.value, loginPassword.value)
    router.push('/')
  } catch (error) {
    // Error is handled by store
  }
}

async function handleRegister() {
  try {
    await authStore.register(registerUsername.value, registerPassword.value)
    router.push('/')
  } catch (error) {
    // Error is handled by store
  }
}
</script>

