import axios from 'axios';
import * as ActionTypes from '../actionTypes';

export const fetchPost = () => async dispatch => {
  dispatch({
    type: ActionTypes.FETCH_POSTS_LOADING,
  });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    dispatch({
      type: ActionTypes.FETCH_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_POSTS_FAILED,
      payload: error,
    });
  }
};

export const fetchUsers = () => async dispatch => {
  dispatch({
    type: ActionTypes.FETCH_USERS_LOADING,
  });

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    dispatch({
      type: ActionTypes.FETCH_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_USERS_FAILED,
      payload: error.message,
    });
  }
};
