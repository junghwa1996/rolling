import styled from 'styled-components';

import { tm_color } from '../../utils/themeUtils';

export const HeaderArea = styled.header`
  width: 100%;
  border-bottom: 1px solid ${tm_color('#EDEDED')};
  background-color: ${tm_color('white')};
  position: relative;
  ${({ $type, $isDeviceType }) =>
    $type === 'doubleLine' &&
    $isDeviceType !== 'mobile' &&
    `
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
  `};
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
  padding: ${({ $isDeviceType }) =>
    $isDeviceType === 'tablet'
      ? '0 24px'
      : $isDeviceType === 'mobile'
        ? '0 15px'
        : '0'};
  ${({ $isDeviceType, $type }) =>
    $isDeviceType === 'mobile' &&
    $type === 'doubleLine' &&
    `
    display: none;
  `}
  ${({ $isDeviceType, $type }) =>
    $isDeviceType === 'mobile' &&
    $type === 'mobileHidden' &&
    `
    display: none;
  `}
`;

export const InfoHeader = styled.div`
  display: ${({ $type }) => ($type === 'doubleLine' ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  height: ${({ $isDeviceType }) =>
    $isDeviceType === 'mobile' ? '10.4rem' : '6.8rem'};
  padding: ${({ $isDeviceType }) =>
    $isDeviceType === 'tablet'
      ? '0 24px'
      : $isDeviceType === 'mobile'
        ? '0 15px'
        : '0'};
  ${({ $isDeviceType }) =>
    $isDeviceType === 'mobile' &&
    `
    flex-direction: column;
    &::before {
      content: '';
      position: absolute;
      top: 50%; 
      left: 0;
      right: 0;
      height: 1px;
      background-color: #EDEDED;
      transform: translateY(-50%);
    }    
  `}

  > div:first-child {
    ${({ $isDeviceType }) =>
      $isDeviceType === 'mobile' &&
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
    ${({ $isDeviceType }) =>
      $isDeviceType === 'mobile' &&
      `
    width:100%;
    flex:1; 
  `}
  }
`;
