module.exports = {
  // 코드 실행 환경 지정 (예: 브라우저, Node.js 등)
  env: {
    browser: true, // 브라우저에서 실행될 코드
    node: true, // Node.js에서 실행될 코드
    es2021: true, // ECMAScript 2021 문법 사용
  },

  // 자바스크립트의 구문 분석기 설정
  parserOptions: {
    ecmaVersion: 12, // ECMAScript 버전 12 (ES2021) 지원
    sourceType: "module", // ES 모듈 시스템 사용
  },

  // 기본적으로 사용할 ESLint 규칙의 확장 설정
  extends: [
    "eslint:recommended", // ESLint에서 권장하는 기본 규칙 사용
    "prettier", // Prettier와의 충돌 방지를 위해 Prettier 규칙 추가
  ],

  // 사용할 플러그인 목록 (기본적으로 ESLint에 없는 추가 규칙 모음)
  plugins: [
    "prettier", // Prettier 플러그인 추가
    "react", // React 관련 플러그인 추가
    "import", // import 관련 플러그인 추가
    "styled-components-a11y", // styled-components 관련 플러그인 추가
  ],

  // 코드 규칙 정의
  rules: {
    "no-unused-vars": "warn", // 사용되지 않는 변수가 있을 때 경고 표시
    "no-console": "off", // console.log 사용을 허용
    eqeqeq: "error", // 일치 연산자(===) 사용을 강제
    indent: ["error", 2], // 들여쓰기를 스페이스 2칸으로 설정
    quotes: ["error", "single"], // 문자열에 작은따옴표 사용 강제
    semi: ["error", "always"], // 명령문 끝에 세미콜론 사용 강제
    curly: ["error", "all"], // 블록 구문에서 중괄호 생략 금지 및 줄바꿈 강제
    "arrow-body-style": ["error", "as-needed"], // 화살표 함수에서 바로 결과 반환 시 중괄호와 return 생략
    "prettier/prettier": [
      "error",
      {
        singleQuote: true, // 문자열에 작은따옴표 사용
        semi: true, // 명령문 끝에 세미콜론 사용
        useTabs: false, // 탭 대신 공백 사용
        tabWidth: 2, // 들여쓰기 공백 수 2칸
        trailingComma: "all", // 가능한 경우 후행 쉼표 사용
        printWidth: 80, // 줄 바꿈할 길이 80자
        bracketSpacing: true, // 객체 리터럴에서 괄호 사이에 공백 추가
        arrowParens: "always", // 화살표 함수의 매개변수에 항상 괄호 사용
        endOfLine: "auto", // 운영 체제에 따라 줄 끝 처리 방식 사용
      },
    ],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }], // 컴포넌트형 함수는 function 선언문 사용, 일반 함수는 화살표 함수 사용
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration", // 컴포넌트형 함수는 function 선언문으로 작성
        unnamedComponents: "arrow-function", // 익명 컴포넌트는 화살표 함수로 작성
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["index", "sibling", "parent", "internal"],
          ["react"], // React 라이브러리 최상단
          ["external", "api"], // API 관련
          ["external", "style"], // 스타일 컴포넌트 관련
          ["external", "image"], // 이미지 관련
          ["internal", "component"], // 컴포넌트 관련
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true }, // 알파벳 순으로 정렬
      },
    ],
    "styled-components-a11y/rule-name": [
      "error",
      // css 속성 순서 정렬
      {
        propertiesOrder: [
          "display",
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "z-index",
          "flex",
          "grid",
          "align-items",
          "justify-content",
          "width",
          "height",
          "margin",
          "padding",
          "border",
          "background",
          "color",
          "font",
          "animation",
          "transition",
        ],
      },
    ],
  },
};
