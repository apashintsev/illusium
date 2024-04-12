import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssnano from "cssnano";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [cssnano({ preset: "default" })],
    },
  },
  plugins: [react()],
});
