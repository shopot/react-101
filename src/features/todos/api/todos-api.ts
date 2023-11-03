import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '@/config';
import { Todo, TodosApiState } from '../types';

const QUERY_ENDPOINT = '/todos';

export const todosApi = createApi({
  tagTypes: ['Todos'],

  reducerPath: 'todosApi',

  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (build) => ({
    getTodos: build.query<TodosApiState, void>({
      query: () => `${QUERY_ENDPOINT}?_limit=10`,
      providesTags: ['Todos'],
      transformResponse: (response: Todo[], meta) => {
        const totalCount = Number(meta?.response?.headers.get('X-Total-Count') || response.length);

        return {
          results: response,
          totalCount,
        };
      },
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

    toggleTodoCompleted: build.mutation<void, Pick<Todo, 'id'> & Partial<Todo>>({
      query: ({ id, ...patch }) => ({
        url: `${QUERY_ENDPOINT}/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        if (!id) {
          return;
        }

        const patchResult = dispatch(
          todosApi.util.updateQueryData('getTodos', undefined, ({ results }) => {
            const index = results.findIndex((todo: Todo) => todo.id === id);

            if (index !== -1) {
              results[index].completed = Boolean(patch.completed);
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
} = todosApi;
