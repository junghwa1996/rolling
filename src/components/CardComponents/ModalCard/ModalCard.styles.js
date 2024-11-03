import styled from 'styled-components';
import { CardContainer } from '../../styles/Card.styles';

export const ModalCardContainer = styled(CardContainer)`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.modalBackground};
`;
