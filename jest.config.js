module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  coverageReporters: ['text'],
  globals: {
    'ts-jest': {
      compiler: 'typescript'
    }
  },
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  }
};