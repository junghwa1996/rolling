import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { color as colors } from '../../styles/colorStyles';
import { getBackgroundImg } from '../../service/api';
import { StyleButton, StyledRadioCard } from './RadioCard.styles';

const colorData = [
  { value: 'beige', color: colors.beige[200] },
  { value: 'purple', color: colors.purple[200] },
  { value: 'blue', color: colors.blue[200] },
  { value: 'green', color: colors.green[200] },
];

function RadioCard({ activeTab, onBackgroundChange }) {
  const [selectedValue, setSelectValue] = useState('beige');
  const [backgroundImgList, setBackgroundImgList] = useState([]);

  // NOTE 이미지 Tab 클릭 시 이미지를 불러오는 속도가 너무 느려서 추가
  const preloadImage = (imgUrls) => {
    // imgUrls 배열을 순회하여 각각의 이미지 URL을 처리
    imgUrls.forEach((url) => {
      const img = new Image(); // 새로운 Image 객체를 사용하여 이미지를 미리 로드 준비
      img.src = url; // Image 객체의 src 속성에 URL을 할당하여 이미지를 미리 로드
    });
  };

  useEffect(() => {
    const handleBackgroundImgLoad = async () => {
      const res = await getBackgroundImg();
      const { imageUrls } = res;
      preloadImage(imageUrls); // 불러온 이미지는 preloadImage 함수에 전달
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
