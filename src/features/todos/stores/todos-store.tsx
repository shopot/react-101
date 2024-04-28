import { type PropsWithChildren, createContext, useRef, useContext } from 'react';
import { createStore, useStore } from 'zustand';

import { API } from '../api';
import { TodoType } from '../types';

export interface TodosStateProps {
  todos: TodoType[];
  isLoading: boolean;
}

export interface TodosStateInterface extends TodosStateProps {
  deleteTodo: (id: string) => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  loadTodos: () => void;
}

export type TodosStoreType = ReturnType<typeof createTodosStore>;

const createTodosStore = (initialProps: Partial<TodosStateProps>) => {
  const DEFAULT_PROPS: TodosStateProps = {
    todos: [],
    isLoading: false,
  };

  return createStore<TodosStateInterface>()((set, get) => ({
    ...DEFAULT_PROPS,
    ...initialProps,

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
      set({ isLoading: true });

      const todos = await API.getTodos();

      set({ todos, isLoading: false });
    },
  }));
};

const TodosStoreContext = createContext<TodosStoreType | null>(null);

export const TodosStoreProvider = ({ children, ...props }: PropsWithChildren<TodosStateProps>) => {
  const storeRef = useRef<TodosStoreType>();

  if (!storeRef.current) {
    storeRef.current = createTodosStore(props);
  }

  return (
    <TodosStoreContext.Provider value={storeRef.current}>{children}</TodosStoreContext.Provider>
  );
};

export const useTodosContext = <T,>(selector: (state: TodosStateInterface) => T): T => {
  const store = useContext(TodosStoreContext);

  if (!store) {
    throw new Error('Missing TodosStoreProvider.Provider in the tree');
  }

  return useStore(store, selector);
};
