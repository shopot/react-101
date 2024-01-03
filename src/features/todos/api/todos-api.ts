import { AxiosInstance } from 'axios';

import type { Todo } from '../types';
import { axios } from '@/lib/axios';

class TodosApi {
  axios: AxiosInstance;
  url: string;

  constructor(axiosInstance: AxiosInstance, url: string) {
    this.axios = axiosInstance;
    this.url = url;
  }

  public async getAll(page: number, limit: number) {
    const { data, headers } = await axios.get<Todo[]>(`${this.url}?_page=${page}&_limit=${limit}`);

    return {
      results: data,
      totalCount: Number(headers['x-total-count']) || 0,
    };
  }

  public create(data: Todo) {
    return axios.post(this.url, data);
  }

  public update(id: string, data: Todo) {
    return axios.put(`${this.url}/${id}`, data);
  }

  public remove(id: string) {
    return axios.delete(`${this.url}/${id}`);
  }
}

export const todosApi = new TodosApi(axios, '/todos');
