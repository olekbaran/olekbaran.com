import nextJest from "next/jest.js"
import { type Config } from "jest"

const createJestConfig = nextJest({
  dir: "./",
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "/env.js"],
}

export default createJestConfig(config)
