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
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React 권장 규칙 추가
    'plugin:prettier/recommended', // Prettier 권장 규칙 적용
  ],

  plugins: ['react', 'import', 'react-hooks'],

  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    eqeqeq: 'error',
    indent: ['error', 2],
    'arrow-body-style': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/react-in-jsx-scope': 'off',
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

  settings: {
    react: {
      version: 'detect', // React 버전 자동 감지
    },
  },
};
