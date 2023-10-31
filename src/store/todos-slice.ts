import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodosState = {
  todos: Todo[];
};

const initialState: TodosState = {
  todos: [
    { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', title: 'Learn React', completed: true },
    { id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', title: 'Learn Redux', completed: false },
    { id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', title: 'Build something fun!', completed: false },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuidv4(),
        title: action.payload,
        completed: false,
      });
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },

    toggleTodoCompleted: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
  },
});

export const { addNewTodo, removeTodo, toggleTodoCompleted } = todosSlice.actions;

export const selectTodos = (state: TodosState) => state.todos;

export default todosSlice.reducer;