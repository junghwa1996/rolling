// Outlined.jsx
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { StOutlined, IconArea, Text } from './Outlined.styles';

const Outlined = forwardRef(function Outlined(
  {
    size = 's',
    icon = null,
    iconPosition = 'left',
    onClick = () => {},
    disabled = false,
    children = null,
    type = 'button',
    to,
    ...rest
  },
  ref,
) {
  const TAG = to ? Link : 'button';

  return (
    <StOutlined
      as={TAG}
      $size={size}
      $iconPosition={iconPosition}
      disabled={disabled}
      onClick={onClick}
      ref={ref} // ref 전달
      {...(TAG === Link && { to })}
      type={TAG === 'button' ? type : undefined}
      {...rest}>
      {icon && <IconArea>{icon}</IconArea>}
      {children && <Text>{children}</Text>}
    </StOutlined>
  );
});

Outlined.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  to: PropTypes.string,
};

export default Outlined;
