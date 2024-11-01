import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './TabToggle.module.css';
import { TabToggleArea, TabButton } from './TabToggle.styles';

//props 타입 정의 //
TabToggle.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string), //탭 이름 배열 //
  onClick: PropTypes.func, // 탭 클릭 시 호출되는 함수 //
};

function TabToggle({ tabs = ['컬러', '이미지'], onClick = () => {} }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]); //현재 선택된 탭 상태 //

  //탭 클릭 핸들러
  const handleTabClick = (tab) => {
    setCurrentTab(tab); // 선택된 탭 업데이트 //
    onClick(tab); //클릭된 탭의 이름을 부모 컴포넌트에 전달//
  };

  const selectedIndex = tabs.inesxof(currentTab); //현재 선택된 탭의 인덱스 //

  return (
    <TabToggleArea $tabLength={tabs.length}>
      <div
        className={styles.selectedTab}
        style={{ left: `${12 * selectedIndex}rem` }} // CSS 모듈을 사용하여 동적으로 위치 설정
      />
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          $isSelected={currentTab === tab} //선택된 탭인지 여부 //
          onClick={() => handleTabClick(tab)} //클릭 시 핸들러 호출 //
          type="button">
          {tab}
        </TabButton>
      ))}
    </TabToggleArea>
  );
}

export default TabToggle;
