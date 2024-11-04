// DarkModeToggle.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DarkModeToggleArea,
  DarkModeTabButton,
  DarkModeSelectedTab,
} from './DarkModeToggle.styles';

function DarkModeToggle({ isDarkMode, toggleTheme }) {
  const [currentTab, setCurrentTab] = useState(isDarkMode ? 'Dark' : 'White');

  const handleTabClick = (tab) => {
    if (currentTab === tab) return;
    setCurrentTab(tab);
    toggleTheme();
  };
  const selectedIndex = currentTab === 'Dark' ? 0 : 1;
  return (
    <DarkModeToggleArea>
      <DarkModeSelectedTab $selectedIndex={selectedIndex} />
      <DarkModeTabButton
        $isSelected={currentTab === 'Dark'}
        onClick={() => handleTabClick('Dark')}
        type="button">
        Dark
      </DarkModeTabButton>
      <DarkModeTabButton
        $isSelected={currentTab === 'White'}
        onClick={() => handleTabClick('White')}
        type="button">
        White
      </DarkModeTabButton>
    </DarkModeToggleArea>
  );
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // 필수 boolean 타입
  toggleTheme: PropTypes.func.isRequired, // 필수 function 타입
};
export default DarkModeToggle;
