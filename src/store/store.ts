import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todosApi } from '@/features/todos';

export const rootReducer = combineReducers({
  [todosApi.reducerPath]: todosApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true, // Defaults to true.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
