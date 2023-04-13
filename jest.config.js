const config = {
  roots: ["<rootDir>/server/src/tests", "<rootDir>/client/src/"],
  testMatch: ["**/src/**/*.test.js", "**/src/**/*.test.jsx"],
  setupFilesAfterEnv: ["<rootDir>/client/src/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coveragePathIgnorePatterns: ["(test/.*.mock).(jsx?|tsx?)$"],
  verbose: true,
  projects: ["<rootDir>/server/jest.config.js", "<rootDir>/client/jest.config.js"],
  coverageDirectory: "<rootDir>/coverage/",
}

export default config
