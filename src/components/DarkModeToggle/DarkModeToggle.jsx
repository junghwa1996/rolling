import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { font } from '../../styles/common/fonts.styles';

export const ModeButton = styled.button`
  border: none;
  border-radius: 100%;
  background: none;
  width: 4rem;
  height: 4rem;
  ${font[24]};
  transition: 0.3s;
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.darkMode};
  }

  @media screen and (max-width: 767px) {
    &:hover {
      background: none;
    }
  }
`;

function DarkModeToggle({ isDarkMode, toggleTheme }) {
  return (
    <ModeButton onClick={toggleTheme}>{isDarkMode ? '☾' : '☀︎'}</ModeButton>
  );
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default DarkModeToggle;
