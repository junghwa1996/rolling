// 아웃라인
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { StOutlined, IconArea, Text } from './Outlined.styles';

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

function Outlined({
  size = 's',
  icon = null,
  iconPosition = 'left',
  onClick = () => {},
  disabled = false,
  children = null,
  type = 'button',
  to,
}) {
  const TAG = to ? Link : 'button';

  return (
    <StOutlined
      as={TAG}
      size={size}
      iconPosition={iconPosition}
      disabled={disabled}
      onClick={onClick}
      {...(TAG === Link && { to })}
      type={TAG === 'button' ? type : undefined}
    >
      {icon && <IconArea>{icon}</IconArea>}
      {children && <Text>{children}</Text>}
    </StOutlined>
  );
}

export default Outlined;
