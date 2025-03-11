import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',  // Quan trọng! Đảm bảo đường dẫn gốc
  plugins: [react()],
})
