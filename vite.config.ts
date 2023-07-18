import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      ViteFaviconsPlugin('./src/images/favicon.svg'),
      react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#root': resolve(__dirname)
    }
  },
})
