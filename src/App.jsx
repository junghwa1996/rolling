import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './styles/common/reset.css';
import './styles/common/variables.css';
import Content from './router/Content';
import { light, dark } from './styles/themes/theme';
import GlobalStyles from './styles/common/global.styles';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DarkModeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ToastContainer />
      <Content />
    </ThemeProvider>
  );
}

export default App;
