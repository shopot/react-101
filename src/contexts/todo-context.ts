import { createContext, Dispatch } from 'react';

import { TodoAction, TodoState } from '@/reducers/todo';

export const TodoContext = createContext<TodoState>([]);

export const TodoDispatchContext = createContext<Dispatch<TodoAction>>(() => {});
