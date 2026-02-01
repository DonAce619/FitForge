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
    target: 'es2020', // Chrome 80+ for better compatibility
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
    port: 5173,
    cors: true // Enable CORS for Chrome
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})
