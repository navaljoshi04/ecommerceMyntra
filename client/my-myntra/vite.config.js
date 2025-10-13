import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // your backend URL
        changeOrigin: true, // ensures correct Host header
        secure: false, // ignore https errors (if any)
      },
    },
  },
});
