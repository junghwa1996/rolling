import React from 'react';
import { Link } from 'react-router-dom';

import { LogoArea } from './Logo.styles';
import LOGO_IMG from '../../assets/RollingLogo.svg';

function Logo() {
  return (
    <LogoArea>
      <Link to="/">
        <img src={LOGO_IMG} alt="롤링 로고" />
      </Link>
    </LogoArea>
  );
}

export default Logo;
