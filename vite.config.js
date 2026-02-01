import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/FitForge/', // GitHub Pages base URL
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2015', // Support older browsers
    polyfillDynamicImport: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', '@heroicons/react']
        }
      }
    }
  },
  server: {
    host: true, // Allow external connections
    port: 5173
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
