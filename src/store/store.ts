import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todosApiSlice } from '@/features/todos';

export const rootReducer = combineReducers({
  [todosApiSlice.reducerPath]: todosApiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true, // Defaults to true.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
