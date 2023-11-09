import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { v4 as uuidv4 } from 'uuid';

import { API_URL } from '@/config';
import { Todo, TodosState } from '../types';
import { getRandomColor } from '../helpers';

const TODOS_API_ENDPOINT = '/todos';
const MAX_ITEM_PER_PAGE = 6;

export const todosApiSlice = createApi({
  tagTypes: ['Todos'],

  reducerPath: 'todosApiSlice',

  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  keepUnusedDataFor: 0,

  endpoints: (build) => ({
    getTodos: build.query<TodosState, number>({
      query: (page = 1) => `${TODOS_API_ENDPOINT}?_page=${page}&_limit=${MAX_ITEM_PER_PAGE}`,

      providesTags: ['Todos'],

      transformResponse: (response: Todo[], meta, arg) => {
        const totalCount = Number(meta?.response?.headers.get('X-Total-Count') || response.length);

        return {
          results: response.map((todo) => ({ ...todo, color: getRandomColor() })),
          totalCount,
          totalPages: Math.floor(totalCount / MAX_ITEM_PER_PAGE),
          currentPage: arg,
        };
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
      query: ({ id, completed = false }) => ({
        url: `${TODOS_API_ENDPOINT}/${id}`,
        method: 'PATCH',
        body: { completed },
      }),

      onQueryStarted: ({ id, completed }, { dispatch, queryFulfilled, getState }) => {
        if (!id) {
          return;
        }

        console.log(getState());

        // const result = todosApiSlice.util
        //   .selectInvalidatedBy(getState(), ['Todos'])
        //   .find((desc) => desc.endpointName === 'getTodos');

        // const pageArg = Number(result?.originalArgs || 1);

        const patchResult = dispatch(
          todosApiSlice.util.updateQueryData('getTodos', 1, ({ results }) => {
            const index = results.findIndex((todo: Todo) => todo.id === id);

            if (index !== -1) {
              results[index].completed = Boolean(completed);
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
