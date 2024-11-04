import styled from 'styled-components';
import { font } from '../../styles/common/fonts.styles';

export const DarkModeToggleArea = styled.div`
  width: 12rem; /* 전체 너비 */
  display: flex;
  position: relative;
  height: 4rem;
  border-radius: 6px;
  overflow: hidden;

  /* 배경색 설정 */
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--black)' : 'var(--white)'};
`;

export const DarkModeTabButton = styled.button`  /*폰트 스타일 설정 */
  ${({ $isSelected }) => ($isSelected ? font['16b'] : font[16])}

  color:  ${({ $isSelected, isDarkMode }) =>
    $isSelected
      ? isDarkMode
        ? 'var(--white)'
        : 'var(--black)'
      : isDarkMode
        ? 'var(--gray-100)'
        : 'var(--gray-900)'};

  width: 6rem; /* 너비 */
  height: 100%;
  border: none;

  /*선택된 탭 배경색 설정 */
  background:  ${({ $isSelected, isDarkMode }) =>
    $isSelected
      ? isDarkMode
        ? 'var(--gray-800)'
        : 'var(--gray-200)'
      : 'transparent'}; // 비선택 탭 배경색:무색 //

  z-index: 1;
  cursor: pointer;

  transition: color 0.3s ease;
    background 0.3s ease;

  padding: 0;

  /*호버 시 배경색 변경*/
  &:hover {
    ${({ isDarkMode }) => (isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')}; // 호버 시 배경색 변경


  &:focus {
    outline: none;
  }
`;
export const DarkModeSelectedTab = styled.div`
  position: absolute; //절대 위치 설정//
  top: 0;
  width: 6rem; /* 선택된 탭의 너비 */
  height: 100%; /* 탭의 전체 높이를 맞춥니다. */
  border: 2px solid var(--purple-600); /* 테두리 색상 설정 */
  border-radius: 6px;

  /* 선택된 탭 배경색 설정 */
  background: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--gray-800)' : 'var(--gray-200)'};

  /*선택된 탭 텍스트 색상 설정*/
  color: ${({ isDarkMode }) =>
    isDarkMode ? 'var(--surface)' : 'var(--black)'};

  transition: left 0.3s ease;

  /* 선택된 탭 위치 설정 */
  left: ${({ $selectedIndex }) => `${$selectedIndex * 6}rem`};
`;
