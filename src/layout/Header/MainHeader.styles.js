import styled from 'styled-components';

import { color } from '../../styles/common/variables';

export const HeaderArea = styled.header`
  width: 100%;
  border-bottom: 1px solid #ededed;
  background-color: ${color.white};
  position: relative;

  > div {
    max-width: 120rem;
    max-height: 13.3rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  ${({ $type }) =>
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
      background-color: #EDEDED;
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

  @media (max-width: 1248px) and (min-width: 769px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 6.4rem;
  }

  ${({ $type }) =>
    $type === 'doubleLine' &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}

  ${({ $type }) =>
    $type === 'mobileHidden' &&
    `
    @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    height: 10.4rem;
    flex-direction: column;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #ededed;
      transform: translateY(-50%);
    }
  }

  @media (max-width: 1248px) and (min-width: 769px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  > div:first-child {
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      align-items: center;
      flex: 1;
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      flex: 1;
    }
  }

  h1 {
    ${font['28b']}
    @media (max-width: 768px) {
      ${font['18b']}
    }
  }
`;
