import React from 'react';
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';

const Main = ({ posts }) => (
  <main style={{ display: 'flex' }}>
    <Sidebar />
    <Content posts={posts} />
  </main>
);

export default Main;
