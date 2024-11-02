import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import MainHeader from './MainHeader';

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function HeaderLayout({ children }) {
  const location = useLocation();
  const [headerType, setHeaderType] = useState('default');

  const rMOBILE_HIDDEN_TYPE = /^\/post\/\d+\/message$/;
  const rDOUBLE_LINE_TYPE = /^\/post\/\d+(\/edit)?$/;

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/list') {
      setHeaderType('default');
    } else if (rMOBILE_HIDDEN_TYPE.test(location.pathname)) {
      setHeaderType('mobileHidden');
    } else if (rDOUBLE_LINE_TYPE.test(location.pathname)) {
      setHeaderType('doubleLine');
    }
  }, [location.pathname]);

  return (
    <>
      <MainHeader type={headerType} />
      <>{children}</>
    </>
  );
}

export default HeaderLayout;
