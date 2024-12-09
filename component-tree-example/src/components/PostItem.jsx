import React from 'react';

const PostItem = ({ post }) => {
  return (
    <article style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </article>
  );
};

export default PostItem;
