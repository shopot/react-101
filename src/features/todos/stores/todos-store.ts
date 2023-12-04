import { makeAutoObservable, runInAction } from 'mobx';

import { getTodos } from '../api/get-todos';
import { Todo } from '../types';

export class TodosStore {
  todos: Todo[] = [];
  totalCount = 0;
  state: 'pending' | 'done' | 'error' = 'pending';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async fetchTodos() {
    this.state = 'pending';
    this.todos = [];

    try {
      const data = await getTodos();

      runInAction(() => {
        this.todos = data.results;
        this.totalCount = data.totalCount;
        this.state = 'done';
      });
    } catch {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}

export const todosStore = new TodosStore();
