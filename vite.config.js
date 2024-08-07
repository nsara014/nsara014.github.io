import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/nsara014.github.io/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
});
