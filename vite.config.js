import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so the build works both at a domain root (custom domain)
  // and under a subpath (username.github.io/portfolio/).
  base: './',
  plugins: [react()],
})
