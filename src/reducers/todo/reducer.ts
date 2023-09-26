import { TodoAction, TodoState } from './types';
import { ADD_NEW_TODO, REMOVE_TODO, TOGGLE_COMPLETED } from './actions';

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  const { type, todoId, title } = action;

  switch (type) {
    case ADD_NEW_TODO: {
      if (!title || !todoId) {
        break;
      }

      return [...state, { id: todoId, title, completed: false }];
    }

    case REMOVE_TODO: {
      return state.filter(({ id }) => id !== todoId);
    }

    case TOGGLE_COMPLETED: {
      return state.map((t) => {
        if (t.id === todoId) {
          return { ...t, completed: !t.completed };
        }

        return t;
      });
    }
  }

  throw new Error('Unknown action: ' + action.type);
};
