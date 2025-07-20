import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],

  // Development Server
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      overlay: true
    }
  },

  // Path Aliasing für cleane Imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@cm': resolve(__dirname, 'src/components'),
      '@ut': resolve(__dirname, 'src/utils'),
      '@img': resolve(__dirname, 'src/assets/images'),
      '@svg': resolve(__dirname, 'src/assets/svg'),
      '@fonts': resolve(__dirname, 'src/assets/fonts'),
      '@scss': resolve(__dirname, 'src/styles/scss'),
      '@css': resolve(__dirname, 'src/styles/css'),
      '@ho': resolve(__dirname, 'src/hooks'),
      '@ly': resolve(__dirname, 'src/layout'),
      '@pg': resolve(__dirname, 'src/pages'),
      '@scss': resolve(__dirname, 'src/styles/scss'),
    }
  },

  // Build Optimierungen
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },

  // CSS mit SASS und automatischen Imports
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        // Nur Variables automatisch importieren, NICHT Reset
        additionalData: `
          @use "@scss/_variables.scss" as *;
          @use "@scss/_mixins.scss" as *;
          `
        ,
        // Include paths für bessere Imports
        includePaths: [
          resolve(__dirname, 'src/styles/scss'),
          resolve(__dirname, 'src/styles/css')
        ]
      }
    }
  },

  // Preview Server
  preview: {
    port: 4173,
    open: true
  }
})