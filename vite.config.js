// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // This is required for GitHub Pages project sites
  plugins: [react()]
})
