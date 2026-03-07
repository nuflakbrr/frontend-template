// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@/app": resolve(__dirname, "src/app"),
        "@/api": resolve(__dirname, "src/app/api"),
        "@/features": resolve(__dirname, "src/features"),
        "@/shared": resolve(__dirname, "src/shared"),
        "@/assets": resolve(__dirname, "src/assets"),
        "@/": resolve(__dirname, "src"),
      },
    },
    plugins: [tailwindcss()],
  },
});
