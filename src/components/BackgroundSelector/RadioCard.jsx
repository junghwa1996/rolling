import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getBackgroundImg } from '../../service/api';
import { StyleButton, StyledRadioCard } from './RadioCard.styles';
import CheckedIcon from '../../assets/icon-checked.svg';

const colorData = [
  { value: 'beige', color: '#FFE2AD' },
  { value: 'purple', color: '#ECD9FF' },
  { value: 'blue', color: '#B1E4FF' },
  { value: 'green', color: '#D0F5C3' },
];

function RadioCard({ activeTab, onBackgroundChange }) {
  const [selectedValue, setSelectValue] = useState('beige');
  const [backgroundImgList, setBackgroundImgList] = useState([]);

  useEffect(() => {
    const handleBackgroundImgLoad = async () => {
      const res = await getBackgroundImg();
      const { imageUrls } = res;
      setBackgroundImgList(imageUrls);
    };

    handleBackgroundImgLoad();
  }, []);

  // 탭 변경 시 해당하는 탭의 첫 번째 button 체크되도록
  useEffect(() => {
    if (activeTab === '컬러') {
      setSelectValue(colorData[0].value);
    } else {
      setSelectValue(backgroundImgList[0]);
    }
  }, [activeTab, backgroundImgList]); // 에러로 backgroundImgList 추가

  useEffect(() => {
    // prop로 받은 onBackgroundChange 함수에 인자로 선택된 배경의 value, boolean 값을 전달
    activeTab === '컬러'
      ? onBackgroundChange(selectedValue, false) // Tab이 컬러이면 선택된 value와 false를 전달
      : onBackgroundChange(selectedValue, true); // Tab이 이미지이면 선택된 value와 true를 전달
  }, [activeTab, selectedValue, onBackgroundChange]);

  const handleChange = (item) => {
    setSelectValue(item);
  };

  return (
    <StyledRadioCard>
      {activeTab === '컬러'
        ? colorData.map((item, index) => (
            <StyleButton
              // 현재 Tab 상태에 따라 background 동적으로 적용하기 위해 prop로 전달
              $activeTab={activeTab}
              type="button"
              key={index}
              onClick={() => handleChange(item.value)}
              // selectedValue 저장된 값과 item이 같은 곳에 class 추가
              className={selectedValue === item.value ? 'selected' : ''}
              // prop으로 스타일 컴포넌트에 background 색상 지정
              color={item.color}>
              {/* 클릭하여 상태에 저장된 값이 item.value가 같다면 체크   */}
              {selectedValue === item.value && <span className="icon"></span>}
            </StyleButton>
          ))
        : backgroundImgList.map((item, index) => (
            <StyleButton
              $activeTab={activeTab}
              type="button"
              key={index}
              onClick={() => handleChange(item)}
              className={selectedValue === item ? 'selected' : ''}
              $item={item}>
              {selectedValue === item && <div className="icon"></div>}
            </StyleButton>
          ))}
    </StyledRadioCard>
  );
}

RadioCard.propTypes = {
  activeTab: PropTypes.string,
  onBackgroundChange: PropTypes.func,
};

export default RadioCard;
