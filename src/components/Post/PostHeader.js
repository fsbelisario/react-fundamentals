import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button';

function PostHeader(props) {
  return (
    <>
      <>
        <strong>
          {props.post.read
            ? <s>{props.post.title}</s>
            : props.post.title
          }
        </strong> <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button><br />
      </>
    </>
  )
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PostHeader;