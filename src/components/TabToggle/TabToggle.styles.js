import styled from 'styled-components';

import { font } from '../../styles/fontStyles';
import { color } from '../../styles/colorStyles';

export const TabToggleArea = styled.div`
  display: flex;
  position: relative;
  width: ${({ $tabLength }) => `${12 * $tabLength}rem`};
  height: 4rem;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 6px;
  overflow: hidden;
`;

export const TabButton = styled.button`
  width: 12rem;
  height: 100%;
  border: none;
  background: transparent;
  ${({ $isSelected }) => ($isSelected ? font['16b'] : font[16])};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? color.purple[600] : theme.text};
  z-index: 1;
`;
