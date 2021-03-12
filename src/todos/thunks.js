import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completedTodo
} from "./actions";

// Get
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    // const response = await fetch('http://localhost:8082/todos')
    const response = await fetch("http://localhost:8082/todos-delay");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

// Post
export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch(`http://localhost:8082/todos`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

// Update
export const completedRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8082/todos/${id}/completed`, {
      method: "post",
    });
    const updatedTodo = await response.json();
    dispatch(completedTodo(updatedTodo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

// Delete
export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8082/todos/${id}`, {
      method: "delete",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

// Test
export const displayAlert = (text) => () => {
  alert(text);
};
