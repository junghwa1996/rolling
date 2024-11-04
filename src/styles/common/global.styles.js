import { createGlobalStyle } from 'styled-components';

//NOTE - reset.css, normalize.css

const GlobalStyles = createGlobalStyle`
//SECTION - reset.css

html {
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
}

html,
  body,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  fieldset,
  legend,
  address,
  figure,
  hr,
  object,
  iframe,
  img,
  button,
  input,
  select,
  textarea,
  label,
  a,
  span,
  em,
  strong,
  small,
  sub,
  sup,
  table,
  caption,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  label,
  summary {
    color: ${({ theme }) => theme.text}; // 기본 텍스트 색상 적용
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${({ theme }) => theme.text};
  }

  hr {
  border-top: 1px solid ${({ theme }) => theme.line};
}

`;

export default GlobalStyles;
