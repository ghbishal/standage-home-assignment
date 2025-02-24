module.exports = {
  extends: ['expo', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: [
    'prettier',
    'unicorn',
    '@typescript-eslint',
    'unused-imports',
    'tailwindcss',
    'eslint-plugin-react-compiler',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        case: 'camelCase',
        ignore: ['/android', '/ios'],
      },
    ],
    'react/display-name': 'off',
    'react/no-inline-styles': 'off',
    'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    'react/require-default-props': 'off', // Allow non-defined react props as undefined
    '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: true,
      },
    ], // Ensure `import type` is used when it's necessary
    'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'tailwindcss/classnames-order': [
      'warn',
      {
        officialSorting: true,
      },
    ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [],
};
