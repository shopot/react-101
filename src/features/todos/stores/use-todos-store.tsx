import { create } from 'zustand';

import { createId } from '@/lib/uuid';

import { TodoType } from '../types';

export type TodosStateType = {
  todos: TodoType[];
};

export type TodosActionsType = {
  removeTask: (id: string) => void;
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
};

export type TodosState = TodosStateType & TodosActionsType;

const initialState: TodosStateType = {
  todos: [
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
  ],
};

export const useTodosStore = create<TodosState>((set) => ({
  ...initialState,

  removeTask: (id: string) => {
    set((state) => ({ todos: state.todos.filter((task) => task.id !== id) }));
  },

  addTask: (title: string) => {
    set((state) => ({ todos: [...state.todos, { id: createId(), title, completed: false }] }));
  },

  toggleTask: (id: string) => {
    set((state) => {
      const todos = [...state.todos];

      const index = todos.findIndex((task) => task.id === id);

      if (index !== -1) {
        todos[index].completed = !todos[index].completed;

        return { todos };
      }

      return state;
    });
  },
}));
