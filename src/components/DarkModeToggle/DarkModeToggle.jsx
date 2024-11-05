import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabToggle from '../TabToggle/TabToggle';
function DarkModeToggle({ isDarkMode, toggleTheme, width, mobileWidth }) {
  const [currentTab, setCurrentTab] = useState(isDarkMode ? '🌙' : '🔅');

  const handleTabClick = (tab) => {
    if (currentTab === tab) return;
    setCurrentTab(tab);
    toggleTheme();
  };

  return (
    <TabToggle
      tabs={['🔅', '🌙']}
      onClick={handleTabClick}
      width={width}
      mobileWidth={mobileWidth}
    />
  );
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  width: PropTypes.number,
  mobileWidth: PropTypes.number,
};

export default DarkModeToggle;
