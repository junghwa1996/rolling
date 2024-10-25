// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  parser: '@babel/eslint-parser', // JSX와 최신 문법을 파싱하기 위해 babel 파서를 사용
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // JSX를 사용할 수 있도록 설정
    },
    requireConfigFile: false, // 별도의 Babel 설정 파일을 요구하지 않도록 설정
    babelOptions: {
      plugins: ['@babel/plugin-syntax-jsx'], // JSX 구문을 인식하도록 플러그인 추가
    },
  },

  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  plugins: ['prettier', 'react', 'import', 'react-hooks'],

  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    eqeqeq: 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    curly: ['error', 'all'],
    'arrow-body-style': ['error', 'as-needed'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'lf',
      },
    ],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
