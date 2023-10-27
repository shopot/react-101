import { createStore, Store } from 'redux';

import { TodosAction, TodosDispatch, todosReducer, TodosState } from '@/store/todos/todos-reducer';

export type AppState = Store<TodosState, TodosAction> & {
  dispatch: TodosDispatch;
};

export const store: AppState = createStore(todosReducer);
