import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './TabToggle.module.css';
import { TabToggleArea, TabButton, SelectedTab } from './TabToggle.styles';

TabToggle.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  width: PropTypes.number,
  mobileWidth: PropTypes.number,
};

function TabToggle({
  tabs = ['컬러', '이미지'],
  onClick = () => {},
  width = 12,
  mobileWidth = 12,
}) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    onClick(tab);
  };

  return (
    <TabToggleArea
      className={styles.tabToggleArea}
      $tabLength={tabs.length}
      $width={width}
      $mobileWidth={mobileWidth}>
      <SelectedTab
        className={styles.selectedTab}
        $selectedIndex={tabs.indexOf(currentTab)}
        $width={width}
        $mobileWidth={mobileWidth}
      />
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          className={styles.tabButton}
          $isSelected={currentTab === tab}
          $width={width}
          $mobileWidth={mobileWidth}
          onClick={() => handleTabClick(tab)}
          type="button">
          {tab}
        </TabButton>
      ))}
    </TabToggleArea>
  );
}

export default TabToggle;
