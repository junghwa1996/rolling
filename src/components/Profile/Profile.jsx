import PropTypes from 'prop-types';
import React from 'react';

import { ProfileArea } from './Profile.styles';
import DEFAULT_IMAGE from '../../assets/default_profile.svg';

Profile.propTypes = {
  imageURL: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  onClick: PropTypes.func,
};

function Profile({ imageURL, size = 's', onClick = () => {} }) {
  const IMG_URL = imageURL || DEFAULT_IMAGE;

  const handleImageClick = () => {
    onClick(IMG_URL);
  };

  return (
    <ProfileArea size={size}>
      <img src={IMG_URL} alt="프로필" onClick={handleImageClick} />
    </ProfileArea>
  );
}

export default Profile;
