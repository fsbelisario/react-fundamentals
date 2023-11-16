import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));

    return () => {
      console.debug('Component unmounted');
    }
  }, [theme]);

  useLayoutEffect(() => {
    //Execução síncrona antes do carregamento da tela
    console.debug('useLayoutEffect executed');

    return () => {
      console.debug('Component unmounted');
    }
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
        selectedTheme={theme}
        onToggleTheme={handleToggleTheme}
      />
    </ThemeProvider>
  )
}

export default App;