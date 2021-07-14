module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svelte$': 'jest-transform-svelte'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './setupTests.js',
  ]
};
