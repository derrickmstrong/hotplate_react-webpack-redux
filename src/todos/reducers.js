import {
  COMPLETED_TODO,
  CREATE_TODO,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

// isLoading Reducer
export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;
    default:
      return state;
  }
};

// todos Reducer
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    // case CREATE_TODO: {
    //   const { text } = payload;
    //   const newTodo = {
    //     text,
    //     isCompleted: false,
    //   };
    //   return state.concat(newTodo);
    // }
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }
    // case REMOVE_TODO: {
    //   const { text } = payload;
    //   return state.filter((todo) => todo.text !== text);
    // }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return state.filter((todo) => todo.id !== todoToRemove.id);
    }
    // case COMPLETED_TODO: {
    //   const { text } = payload;
    //   return state.map((todo) => {
    //     if (todo.text === text) {
    //       return { ...todo, isCompleted: true };
    //     }
    //     return todo;
    //   });
    // }
    case COMPLETED_TODO: {
      const { todo: updatedTodo } = payload;
      return state.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
