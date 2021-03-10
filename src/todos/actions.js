export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});
export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
export const COMPLETED_TODO = "COMPLETED_TODO";
export const completedTodo = (text) => ({
  type: COMPLETED_TODO,
  payload: { text },
});
