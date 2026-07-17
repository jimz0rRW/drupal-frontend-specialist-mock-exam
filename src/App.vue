<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <DarkModeToggle />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initDarkMode } from './utils/darkMode'
import DarkModeToggle from './components/DarkModeToggle.vue'
import { useProfileStore } from './stores/profile'

const profileStore = useProfileStore()

onMounted(() => {
  initDarkMode()
  profileStore.initProfiles()
})
</script>
