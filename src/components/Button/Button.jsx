import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { StButton } from './Button.styles';

Button.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  to: PropTypes.string,
};

function Button({
  size = 's',
  color = 'primary',
  onClick = () => {},
  children,
  disabled = false,
  type = 'button',
  to,
}) {
  const TAG = to ? Link : 'button';
  return (
    <StButton
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      as={TAG}
      {...(TAG === Link && { to })}
      type={TAG === 'button' ? type : undefined}>
      {children}
    </StButton>
  );
}

export default Button;
