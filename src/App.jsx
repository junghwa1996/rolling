import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import './styles/common/reset.css';
import './styles/common/common.css';
import Content from './router/Content';
import { light, dark } from './styles/themes/theme';
import GlobalStyles from './styles/common/global.styles';

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
      <Content /> {/* 라우터는 여기서 사용하지 않음 */}
    </ThemeProvider>
  );
}

export default App;
