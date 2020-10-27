module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
};
