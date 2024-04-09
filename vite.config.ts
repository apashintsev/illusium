import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssnano from "cssnano";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [cssnano({ preset: "default" })],
    },
  },
});
