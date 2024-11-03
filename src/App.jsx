import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import './styles/common/reset.css';
import './styles/common/common.css';
import Content from './router/Content';
import { light, dark } from './styles/themes/theme';
import GlobalStyles from './styles/common/global.styles';
import MainHeader from './layout/Header/MainHeader';

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
      <MainHeader />
      <Content />
    </ThemeProvider>
  );
}

export default App;
