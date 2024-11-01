// 인풋 파일
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from './InputFile.module.css';
import { StyledProfileInfo } from './InputFile.styles';
import { getProfileImg } from '../../service/api';
import Profile from '../Profile/Profile';
import useDeviceType from '../../hooks/useDeviceType';

function InputFile({ img, onClick }) {
  const [profileImgList, setProfileImgList] = useState([]);
  const deviceType = useDeviceType(); //devicehook 사용
  const isMobile = deviceType === 'mobile';

  useEffect(() => {
    const handleProfileImgLoad = async () => {
      const res = await getProfileImg();
      const { imageUrls } = res;
      setProfileImgList(imageUrls);
    };

    handleProfileImgLoad();
  }, []);

  if (!profileImgList) {
    return;
  }

  return (
    <div className={styles.container}>
      <Profile size="l" imageURL={img} />

      <div className={styles.selectorContainer}>
        <StyledProfileInfo>프로필 이미지를 선택해주세요!</StyledProfileInfo>

        <div className={styles.imgArea}>
          {profileImgList.map((imgItem, index) => (
            <Profile
              onClick={onClick}
              key={index}
              size={isMobile ? 's' : 'm'}
              imageURL={imgItem}></Profile>
          ))}
        </div>
      </div>
    </div>
  );
}

InputFile.propTypes = {
  img: PropTypes.string,
  onClick: PropTypes.func,
};

export default InputFile;
