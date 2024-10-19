import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './', // Устанавливаем базовый путь для относительных URL
  build: {
    outDir: 'dist', // Папка для выходных файлов
    assetsDir: 'assets', // Папка для статических файлов
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
  server: {
    port: 3000, // Порт для сервера разработки
    open: true, // Автоматически открывать в браузере
  },
})