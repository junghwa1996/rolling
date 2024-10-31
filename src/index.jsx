import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, styled } from 'styled-components';

import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

export const Warp = styled.div``;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Warp>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Warp>,
);
