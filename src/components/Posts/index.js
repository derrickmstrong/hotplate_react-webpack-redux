import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../store/actions';

const Posts = () => {
  const loading = useSelector(state => state.posts.isLoading)
  const posts = useSelector(state => state.posts.data)
  const error = useSelector(state => state.posts.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPost());
    return () => {};
  }, [dispatch]);

  if (!posts) return null;

  const renderPosts = () => {
    if (loading) return 'Loading...';
    if (error) return <h1>Error: {error.message}</h1>;
    return posts.map(post => <h2 key={post.id}>{post.title}</h2>);
  };

  return <div>{renderPosts()}</div>;
};

export default Posts;
