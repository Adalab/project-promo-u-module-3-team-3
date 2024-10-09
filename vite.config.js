import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public' // Cambia 'dist' por 'public'
  }
  // base:"/project-promo-u-module-3-team-3/",
})
