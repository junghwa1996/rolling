import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  width: 100%;
  height: 100vh;
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
          background-color: ${({ theme }) => theme.blackText};
        }
      `;
    } else {
      return css`
        background-color: var(--${$bgColor}-200);
      `;
    }
  }}
`;

export const StyledInner = styled.div`
  flex: 1;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 6.3rem 0;

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    max-width: 72rem;
    padding: 9.3rem 0;
  }
  @media screen and (max-width: 767px) {
    max-width: 32rem;
    padding: 3.2rem 0;
  }
`;
