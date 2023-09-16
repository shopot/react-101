import { TodoAction, TodoState } from './types.ts';
import { ADD_NEW_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from './actions.ts';

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  const getLastId = () => (state.length ? state[state.length - 1].id : 0);

  const { type, todoId, title } = action;

  switch (type) {
    case ADD_NEW_TODO: {
      if (!title) {
        break;
      }

      const newTodo = {
        id: getLastId() + 1,
        title,
        completed: false,
      };

      const newState = structuredClone<TodoState>(state);

      newState.push(newTodo);

      return newState;
    }

    case REMOVE_TODO: {
      if (!todoId) {
        break;
      }

      return structuredClone<TodoState>(state).filter(({ id }) => id !== todoId);
    }

    case TOGGLE_COMPLETED: {
      if (!todoId) {
        break;
      }

      const findIndex = state.findIndex(({ id }) => id === todoId);

      if (findIndex !== -1) {
        const newState = structuredClone<TodoState>(state);

        const todo = newState[findIndex];

        newState[findIndex] = { ...todo, completed: !todo.completed };

        return newState;
      }
    }
  }

  // Return unchanged state
  return structuredClone<TodoState>(state);
};
