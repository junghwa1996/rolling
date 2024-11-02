// src/styles/CardHeader.styles.js
import styled from 'styled-components';

import { font } from './fontStyles';
import { EllipsisStyle } from './Common/Common.styles';

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardHeaderPosition = styled.div`
  display: flex;
  flex: 1;
`;

export const CardHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 767px) {
    ${EllipsisStyle} {
      ${font['20b']}; // 모바일 화면에서 20포인트 볼드 스타일 적용 //
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SpanText = styled.span`
  margin-right: 0.6rem;
  ${font['20']};
  color: ${({ theme }) => theme.blackText};
`;
