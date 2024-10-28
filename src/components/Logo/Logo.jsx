import React from 'react';
import { Link } from 'react-router-dom';

import { LogoArea } from './Logo.styles';
import LogoImg from '../../assets/RollingLogo.svg';

function Logo() {
  return (
    <LogoArea>
      <Link to="/">
        <img src={LogoImg} alt="롤링 로고" />
      </Link>
    </LogoArea>
  );
}

export default Logo;
