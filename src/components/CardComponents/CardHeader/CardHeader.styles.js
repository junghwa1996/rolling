import styled from 'styled-components';
import Line from '../../Shared/Line/Line';
import { media } from '../../../styles/common/media.styles.js';

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.4rem 2.8rem 1.6rem;
`;

export const CardHeaderPosition = styled.div`
  display: flex;
  flex: 1;
  gap: 1.4rem;
`;

export const CardHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CardHeaderLine = styled(Line)`
  width: 33.6rem;

  ${media.tablet`
  width: 30.4rem;
  `}

  ${media.mobile`
  width: 27.2rem;
  `}
`;
