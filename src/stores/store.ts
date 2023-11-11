import { configureStore } from '@reduxjs/toolkit';

import { todosReducer } from '@/features/todos';

export const store = configureStore({
  reducer: todosReducer,
  devTools: true, // Defaults to true.
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
