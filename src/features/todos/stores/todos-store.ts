import { makeAutoObservable, reaction, runInAction } from 'mobx';

import { DEFAULT_ITEM_PER_PAGE } from '@/config';

import type { Todo } from '../types';
import { todosApi } from '../api/todos-api';
import { createId } from '@/lib/uuid';

export class TodosStore {
  todos: Todo[];
  totalCount: number;
  state: 'pending' | 'done' | 'error';
  page: number;
  limit: number;

  constructor(limit: number) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.todos = [];
    this.totalCount = 0;
    this.state = 'pending';
    this.page = 1;
    this.limit = limit;
  }

  public setNextPage(page: number) {
    this.page = page;
  }

  public getTotalPages() {
    return Math.ceil(this.totalCount / this.limit);
  }

  public async fetchTodos(page: number): Promise<void> {
    this.state = 'pending';
    this.todos = [];

    try {
      const { results, totalCount } = await todosApi.getAll(page, this.limit);

      runInAction(() => {
        this.todos = results;
        this.totalCount = totalCount;
        this.state = 'done';
      });
    } catch {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  public async addTodo(text: string): Promise<void> {
    const newTodo = {
      id: createId(),
      text,
      completed: false,
    } as Todo;

    try {
      await todosApi.create(newTodo);

      await this.fetchTodos(this.page);
    } catch {
      console.log("Can't add new todo.");
    }
  }

  public async removeTodo(id: string) {
    try {
      await todosApi.remove(id);

      if (this.todos.length === 1 && this.page > 1) {
        runInAction(() => {
          this.page -= 1;
        });
      } else {
        await this.fetchTodos(this.page);
      }
    } catch {
      console.log("Can't remove todo.");
    }
  }

  public async toggleTodo(id: string) {
    const findTodo = this.todos.find((todo) => todo.id === id);

    if (!findTodo) {
      return;
    }

    try {
      await todosApi.update(id, { ...findTodo, completed: !findTodo.completed });

      runInAction(() => {
        findTodo.completed = !findTodo.completed;
      });
    } catch {
      console.log("Can't toggle todo.");
    }
  }
}

export const todosStore = new TodosStore(DEFAULT_ITEM_PER_PAGE);

reaction(
  () => todosStore.page,
  (page) => {
    void todosStore.fetchTodos(page);
  }
);
