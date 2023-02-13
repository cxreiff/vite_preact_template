/// <reference types="vitest" />
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [
    preact(),
    checker({
      typescript: true,
    }),
  ],
  test: {
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
    includeSource: ["src/**/*.{ts,tsx}"],
    coverage: {
      reporter: ["text-summary", "text"],
    },
    mockReset: true,
    restoreMocks: true,
  },
});
