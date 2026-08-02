import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // '/' for local dev and root-domain hosting; the GitHub Pages workflow sets
  // VITE_BASE=/GreenPlanet/ because project pages are served from a subpath.
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5180,
    open: true,
  },
  preview: {
    port: 5180,
  },
})
