import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabToggle from '../TabToggle/TabToggle';
function DarkModeToggle({ isDarkMode, toggleTheme }) {
  const [currentTab, setCurrentTab] = useState(isDarkMode ? '🌙' : '🔅');

  const handleTabClick = (tab) => {
    if (currentTab === tab) return;
    setCurrentTab(tab);
    toggleTheme();
  };

  return <TabToggle tabs={['🔅', '🌙']} onClick={handleTabClick} />;
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // 필수 boolean 타입
  toggleTheme: PropTypes.func.isRequired, // 필수 function 타입
};

export default DarkModeToggle;
