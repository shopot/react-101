import { ReactNode, useReducer } from 'react';

import { todoReducer } from '@/reducers/todo';
import { TodoContext, TodoDispatchContext } from '@/contexts';

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

type TodoProviderProps = {
  children?: ReactNode;
};
