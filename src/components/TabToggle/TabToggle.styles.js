import styled from 'styled-components';

import { font } from '../../styles/fontStyles';
import { color } from '../../styles/colorStyles';

export const TabToggleArea = styled.div`
  width: ${({ $tabLength }) => `${12 * $tabLength}rem`};
  &.tabToggleArea {
    composes: tabToggleArea;
  }
`;

export const TabButton = styled.button`
  ${({ $isSelected }) => ($isSelected ? font['16b'] : font[16])};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? color.purple[600] : theme.text};
  &.tabButton {
    composes: tabButton;
  }
`;

export const SelectedTab = styled.div`
  left: ${({ $selectedIndex }) => `${12 * $selectedIndex}rem`};
  &.selectedTab {
    composes: selectedTab;
  }
`;
