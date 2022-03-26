module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: ['./tsconfig.json', './cypress/tsconfig.json'],
  },
  ignorePatterns: ['src/components/pages/ozone-design/**/*.ts', 'src/components/pages/ozone-design/**/*.tsx'],
  extends: [
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'formatjs',
    '@typescript-eslint',
    'jest',
    'import',
    'prettier',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
    'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'cypress/**/*.ts',
          '**/*.test.ts',
          '**/*.test.tsx',
          './src/setupTests.tsx',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'formatjs/no-camel-case': 'error',
    'formatjs/no-multiple-whitespaces': 'error',
    'formatjs/no-multiple-plurals': 'error',
    'formatjs/no-offset': 'error',
    'react/jsx-props-no-spreading': 1,
    'jsx-quotes': [2, 'prefer-double'],
    quotes: [2, 'single', { avoidEscape: true }],
    'react/prop-types': 'off',
    curly: [2, 'all'],
    semi: 2,
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'react-hooks/exhaustive-deps': 2,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'interface',
        format: ['StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    ],
    'no-console': ['error'],
    'import/newline-after-import': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'off',
    'import/no-cycle': 'off',
    'no-nested-ternary': 'off',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {
        project: '.',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/ignore': ['.css'],
    'import/internal-regex': '^(api|assets|components|config|constant|contexts|hooks|routes|stores|styles|translations|utils|vendor|data)/'
  },
  'overrides': [{
    'files': [ '*.spec.ts', '*.spec.js' ],
    'rules': {
      'jest/expect-expect': 'off',
      'jest/valid-expect': 'off',
      'jest/valid-expect-in-promise': 'off',
      'jest/no-focused-tests': 'off'
    }
  },
  {
    'files': [ 'cypress/**/*.ts' ],
    'rules': {
      "@typescript-eslint/no-explicit-any": "off",
      '@typescript-eslint/explicit-module-boundary-types': 'off'

    }
  }
  ]
};


