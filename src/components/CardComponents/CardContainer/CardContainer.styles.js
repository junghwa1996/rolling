import { styled } from 'styled-components';

import { cardBaseStyle } from '../../../styles/common/Common.styles';

export const CardContainerStyle = styled.a`
  ${cardBaseStyle}
  ${({ type }) => type === 'card' && 'cursor: pointer;'}
  ${({ type }) => type === 'edit' && 'padding-bottom: 2.4rem;'}
  ${({ type }) => type === 'modal' && 'outline: none; gap: 1.2rem'}
  
  &:hover {
    background-color: ${({ theme }) => theme.background};
    transition: all 0.5s;
  }
`;
