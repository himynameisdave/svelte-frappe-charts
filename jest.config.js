module.exports = {
  transform: {
    '^.+\\.svelte$': 'jest-transform-svelte'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ]
};
