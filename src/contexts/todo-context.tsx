import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

import { type TodoAction, todoReducer, type TodoState } from '@/reducers/todo';

const TodoContext = createContext<TodoState>([]);

const TodoDispatchContext = createContext<Dispatch<TodoAction>>(() => {});

type TodoProviderProps = {
  children?: ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export const useTodoDispatch = () => useContext(TodoDispatchContext);
