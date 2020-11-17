module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  coverageReporters: ['text'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/__tests__/setup.ts',
    '<rootDir>/node_modules/',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/src/__tests__/setup.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  }
};