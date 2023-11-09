import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '@/config';
import { Todo } from '../types';
import { getRandomColor } from '../utils';

const TODOS_API_ENDPOINT = '/todos';

export const todosApiSlice = createApi({
  tagTypes: ['Todos'],

  reducerPath: 'todosApi',

  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (build) => ({
    getTodos: build.query<Todo[], void>({
      query: () => `${TODOS_API_ENDPOINT}`,
      providesTags: ['Todos'],
      transformResponse: (response: Todo[]) => {
        return response.map((todo) => ({ ...todo, color: getRandomColor() }));
      },
    }),

    addTodo: build.mutation<Todo, Partial<Todo>>({
      query: (todoData) => {
        const newTodo = {
          ...todoData,
          completed: false,
          id: uuidv4(),
        };

        return {
          url: `${TODOS_API_ENDPOINT}`,
          method: 'POST',
          body: newTodo,
        };
      },
      invalidatesTags: ['Todos'],
    }),

    deleteTodo: build.mutation<unknown, string>({
      query(id) {
        return {
          url: `${TODOS_API_ENDPOINT}/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Todos'],
    }),

    toggleTodoCompleted: build.mutation<unknown, Pick<Todo, 'id'> & Partial<Todo>>({
      query: ({ id, ...patch }) => ({
        url: `${TODOS_API_ENDPOINT}/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      onQueryStarted: ({ id, completed }, { dispatch, queryFulfilled }) => {
        if (!id) {
          return;
        }

        const patchResult = dispatch(
          todosApiSlice.util.updateQueryData('getTodos', undefined, (draft) => {
            const index = draft.findIndex((todo: Todo) => todo.id === id);

            if (index !== -1) {
              draft[index].completed = Boolean(completed);
            }
          })
        );

        queryFulfilled.catch(patchResult.undo);
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoCompletedMutation,
} = todosApiSlice;
