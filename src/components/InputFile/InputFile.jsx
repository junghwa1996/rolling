import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import {
  StyledInputFile,
  StyledImgSelectorContainer,
  StyledImgArea,
} from './InputFile.styles';
import Profile from '../Profile/Profile';

const getProfileImg = async () => {
  try {
    const res = await axios.get(
      'https://rolling-api.vercel.app/profile-images/',
    );
    return res.data;
  } catch (error) {
    console.error('GET 요청 실패', error);
    throw error;
  }
};

function InputFile({ img, onClick }) {
  const [profileImgList, setProfileImgList] = useState([]);

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
    <StyledInputFile>
      <Profile size="m" imageURL={img} />

      <StyledImgSelectorContainer>
        <p>프로필 이미지를 선택해주세요!</p>

        <StyledImgArea>
          {profileImgList.map((imgItem, index) => (
            <Profile
              onClick={onClick}
              key={index}
              size="s"
              imageURL={imgItem}
            ></Profile>
          ))}
        </StyledImgArea>
      </StyledImgSelectorContainer>
    </StyledInputFile>
  );
}

InputFile.propTypes = {
  img: PropTypes.string,
  onClick: PropTypes.func,
};

export default InputFile;
