import styled from 'styled-components';
import { CardContainer } from '../../styles/Card.styles';

export const UserContentCardContainer = styled(CardContainer)`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
    transition: all 0.3s ease;
  }
`;
