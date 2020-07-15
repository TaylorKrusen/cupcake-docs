module.exports = {
    root: true,
    reportUnusedDisableDirectives: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react'],
    extends: ['prettier', 'prettier/@typescript-eslint'],
    rules: {
      'prefer-const': [
        'warn',
        {
          destructuring: 'all',
        },
      ],
      'no-throw-literal': 'warn',
    },
};
