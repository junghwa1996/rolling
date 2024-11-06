import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { font } from '../../styles/common/fonts.styles';
import { useLocation } from 'react-router-dom';

export const ModeButton = styled.button`
  border: none;
  border-radius: 100%;
  background: none;
  width: 4rem;
  height: 4rem;
  ${font[24]};
  transition: 0.3s;
  padding: 0;
  margin-left: auto;
  margin-right: ${({ isLocation }) => (isLocation ? '3rem' : '0')};

  &:hover {
    background: ${({ theme }) => theme.line};
  }

  @media screen and (max-width: 767px) {
    margin-right: ${({ isLocation }) => (isLocation ? '1.5rem' : '0')};
    &:hover {
      background: none;
    }
  }
`;

function DarkModeToggle({ isDarkMode, toggleTheme }) {
  const location = useLocation();
  console.log(location.pathname);
  const isLocation =
    location.pathname === '/' ||
    location.pathname === '/list' ||
    location.pathname === '/post';

  return (
    <ModeButton onClick={toggleTheme} isLocation={isLocation}>
      {isDarkMode ? '☾' : '☀︎'}
    </ModeButton>
  );
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default DarkModeToggle;
