import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import './styles/reset.css';
import './styles/common.css';
import Content from './router/Content';
import { light, dark } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import EmojiPickerComponent from './layout/Emoji/EmojiPickerComponent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? dark : light;

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* TODO : header 조합 전 테스트용 입니다. 조합 하실때 지워주세요*/}
      {/* <EmojiPickerComponent /> */}
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Content />
    </ThemeProvider>
  );
}

export default App;
