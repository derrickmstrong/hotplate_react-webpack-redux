import { connect } from 'react-redux';
import { ActionCreators } from '../../store';
import Users from './Users';

const mapStateToProps = state => {
  return {
    isLoading: state.users.isLoading,
    users: state.users.data,
    error: state.users.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(ActionCreators.fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
