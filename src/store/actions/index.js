import axios from 'axios';
import * as ActionTypes from '../actionTypes';

export const fetchPost = () => async (dispatch) => {
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
