import PropTypes from 'prop-types';
import React from 'react';

import { ProfileArea, ProfileImg } from './Profile.styles';
import DEFAULT_IMAGE from '../../assets/default_profile.svg';

Profile.propTypes = {
  imageURL: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm']),
};

function Profile({ imageURL, size = 's' }) {
  const IMG_URL = imageURL || DEFAULT_IMAGE;

  return (
    <ProfileArea size={size}>
      <ProfileImg src={IMG_URL} alt="프로필" />
    </ProfileArea>
  );
}

export default Profile;
