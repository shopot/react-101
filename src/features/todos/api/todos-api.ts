import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '@/config';
import { Todo } from '../types';

const QUERY_ENDPOINT = '/todos';

export const todosApi = createApi({
  tagTypes: ['Todos'],

  reducerPath: 'todosApi',

  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (build) => ({
    getTodos: build.query<Todo[], void>({
      query: () => `${QUERY_ENDPOINT}`,
      providesTags: ['Todos'],
    }),

    addTodo: build.mutation<Todo, Partial<Todo>>({
      query(body) {
        const newTodo = {
          ...body,
          completed: false,
          id: uuidv4(),
        };

        return {
          url: `${QUERY_ENDPOINT}`,
          method: 'POST',
          body: newTodo,
        };
      },
      invalidatesTags: ['Todos'],
    }),

    deleteTodo: build.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `${QUERY_ENDPOINT}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Todos'],
    }),

    toggleTodoCompleted: build.mutation<Todo, Partial<Todo>>({
      query(data) {
        const { id, completed, ...rest } = data;

        return {
          url: `${QUERY_ENDPOINT}/${id}`,
          method: 'PUT',
          body: { ...rest, completed: !completed },
        };
      },
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoCompletedMutation,
} = todosApi;
