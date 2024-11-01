import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './TabToggle.module.css';
import { SelectedTab } from './TabToggle.styles';

//컴포넌트 정의
TabToggle.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string), //탭 이름 배열
  onClick: PropTypes.func, //탭 클릭 시 호출되는 함수
};

//현재 선택된 탭 상태 관리
function TabToggle({ tabs = ['컬러', '이미지'], onClick = () => {} }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  //탭 클릭 핸들러
  const handleTabClick = (tab) => {
    setCurrentTab(tab); //선택된 탭 업데이트
    onClick(tab); //클릭 이벤트 발생
  };

  return (
    <div
      className={styles.tabToggleArea}
      style={{ width: `${12 * tabs.length}rem` }}>
      <SelectedTab selectedIndex={tabs.indexOf(currentTab)} />
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tabButton} ${currentTab === tab ? styles.tabButtonSelected : ''}`}
          onClick={() => handleTabClick(tab)}
          type="button">
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabToggle;
