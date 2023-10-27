import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
    { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', title: 'Learn React', completed: true },
    { id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', title: 'Learn Redux', completed: false },
    { id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', title: 'Build something fun!', completed: false },
  ],
};

export type TodosState = typeof initialState;

export type TodosAction = {
  type: string;
  payload: string;
};

export type TodosDispatch = (args: TodosAction) => TodosAction;

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
  switch (action.type) {
    case 'todos/addNewTodo': {
      return {
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            title: action.payload,
            completed: false,
          },
        ],
      };
    }

    case 'todos/removeTodo': {
      return {
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };
    }

    case 'todos/toggleCompleted': {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }

          return todo;
        }),
      };
    }

    default:
      return state;
  }
};
