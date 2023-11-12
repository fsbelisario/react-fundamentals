import React, { useState } from 'react';

import { ThemeProvider } from '../../context/ThemeContext';

import Button from '../Button';
import Header from '../Header';
import Post from '../Post';

import { Title } from './styles';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Título da notícia 01',
      subtitle: 'Subtítulo da notícia 01',
      likes: 20,
      read: false,
      removed: true
    },
    {
      id: 2,
      title: 'Título da notícia 02',
      subtitle: 'Subtítulo da notícia 02',
      likes: 7,
      read: true,
      removed: false
    },
    {
      id: 3,
      title: 'Título da notícia 03',
      subtitle: 'Subtítulo da notícia 03',
      likes: 15,
      read: false,
      removed: false
    }
    ,
    {
      id: 4,
      title: 'Título da notícia 04',
      subtitle: 'Subtítulo da notícia 04',
      likes: 12,
      read: false,
      removed: false
    }
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título da notícia ${prevState.length + 1}`,
        subtitle: `Subtítulo da notícia ${prevState.length + 1}`,
        likes: 20
      }
    ])

    // setPosts([
    //   ...posts,
    //   {
    //     id: posts.length + 1,
    //     post: {
    //       title: `Título da notícia ${posts.length + 1}`,
    //       subtitle: `Subtítulo da notícia ${posts.length + 1}`,
    //     },
    //     likes: 20
    //   }
    // ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      )
    ))
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <Title as='h2'>
          Posts da semana
          <br />
          <Button onClick={handleRefresh}>Atualizar</Button>
        </Title>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          onRemove={handleRemovePost}
        />
      ))
      }
    </ThemeProvider>
  )
}

export default App;