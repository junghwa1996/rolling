import styled from 'styled-components';

import { font } from '../../styles/common/fonts.styles';

export const HeaderArea = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  background-color: ${({ theme }) => theme.background};
  position: relative;
  z-index: 3;

  > div {
    max-width: 120rem;
    max-height: 13.3rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  ${({ $type, theme }) =>
    $type === 'doubleLine' &&
    `
    @media (min-width: 769px) {
    &::before {
      content: '';
      position: absolute;
      top: 48.8%;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${theme.line};
      transform: translateY(-50%);
    }
  }
  `}
`;

export const LogoHeader = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 1248px) and (min-width: 768px) {
    padding: 0 2.4rem;
  }

  @media (max-width: 767px) {
    padding: 0 1.5rem;
    height: 6.4rem;
  }

  ${({ $type }) =>
    $type === 'doubleLine' &&
    `
    @media (max-width: 767px) {
      display: none;
    }
  `}

  ${({ $type }) =>
    $type === 'mobileHidden' &&
    `
    @media (max-width: 767px) {
      display: none;
    }
  `}
`;

export const InfoHeader = styled.div`
  display: ${({ $type }) => ($type === 'doubleLine' ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  height: 6.8rem;
  padding: 0;

  @media (max-width: 767px) {
    height: 10.4rem;
    flex-direction: column;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${({ theme }) => theme.line};
      transform: translateY(-50%);
    }
  }

  @media (max-width: 1248px) and (min-width: 768px) {
    padding: 0 2.4rem;
  }

  @media (max-width: 767px) {
    padding: 0 1.5rem;
  }

  > div:first-child {
    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 767px) {
      width: 100%;
      flex: 1;
    }
  }

  h1 {
    margin-left: 0.5rem;
    ${font['28b']}
    @media (max-width: 767px) {
      ${font['18b']}
    }
  }
`;
