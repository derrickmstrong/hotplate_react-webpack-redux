export const CREATE_TODO = "CREATE_TODO";
// export const createTodo = (text) => ({
//   type: CREATE_TODO,
//   payload: { text },
// });
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});
export const REMOVE_TODO = "REMOVE_TODO";
// export const removeTodo = (text) => ({
//   type: REMOVE_TODO,
//   payload: { text },
// });
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});
export const COMPLETED_TODO = "COMPLETED_TODO";
// export const completedTodo = (text) => ({
//   type: COMPLETED_TODO,
//   payload: { text },
// });
export const completedTodo = (todo) => ({
  type: COMPLETED_TODO,
  payload: { todo },
});

// Setup for async Thunks
export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});
export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});
export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
