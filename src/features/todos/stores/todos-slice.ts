import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { TodosState } from '../types';

import { getTodos } from '../api/get-todos';

const initialState: TodosState = {
  todos: [],
  loading: false,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => await getTodos());

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

    toggleTodoCompleted: ({ todos }, { payload }: PayloadAction<string>) => {
      const todo = todos.find(({ id }) => id === payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
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
