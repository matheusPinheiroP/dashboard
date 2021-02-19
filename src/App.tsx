import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './Layout';
import GlobalStyle from './styles/globals';
// import usePersistedState from './hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
