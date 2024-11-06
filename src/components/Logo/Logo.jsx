import React from 'react';
import { Link } from 'react-router-dom';

import { LogoArea, StyledLogoIcon, StyledLogoText } from './Logo.styles';

function Logo() {
  return (
    <LogoArea>
      <Link to="/">
        <StyledLogoIcon aria-label="롤링 로고" />
        <StyledLogoText aria-label="롤링 타이틀" />
      </Link>
    </LogoArea>
  );
}

export default Logo;
