import styled from 'styled-components';

import { tm_color } from '../../utils/themeUtils';

export const EmojiBadgeArea = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  background-color: rgba(0, 0, 0, 0.54);
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
  color: ${tm_color('white')};
`;
