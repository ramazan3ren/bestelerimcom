import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  build: { sourcemap: false },
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://34.172.224.16/compositions",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});


// changeOrigin: true,
// secure:false,
// rewrite: (path) => path.replace(/^\/api/, ""),