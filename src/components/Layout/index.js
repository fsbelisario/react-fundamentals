import React, { useEffect } from 'react';

import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Routes from '../../Routes';
import Footer from '../Footer';

import { Nav } from './styles';

export default function Layout({ selectedTheme, onToggleTheme }) {
  useEffect(() => {
    function handleScroll() {
      console.debug('scroll executed');
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      console.debug('Component unmounted & eventListener removed');
    };
  }, []);

  return (
    <BrowserRouter>
      <Header
        selectedTheme={selectedTheme}
        onToggleTheme={onToggleTheme}
      />
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/1253'>Post</Link>
      </Nav>
      <Routes />
      <Footer
        selectedTheme={selectedTheme}
        onToggleTheme={onToggleTheme}
      />
    </BrowserRouter>
  );
}
