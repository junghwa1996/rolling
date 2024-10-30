import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { TabToggleArea, TabButton, SelectedTab } from './TabToggle.styles';

TabToggle.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

function TabToggle({ tabs = ['컬러', '이미지'], onClick = () => {} }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <TabToggleArea tabLength={tabs.length}>
      <SelectedTab selectedIndex={tabs.indexOf(currentTab)} />
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          isSelected={currentTab === tab}
          onClick={() => handleTabClick(tab)}
          type="button">
          {tab}
        </TabButton>
      ))}
    </TabToggleArea>
  );
}

export default TabToggle;
