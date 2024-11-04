import styled from 'styled-components';

import { font } from '../../styles/common/fonts.styles';
import { color } from '../../styles/common/variables';

export const TabToggleArea = styled.div`
  width: ${({ $tabLength }) => `${12 * $tabLength}rem`};
  background-color: ${({ theme }) => theme.buttongray};
`;

export const TabButton = styled.button`
  /* 폰트 스타일 설정 */
  ${({ $isSelected }) => ($isSelected ? font['16b'] : font['16'])}

  /* 텍스트 색상 설정 */
  color: ${({ $isSelected, theme }) =>
    $isSelected ? color.purple[600] : theme.text};
`;

export const SelectedTab = styled.div`
  /* 선택된 탭의 위치 설정 */
  left: ${({ $selectedIndex }) => `${12 * $selectedIndex}rem`};
`;
