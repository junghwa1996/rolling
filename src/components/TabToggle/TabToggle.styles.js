import styled from 'styled-components';

import { font } from '../../styles/common/fonts.styles';
import { color } from '../../styles/common/variables';

export const TabToggleArea = styled.div`
  width: ${({ $tabLength, $width }) => `${$width * $tabLength}rem`};
  background-color: ${({ theme }) => theme.buttongray};

  @media (max-width: 767px) {
    width: ${({ $tabLength, $mobileWidth }) =>
      `${$mobileWidth * $tabLength}rem`};
  }
`;
export const TabButton = styled.button`
  width: ${({ $width }) => `${$width}rem`};
  ${({ $isSelected }) => ($isSelected ? font['16b'] : font['16'])}
  color: ${({ $isSelected, theme }) =>
    $isSelected ? color.purple[600] : theme.text};

  @media (max-width: 767px) {
    width: ${({ $mobileWidth }) => `${$mobileWidth}rem`};
  }
`;

export const SelectedTab = styled.div`
  width: ${({ $width }) => `${$width}rem`};
  left: ${({ $selectedIndex, $width }) => `${$width * $selectedIndex}rem`};

  @media (max-width: 767px) {
    width: ${({ $mobileWidth }) => `${$mobileWidth}rem`};
    left: ${({ $selectedIndex, $mobileWidth }) =>
      `${$mobileWidth * $selectedIndex}rem`};
  }
`;
