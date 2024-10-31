import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo/Logo';
import { HeaderArea, InfoHeader, LogoHeader } from './Header.styles';
import useDeviceType from '../../hooks/useDeviceType';

Header.propTypes = {
  hide: PropTypes.bool,
  two: PropTypes.bool,
};

function Header({ hide = false, two = false }) {
  const VIEW = useDeviceType();
  return (
    <HeaderArea $VIEW={VIEW} $two={two}>
      <div>
        <LogoHeader $VIEW={VIEW} $hide={hide} $two={two}>
          <Logo />
        </LogoHeader>
        <InfoHeader $VIEW={VIEW} $two={two}>
          <div>
            <div>사용자이름컴포넌트</div>
          </div>
          <div>
            {VIEW === 'pc' && <div>아바타그룹컴포넌트</div>}
            <div>이모지드롭다운컴포넌트</div>
            <div>공유버튼컴포넌트</div>
          </div>
        </InfoHeader>
      </div>
    </HeaderArea>
  );
}

export default Header;
