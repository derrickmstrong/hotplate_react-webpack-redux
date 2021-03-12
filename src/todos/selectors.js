import { createSelector } from "reselect";


// Lower order selectors
export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

// Higher order Selectors w/ Reselect
// Seperate todos, Todos and Completed Todos by introducingttttttttttttt Reselect
// getIncompleteTodos(state) will return all the states in which isComplete state is false
export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);
export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
