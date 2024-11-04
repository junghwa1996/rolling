import styled from 'styled-components';
import { CardHeaderContainer } from '../../CardComponents/CardHeader/CardHeader.styles';
import { font } from '../../../styles/common/fonts.styles';

export const ModalHeaderArea = styled(CardHeaderContainer)`
  padding: 0;
  justify-content: center;
  width: 100%;
  padding: 4rem 4rem 2rem;
  ${font['28b']};
`;
