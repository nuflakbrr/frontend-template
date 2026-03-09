import svgr from '@svgr/rollup'
import { tanstackRouter } from '@tanstack/router-vite-plugin'
import fs from 'fs/promises'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@/api': resolve(__dirname, 'src/api'),
      "@/components/*": resolve(__dirname, 'src/components/*'),
      "@/data/*": resolve(__dirname, 'src/data/*'),
      '@/features': resolve(__dirname, 'src/features'),
      "@/hooks/*": resolve(__dirname, 'src/hooks/*'),
      "@/interfaces/*": resolve(__dirname, 'src/interfaces/*'),
      "@/lib/*": resolve(__dirname, 'src/lib/*'),
      "@/providers/*": resolve(__dirname, 'src/providers/*'),
      '@/shared': resolve(__dirname, 'src/shared'),
      '@/': resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    loader: 'tsx',
    // include: /src\/.*\.tsx?$/,
    // exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-tsx',
          setup(build) {
            build.onLoad(
              { filter: /src\\.*\.js$/ },
              async (args) => ({
                loader: 'tsx',
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
    tsConfigPaths(),
    tanstackRouter(),
    react()
  ],
})
