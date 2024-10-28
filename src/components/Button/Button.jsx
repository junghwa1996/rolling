import PropTypes from 'prop-types';
import React from 'react';

import { StButton } from './Button.styles';

function Button({
  size = 's',
  color = 'primary',
  onClick,
  children,
  disabled = false,
}) {
  return (
    <StButton size={size} color={color} onClick={onClick} disabled={disabled}>
      {children}
    </StButton>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
