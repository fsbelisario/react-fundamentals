import React from 'react';

import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

import { Container, Subtitle, Likes } from './styles';

function Post(props) {
  return (
    <Container removed={props.post.removed}>
      <PostHeader
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
        onRemove={props.onRemove}
      />
      <Subtitle>{props.post.subtitle}</Subtitle>
      <Likes>Likes: {props.post.likes}</Likes>
    </Container>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Post;