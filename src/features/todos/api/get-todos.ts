import { axios } from '@/lib/axios';

import { Todo } from '../types';

export const getTodos = async ({ page, limit } = { page: 1, limit: 6 }) => {
  try {
    const { data, headers } = await axios.get<Todo[]>(`/todos?_page=${page}&_limit=${limit}`);

    return {
      results: data,
      totalCount: Number(headers['x-total-count']) || 0,
    };
  } catch {
    return {
      results: [],
      totalCount: 0,
    };
  }
};
