import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Separate Vite config for the SSR bundle used by the prerender script.
// Outputs to dist/server/ so it doesn't conflict with or wipe the client build in dist/.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/server',
    emptyOutDir: true,
    ssr: 'src/entry-server.tsx',
    rollupOptions: {
      output: {},
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/contexts': path.resolve(__dirname, './src/contexts'),
      '@/content': path.resolve(__dirname, './src/content'),
      '@/config': path.resolve(__dirname, './src/config'),
      '@/styles': path.resolve(__dirname, './src/styles'),
    },
  },
})
