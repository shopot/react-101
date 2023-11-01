import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { todosApi } from '@/services';
import { Todo, TodosState } from './types';

const initialState: TodosState = {
  todos: [],
  loading: false,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return (await todosApi.getAllTodos()) as Todo[];
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.todos = payload;

        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log(action.error);

        state.loading = false;
      });
  },
});

export const { addNewTodo, removeTodo, toggleTodoCompleted } = todosSlice.actions;

export const selectTodos = (state: TodosState) => state.todos;

export const selectLoading = (state: TodosState) => state.loading;

export const todosReducer = todosSlice.reducer;
