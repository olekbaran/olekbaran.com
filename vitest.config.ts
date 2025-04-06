import react from "@vitejs/plugin-react"
import { loadEnv } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    watch: false,
    clearMocks: true,
    env: loadEnv(mode, process.cwd(), ""),
    coverage: {
      enabled: true,
      include: ["lib"],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  },
}))
