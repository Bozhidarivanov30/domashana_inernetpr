import React from 'react';
import PostList from './PostList';

const Content = ({ posts }) => {
  return (
    <div className="content">
      <PostList posts={posts} />
    </div>
  );
};

export default Content;
