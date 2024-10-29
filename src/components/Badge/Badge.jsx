import PropTypes from 'prop-types';
import React from 'react';

import { StBadge } from './Badge.styles';

Badge.propTypes = {
  value: PropTypes.oneOf(['친구', '가족', '동료', '지인']).isRequired,
};

function Badge({ value = '친구' }) {
  return <StBadge value={value}>{value}</StBadge>;
}

export default Badge;
