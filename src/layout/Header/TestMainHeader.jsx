import React from 'react';

import MainHeader from './MainHeader';

function TestMainHeader() {
  return (
    <div>
      <MainHeader></MainHeader>
      <MainHeader type="doubleLine"></MainHeader>
      <MainHeader type="mobileHidden"></MainHeader>
    </div>
  );
}

export default TestMainHeader;
