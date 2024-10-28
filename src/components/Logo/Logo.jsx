import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogoArea, LogoText } from './Logo.styles';
import { ReactComponent as LogoImg } from '../../assets/Logo.svg';

function Logo() {
  const navigate = useNavigate();

  const handleGoHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <LogoArea onClick={handleGoHome}>
      <LogoImg />
      <LogoText>Rolling</LogoText>
    </LogoArea>
  );
}

export default Logo;
