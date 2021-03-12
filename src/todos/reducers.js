import {
  COMPLETED_TODO,
  CREATE_TODO,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

// isLoading Reducer
// No longer needed after adding Selectors and modifying Reducers below
// export const isLoading = (state = false, action) => {
//   const { type } = action;
//   switch (type) {
//     case LOAD_TODOS_IN_PROGRESS:
//       return true;
//     case LOAD_TODOS_SUCCESS:
//     case LOAD_TODOS_FAILURE:
//       return false;
//     default:
//       return state;
//   }
// };

// For Selectors
const initialState = { isLoading: false, data: [] };

// todos Reducer
export const todos = (state = initialState, action) => {
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
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    // case REMOVE_TODO: {
    //   const { text } = payload;
    //   return state.filter((todo) => todo.text !== text);
    // }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
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
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        }),
      };
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        isLoading: false,
        data: todos,
      };
    }
    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

/*
  state.todos: {
    data: [...],
    isLoading: true,
  }
*/
