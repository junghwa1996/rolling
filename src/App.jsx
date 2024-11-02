import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Content />
    </ThemeProvider>
  );
}

export default App;
