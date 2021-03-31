module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
testMatch: [
"**/__tests__/**/*.[jt]s?(x)",
"**/?(*.)+(spec|test).[tj]s?(x)"
],
  //coverageDirectory: 'coverage',
  //collectCoverageFrom: ['src/**/*.{js,ts}'],
};