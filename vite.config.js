import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3005,
    open: true,
  },
  base: './',
  resolve: {
    alias: {
      '@': '/src'   // @ → src
    }
  },
})
