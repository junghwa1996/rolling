import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import './styles/reset.css';
import './styles/common.css';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <ToastContainer />
      <SharingSelector isDarkMode={isDarkMode} /> {/* SharingSelector 추가 */}
      <Content /> {/* 라우터는 여기서 사용하지 않음 */}
    </ThemeProvider>
  );
}

export default App;
