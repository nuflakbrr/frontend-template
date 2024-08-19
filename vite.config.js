import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { fileURLToPath } from 'url'

// Convert `import.meta.url` to a file path
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import * as path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
//   },
// })
