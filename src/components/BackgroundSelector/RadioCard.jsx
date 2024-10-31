import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { colorStyles } from '../../styles/colorStyles';
import { getBackgroundImg } from '../../service/api';
import { StyleButton, StyledRadioCard } from './RadioCard.styles';
import CheckedIcon from '../../assets/icon-checked.svg';

const colorData = [
  { value: 'beige', color: color.beige[200] },
  { value: 'purple', color: color.purple[200] },
  { value: 'blue', color: color.blue[200] },
  { value: 'green', color: color.green[200] },
];

function RadioCard({ activeTab }) {
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

  const handleChange = (item) => {
    setSelectValue(item);
  };

  return (
    <StyledRadioCard>
      {activeTab === '컬러'
        ? colorData.map((item, index) => (
            <StyleButton
              type="button"
              key={index}
              onClick={() => handleChange(item.value)}
              // selectedValue 저장된 값과 item이 같은 곳에 class 추가
              className={selectedValue === item.value ? 'selected' : ''}
              // prop으로 스타일 컴포넌트에 background 색상 지정
              color={item.color}>
              {/* 클릭하여 상태에 저장된 값이 item.value가 같다면 체크   */}
              {selectedValue === item.value && (
                <div className="icon">
                  <img src={CheckedIcon} alt="Checked" />
                </div>
              )}
            </StyleButton>
          ))
        : backgroundImgList.map((item, index) => (
            <StyleButton
              type="button"
              key={index}
              onClick={() => handleChange(item)}
              className={selectedValue === item ? 'selected' : ''}>
              {selectedValue === item && (
                <div className="icon">
                  <img src={CheckedIcon} alt="Checked" />
                </div>
              )}
              <img src={item} alt={`bg${index}`} />
            </StyleButton>
          ))}
    </StyledRadioCard>
  );
}

RadioCard.propTypes = {
  activeTab: PropTypes.string,
};

export default RadioCard;
