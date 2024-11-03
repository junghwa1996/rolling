import styled from 'styled-components';

import { font } from '../../styles/common/fonts.styles';

export const EmojiBadgeArea = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  background-color: rgba(0, 0, 0, 0.54);
  @media (max-width: 767px) {
    padding: 0.6rem 0.8rem;
  }
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;

export const Emoji = styled.p`
  font-size: 1.3rem;
  line-height: 2.1rem;
  width: 1.6rem;
  height: 2.1rem;
`;

export const Count = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 400;
  min-width: 2rem;
  min-height: 2rem;
  text-align: center;
  color: var(--white);
  @media (max-width: 767px) {
    ${font['14']};
  }
`;
