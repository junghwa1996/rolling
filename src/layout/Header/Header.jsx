import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';
import { HeaderArea, InfoHeader, LogoHeader } from './Header.styles';

Header.propTypes = {
  type: PropTypes.oneOf(['default', 'mobileHidden', 'doubleLine']),
};

function Header({ type = 'default' }) {
  return (
    <HeaderArea $type={type}>
      <div>
        <LogoHeader $type={type}>
          <Logo />
        </LogoHeader>
        <InfoHeader $type={type}>
          <div>
            <div>사용자이름컴포넌트</div>
          </div>
          <div>
            <div>아바타그룹컴포넌트</div>
            <div>이모지드롭다운컴포넌트</div>
            <div>공유버튼컴포넌트</div>
          </div>
        </InfoHeader>
      </div>
    </HeaderArea>
  );
}

export default Header;
