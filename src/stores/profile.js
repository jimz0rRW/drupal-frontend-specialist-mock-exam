import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  getProfiles,
  getActiveProfileId,
  setActiveProfileId,
  createProfileRecord,
  deleteProfileRecord
} from '../utils/profileStorage'

export const useProfileStore = defineStore('profile', () => {
  const profiles = ref([])
  const activeProfile = ref(null)
  const error = ref(null)

  const hasActiveProfile = computed(() => !!activeProfile.value)

  function initProfiles() {
    profiles.value = getProfiles()
    const activeId = getActiveProfileId()
    activeProfile.value = profiles.value.find((p) => p.id === activeId) || null
    if (activeId && !activeProfile.value) {
      setActiveProfileId(null)
    }
  }

  function createProfile(name) {
    error.value = null
    try {
      const profile = createProfileRecord(name)
      profiles.value = getProfiles()
      selectProfile(profile.id)
      return profile
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  function selectProfile(profileId) {
    error.value = null
    const profile = profiles.value.find((p) => p.id === profileId)
    if (!profile) {
      error.value = 'Profile not found'
      throw new Error(error.value)
    }
    setActiveProfileId(profile.id)
    activeProfile.value = profile
  }

  function deleteProfile(profileId) {
    error.value = null
    deleteProfileRecord(profileId)
    profiles.value = getProfiles()
    if (activeProfile.value?.id === profileId) {
      activeProfile.value = null
    }
  }

  function clearActiveProfile() {
    setActiveProfileId(null)
    activeProfile.value = null
    error.value = null
  }

  return {
    profiles,
    activeProfile,
    error,
    hasActiveProfile,
    initProfiles,
    createProfile,
    selectProfile,
    deleteProfile,
    clearActiveProfile
  }
})
