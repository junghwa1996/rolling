import styled from 'styled-components';

export const TabToggleArea = styled.div`
  display: flex;
  position: relative;
  width: ${({ tabLength }) => `${12 * tabLength}rem`};
  height: 4rem;
  background-color: #f6f6f6;
  border-radius: 6px;
  overflow: hidden;
`;

export const TabButton = styled.button`
  width: 12rem;
  height: 100%;
  border: none;
  background: transparent;
  ${({ theme, isSelected }) =>
    isSelected ? theme.fontTheme['16Bold'] : theme.fontTheme['16Regular']};
  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.colorTheme.purple[600]
      : theme.colorTheme.grayscale[900]};
  z-index: 1;
`;

export const SelectedTab = styled.div`
  position: absolute;
  top: 0;
  left: ${({ selectedIndex }) => `${12 * selectedIndex}rem`};
  width: 12rem;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colorTheme.purple[600]};
  border-radius: 6px;
  transition: left 0.3s ease;
`;
