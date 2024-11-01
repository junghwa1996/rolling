import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';
import { HeaderArea, InfoHeader, LogoHeader } from './Header.styles';
import useDeviceType from '../../hooks/useDeviceType';
import Outlined from '../../components/Outlined/Outlined';

Header.propTypes = {
  type: PropTypes.oneOf(['default', 'mobileHidden', 'doubleLine']),
};

function Header({ type = 'default' }) {
  const isDeviceType = useDeviceType();

  return (
    <HeaderArea $type={type}>
      <div>
        <LogoHeader $type={type}>
          <Logo />
          {type === 'default' && (
            <Outlined size="s" to="/">
              롤링 페이퍼 만들기
            </Outlined>
          )}
        </LogoHeader>
        <InfoHeader $type={type}>
          <div>
            <div>사용자이름컴포넌트</div>
          </div>
          <div>
            {isDeviceType === 'pc' && <div>아바타그룹컴포넌트</div>}
            <div>이모지드롭다운컴포넌트</div>
            <div>공유버튼컴포넌트</div>
          </div>
        </InfoHeader>
      </div>
    </HeaderArea>
  );
}

export default Header;
