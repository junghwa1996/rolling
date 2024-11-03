// src/styles/Common/layout.js
import { css } from 'styled-components';

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumnCentered = css`
  ${flexColumn}
  align-items: center;
`;
