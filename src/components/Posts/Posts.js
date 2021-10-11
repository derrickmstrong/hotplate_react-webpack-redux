import React, { useEffect } from 'react';

const Posts = ({ loading, posts, error, getPosts }) => {
  useEffect(() => {
    getPosts();
    return () => {};
  }, [getPosts]);

  if (!posts) return null;

  const renderPosts = () => {
    if (loading) return 'Loading...';
    if (error) return <h1>Error: {error.message}</h1>;
    return posts.map(post => <h2 key={post.id}>{post.title}</h2>);
  };

  return <div>{renderPosts()}</div>;
};

export default Posts;
