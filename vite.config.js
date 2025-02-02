import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/', // This is required for GitHub Pages project sites
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        technicalReports: resolve(__dirname, 'technical-reports.html')
      }
    }
  }
})

