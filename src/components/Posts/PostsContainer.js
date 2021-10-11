import { connect } from 'react-redux';
import { Posts } from '.';
import { fetchPost } from '../../store/actions';

const mapStateToProps = state => {
  return {
    loading: state.posts.isLoading,
    posts: state.posts.data,
    failed: state.posts.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPost()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
