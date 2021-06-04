/* eslint-disable no-undef, @typescript-eslint/no-var-requires */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'vue'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: {},
    sourceType: 'module',
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    curly: 'error',
    eqeqeq: 'warn',
    'no-console': 'error',
    'no-debugger': 'error',
    'consistent-return': 'error',
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreUrls: true,
      },
    ],
    quotes: ['error', 'single', 'avoid-escape'],
    '@typescript-eslint/prefer-for-of': ['warn'],
    '@typescript-eslint/no-inferrable-types': ['warn'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
      },
    ],
    '@typescript-eslint/member-ordering': ['error'],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    'vue/custom-event-name-casing': ['error'],
    'vue/component-name-in-template-casing': ['error'],
  },
  ignorePatterns: ['*.js'],
};
