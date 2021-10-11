import * as ActionTypes from '../actionTypes';

const initState = {
  isLoading: false,
  data: [],
  error: null,
};

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ActionTypes.FETCH_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: error.message,
      };
    default:
      return state;
  }
};
