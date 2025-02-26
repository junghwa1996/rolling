import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './styles/common/reset.css';
import './styles/common/variables.css';
import Content from './router/Content';
import { light, dark } from './styles/themes/theme';
import GlobalStyles from './styles/common/global.styles';
import { StyledToastContainer } from './components/toast/Toast.Styles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const isMode = !prevMode;
      localStorage.setItem('mode', isMode ? 'dark' : 'light');
      return isMode;
    });
  };

  useEffect(() => {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledToastContainer />
      <Content isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
