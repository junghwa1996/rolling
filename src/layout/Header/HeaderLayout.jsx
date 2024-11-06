import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import MainHeader from './MainHeader';

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
const rMOBILE_HIDDEN_TYPE = /^\/post(\/\d+\/message)?$/;
const rDOUBLE_LINE_TYPE = /^\/post\/\d+(\/edit)?$/;

function HeaderLayout({ children, isDarkMode, toggleTheme }) {
  const location = useLocation();
  const [headerType, setHeaderType] = useState('default');

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
      <MainHeader
        type={headerType}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <>{children}</>
    </>
  );
}

export default HeaderLayout;
