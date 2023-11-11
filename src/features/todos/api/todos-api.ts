import { Todo } from '../types';

let data = [
  { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', title: 'Learn React', completed: true },
  { id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', title: 'Learn Redux', completed: false },
  { id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b', title: 'Build something fun!', completed: false },
];

export const todosApi = {
  getTodos: async () => new Promise<Todo[]>((resolve) => resolve(data)),

  addTodo: async (todo: Todo) => {
    data.push({ ...todo });

    return new Promise<Todo>((resolve) => resolve(todo));
  },

  updateTodo: async ({ id, ...patch }: Partial<Todo>) => {
    const index = data.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      data[index] = { ...data[index], ...patch };
    }

    return new Promise<Todo>((resolve) => resolve(data[index]));
  },

  deleteTodo: async (id: string) => {
    data = data.filter((todo) => todo.id !== id);

    return new Promise<string>((resolve) => resolve(id));
  },
};
