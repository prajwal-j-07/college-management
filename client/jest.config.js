const config = {
  displayName: "client",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["\\.(css|scss|sass)$"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setup-test.js"],
}

export default config
