import { createStore, Store, StoreEnhancer } from 'redux';

import { TodosAction, TodosDispatch, todosReducer, TodosState } from './todos';

type WindowWithDevTools = Window & {
  __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, object>;
};

const isReduxDevtoolsExtensionExist = (
  arg: Window | WindowWithDevTools
): arg is WindowWithDevTools => {
  return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
};

export type AppState = Store<TodosState, TodosAction> & {
  dispatch: TodosDispatch;
};

export const store: AppState = createStore(
  todosReducer,
  isReduxDevtoolsExtensionExist(window) ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
);
