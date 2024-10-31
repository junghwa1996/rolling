import styled from 'styled-components';

import { tm_color } from '../../utils/themeUtils';

export const HeaderArea = styled.header`
  width: 100%;
  background-color: ${tm_color('white')};
  > div {
    max-width: 120rem;
    max-height: 13.3rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;

export const LogoHeader = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  padding: ${({ $VIEW }) =>
    $VIEW === 'tablet' ? '0 24px' : $VIEW === 'mobile' ? '0 15px' : '0'};
  ${({ $VIEW, $two }) =>
    $VIEW === 'mobile' &&
    $two &&
    `
    display: none;
  `}
  ${({ $VIEW, $hide }) =>
    $VIEW === 'mobile' &&
    $hide &&
    `
    display: none;
  `}
`;

export const InfoHeader = styled.div`
  display: ${({ $two }) => ($two ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ $VIEW }) => ($VIEW === 'mobile' ? '10.4rem' : '6.8rem')};
  padding: ${({ $VIEW }) =>
    $VIEW === 'tablet' ? '0 24px' : $VIEW === 'mobile' ? '0 15px' : '0'};
  ${({ $VIEW }) =>
    $VIEW === 'mobile' &&
    `
    flex-direction: column;
    
  `}

  > div:first-child {
    ${({ $VIEW }) =>
      $VIEW === 'mobile' &&
      `
    width:100%;
    display:flex;
    align-items: center;
    flex:1; 
  `}
  }

  > div:nth-child(2) {
    display: flex;
    gap: 30px;
    align-items: center;
    ${({ $VIEW }) =>
      $VIEW === 'mobile' &&
      `
    width:100%;
    flex:1; 
  `}
  }
`;
