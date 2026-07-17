<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
    <div class="max-w-md w-full">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-800 dark:text-gray-200">
          Drupal Front-End Specialist Mock Exam
        </h1>
        <p class="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
          Choose or create a local profile. Progress is saved in this browser.
        </p>

        <div v-if="profileStore.error" class="mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
          <p class="text-sm text-red-700 dark:text-red-400">{{ profileStore.error }}</p>
        </div>

        <div v-if="profileStore.profiles.length > 0" class="mb-6">
          <h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Your profiles</h2>
          <ul class="space-y-2">
            <li
              v-for="profile in profileStore.profiles"
              :key="profile.id"
              class="flex items-center gap-2"
            >
              <button
                type="button"
                @click="selectProfile(profile.id)"
                class="flex-1 text-left px-3 py-2 rounded-md border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:border-blue-500 dark:hover:border-blue-400"
              >
                {{ profile.name }}
              </button>
              <button
                type="button"
                @click="removeProfile(profile)"
                class="px-2 py-2 text-sm text-red-600 dark:text-red-400 hover:underline"
                title="Delete profile"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
            {{ profileStore.profiles.length ? 'Create another profile' : 'Create a profile' }}
          </h2>
          <form @submit.prevent="createProfile" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Display name
              </label>
              <input
                v-model="newName"
                type="text"
                required
                minlength="2"
                maxlength="40"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Alex"
              />
            </div>
            <button
              type="submit"
              class="w-full px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
            >
              Create & continue
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProfileStore } from '../stores/profile'

const router = useRouter()
const profileStore = useProfileStore()
const newName = ref('')

profileStore.initProfiles()

function selectProfile(profileId) {
  try {
    profileStore.selectProfile(profileId)
    router.push('/')
  } catch {
    // Error shown via store
  }
}

function createProfile() {
  try {
    profileStore.createProfile(newName.value)
    newName.value = ''
    router.push('/')
  } catch {
    // Error shown via store
  }
}

function removeProfile(profile) {
  if (!confirm(`Delete profile "${profile.name}" and all its saved sessions?`)) {
    return
  }
  profileStore.deleteProfile(profile.id)
}
</script>
