import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify'; // ToastContainer 임포트

import './styles/reset.css';
import './styles/common.css';
import Content from './router/Content';
import { light, dark } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <GlobalStyles />
      <Content />
      <ToastContainer /> {/* ToastContainer 추가 */}
    </>
  );
}

export default App;
