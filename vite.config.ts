/// <reference types="vitest" />
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import checker from "vite-plugin-checker";
import sassDts from "vite-plugin-sass-dts";

export default defineConfig({
  base: "/vite_preact_template/",
  define: {
    "import.meta.vitest": "undefined",
  },
  plugins: [
    preact(),
    sassDts(),
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
