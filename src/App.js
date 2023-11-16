import React, { useMemo, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    console.log(themes[theme] || themes.dark)
    console.log((themes[theme] || themes.dark).spacing.small)
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  }

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