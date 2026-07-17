import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'node'
  },
  server: {
    host: '0.0.0.0', // Allow access from outside the container
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'drupal-frontend-specialist-mock-exam.ddev.site',
      '.ddev.site', // Allow all ddev sites
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      /^192\.168\./, // Allow all 192.168.x.x addresses (common local network)
      /^172\./, // Allow all 172.x.x.x addresses (Docker networks)
      /^10\./ // Allow all 10.x.x.x addresses (other local networks)
    ],
    watch: {
      usePolling: true // Better for Docker/WSL
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

