import { createId } from '@/lib/uuid';

import { TodoType } from '../types';

let todosInMemory: TodoType[] = [
  {
    id: 'bd592344-0b02-4796-8a15-3d349137cca8',
    title: 'Learn to use JSX',
    completed: true,
  },
  {
    id: '3e4bc7e6-f79d-4fe6-9056-2821d4c5afd3',
    title: 'Learn to make React Components',
    completed: false,
  },
  {
    id: '8256436e-e605-4884-9865-95ee20688446',
    title: 'Learn how to use Hooks in React',
    completed: false,
  },
  {
    id: '631d1dfc-f7a2-4ebf-a69b-bd6e4b04efe3',
    title: 'Learn to use Zustand',
    completed: false,
  },
];

export const API = {
  getTodos: async () => Promise.resolve(todosInMemory),

  addTodo: async (title: string) => {
    return new Promise<TodoType | null>((resolve) => {
      const newTodo = {
        id: createId(),
        title,
        completed: false,
      };

      todosInMemory = [...todosInMemory, newTodo];

      resolve(newTodo);
    });
  },

  deleteTodoById: async (id: string) => {
    return new Promise<TodoType | null>((resolve) => {
      const deletedTodo = todosInMemory.find((todo) => todo.id === id) || null;

      todosInMemory = todosInMemory.filter((todo) => todo.id !== id);

      resolve(deletedTodo);
    });
  },

  updateTodoById: async (id: string, completed: boolean) => {
    return new Promise<TodoType | null>((resolve) => {
      const updatedTodo = todosInMemory.find((todo) => todo.id === id) || null;

      if (updatedTodo) {
        updatedTodo.completed = completed;
      }

      resolve(updatedTodo);
    });
  },
};
