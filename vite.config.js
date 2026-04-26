import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'public',
    emptyOutDir: true
  },
  server: {
    port: 5173,
  },
})
