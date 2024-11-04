import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './TabToggle.module.css';
import { TabToggleArea, TabButton, SelectedTab } from './TabToggle.styles';

TabToggle.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

function TabToggle({ tabs = ['컬러', '이미지'], onClick = () => {} }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    onClick(tab);
  };

  return (
    <TabToggleArea className={styles.tabToggleArea} $tabLength={tabs.length}>
      <SelectedTab
        className={styles.selectedTab}
        $selectedIndex={tabs.indexOf(currentTab)}
      />
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          className={styles.tabButton}
          $isSelected={currentTab === tab}
          onClick={() => handleTabClick(tab)}
          type="button">
          {tab}
        </TabButton>
      ))}
    </TabToggleArea>
  );
}

export default TabToggle;
