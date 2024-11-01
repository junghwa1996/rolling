import styled from 'styled-components';

import { font } from '../../styles/fontStyles';
import { color } from '../../styles/colorStyles';

/* 선택된 탭을 나타내는 스타일 컴포넌트 */
export const SelectedTab = styled.div`
  position: absolute;
  top: 0;
  left: ${({ selectedIndex }) => `${12 * selectedIndex}rem`};
  width: 12rem;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.purple[600]};
  border-radius: 6px;
  background: #fff;
  transition: left 0.3s ease;
`;
