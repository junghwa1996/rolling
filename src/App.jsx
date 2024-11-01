import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import './styles/reset.css';
import './styles/common.css';
import GlobalStyles from './styles/GlobalStyles';
import { light, dark } from './styles/theme';
import Content from './router/Content';

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
