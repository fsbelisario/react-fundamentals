import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ selectedTheme, onToggleTheme }) {

  useEffect(() => {
    function handleScroll() {
      console.debug('scroll executed');
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      console.debug('Component unmounted & eventListener removed');
    }
  }, [])

  return (
    <>
      <Header
        selectedTheme={selectedTheme}
        onToggleTheme={onToggleTheme} />
      <PostsList />
      <Footer
        selectedTheme={selectedTheme}
        onToggleTheme={onToggleTheme} />
    </>
  );
}