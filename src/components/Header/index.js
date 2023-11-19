import React from 'react';

import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Header({ selectedTheme, onToggleTheme }) {
  const history = useHistory();

  function handleNavigate() {
    history.push('/posts');
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type='button' onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button type='button' onClick={handleNavigate} style={{ color: '#FFF' }}>
        Voltar para Posts
      </button>
    </Container>
  );
}
