/* eslint-disable no-undef, @typescript-eslint/no-var-requires */

module.exports = {
  root: true,
  extends: ['@yottaltd/eslint-config/lib/defaults', '@yottaltd/eslint-config/lib/e2e-tests'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
