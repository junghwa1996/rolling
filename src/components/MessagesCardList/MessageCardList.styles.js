import styled from 'styled-components';

import { SCmessageCardContainer } from './MessageCard.styles.js';
import MessageCard from './MessageCard.jsx';
import { StButton } from '../../components/Button/Button.styles.js';

export const StyledButton = styled(StButton)``;

export const StyledCardListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.1rem;
`;

export const StyledMessageCard = styled(SCmessageCardContainer).attrs({
  as: MessageCard,
})``;

export const StyledMessageItemArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2.4rem;

  @media screen and (max-width: 1248px) {
    gap: 1.6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledButtonArea = styled.div`
  ${StyledButton} {
    transition: none;
  }

  @media screen and (max-width: 1248px) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
    ${StyledButton} {
      display: block;
      width: 72rem;
    }
  }

  @media screen and (max-width: 767px) {
    left: 2rem;
    ${StyledButton} {
      width: 32rem;
    }
  }
`;
