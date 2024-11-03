// src/components/CardList/CardList.styles.js
import styled from 'styled-components';

export const CardListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.1rem;
`;

export const ItemArea = styled.div`
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

export const ButtonArea = styled.div`
  @media screen and (max-width: 1248px) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 72rem;
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
    left: 2rem;
  }
`;
