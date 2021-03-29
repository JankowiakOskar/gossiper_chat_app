module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'react-app', 'prettier'],
  rules: {
    // We will use TypeScript's types for component props instead
    'react/prop-types': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 0,

    // Why would you want unused vars?
    '@typescript-eslint/no-unused-vars': ['error'],

    // I suggest this setting for requiring return types on functions only where useful
    // '@typescript-eslint/explicit-function-return-type': [
    //   'warn',
    //   {
    //     allowExpressions: true,
    //     allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    //   },
    // ],
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: { react: { version: 'detect' } },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
  ],
};
