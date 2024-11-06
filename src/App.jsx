import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './styles/common/reset.css';
import './styles/common/variables.css';
import Content from './router/Content';
import { light, dark } from './styles/themes/theme';
import GlobalStyles from './styles/common/global.styles';
import { ToastContainer } from 'react-toastify';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <Content isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
