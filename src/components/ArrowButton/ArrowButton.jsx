import PropTypes from 'prop-types';
import React from 'react';

import { ArrowArea, Arrow } from './ArrowButton.styles';

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
};

function ArrowButton({ direction = 'right', onClick = () => {} }) {
  return (
    <ArrowArea onClick={onClick} type="button">
      <Arrow direction={direction} />
    </ArrowArea>
  );
}

export default ArrowButton;
