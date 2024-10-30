import styled, { css } from 'styled-components';

import { tm_color } from '../../utils/themeUtils';

export const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
  ${({ $bgColor, $bgImage }) => {
    if ($bgImage) {
      return css`
        background: url(${$bgImage}) no-repeat center center/cover;
        &::before {
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          content: '';
          opacity: 0.5;
          width: 100%;
          height: 100vh;
          background-color: ${tm_color('black')};
        }
      `;
    } else {
      return css`
        background-color: ${tm_color(`${$bgColor}200`)};
      `;
    }
  }}
`;

export const StyledInner = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 6.3rem 0;

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    padding: 9.3rem 2.4rem;
  }
  @media screen and (max-width: 767px) {
    padding: 3.2rem 2rem;
  }
`;
