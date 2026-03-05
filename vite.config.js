import svgr from '@svgr/rollup'
import { tanstackRouter } from '@tanstack/router-vite-plugin'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Convert `import.meta.url` to a file path
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/components": resolve(__dirname, 'src/components'),
      "@/data": resolve(__dirname, 'src/data'),
      "@/hooks": resolve(__dirname, 'src/hooks'),
      "@/interfaces": resolve(__dirname, 'src/interfaces'),
      "@/lib": resolve(__dirname, 'src/lib'),
      "@/providers": resolve(__dirname, 'src/providers'),
      '@/api': resolve(__dirname, 'src/api'),
      '@/features': resolve(__dirname, 'src/features'),
      '@/shared': resolve(__dirname, 'src/shared'),
      src: resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    loader: 'jsx',
    // include: /src\/.*\.jsx?$/,
    // exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad(
              { filter: /src\\.*\.js$/ },
              async (args) => ({
                loader: 'jsx',
                contents: await fs.readFile(args.path, 'utf8'),
              })
            );
          },
        },
      ],
    },
  },
  plugins: [
    svgr(),
    tanstackRouter(),
    react()
  ],
})



