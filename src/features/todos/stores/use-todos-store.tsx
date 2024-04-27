import { create } from 'zustand';

import { API } from '../api';
import { TodoType } from '../types';

export type TodosStateType = {
  todos: TodoType[];
};

export type TodosActionsType = {
  deleteTodo: (id: string) => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  loadTodos: () => void;
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

export const useTodosStore = create<TodosState>((set, get) => ({
  ...initialState,

  deleteTodo: async (id: string) => {
    await API.deleteTodoById(id);

    get().loadTodos();
  },

  addTodo: async (title: string) => {
    await API.addTodo(title);

    get().loadTodos();
  },

  toggleTodo: async (id: string) => {
    const findTodo = get().todos.find((todo) => todo.id === id);

    if (!findTodo) {
      return;
    }

    await API.updateTodoById(id, !findTodo.completed);

    get().loadTodos();
  },

  loadTodos: async () => {
    const todos = await API.getTodos();

    set({ todos });
  },
}));
