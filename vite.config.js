// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gemma2-swahili/', // This is required for GitHub Pages project sites
  plugins: [react()]
})
