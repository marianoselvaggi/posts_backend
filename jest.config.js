module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['text','html'],
  coverageThreshold: {
    global: {
        branches: 40,
        functions: 90,
        lines: 90,
        statements: 90,
    },
  }
};