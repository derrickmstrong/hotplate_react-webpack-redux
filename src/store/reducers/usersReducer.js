import * as ActionTypes from '../actionTypes';

const intiState = {
  isLoading: false,
  data: [],
  error: null,
};

export const usersReducer = (state = intiState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ActionTypes.FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
