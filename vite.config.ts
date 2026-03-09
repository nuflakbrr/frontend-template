import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@/': fileURLToPath(new URL('./src', import.meta.url)),
      '@/api': fileURLToPath(new URL('./src/api', import.meta.url)),
      "@/components/*": fileURLToPath(new URL('./src/components/*', import.meta.url)),
      "@/data/*": fileURLToPath(new URL('./src/data/*', import.meta.url)),
      '@/features': fileURLToPath(new URL('./src/features', import.meta.url)),
      "@/hooks/*": fileURLToPath(new URL('./src/hooks/*', import.meta.url)),
      "@/interfaces/*": fileURLToPath(new URL('./src/interfaces/*', import.meta.url)),
      "@/lib/*": fileURLToPath(new URL('./src/lib/*', import.meta.url)),
      "@/providers/*": fileURLToPath(new URL('./src/providers/*', import.meta.url)),
      '@/shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
    },
  },
})
