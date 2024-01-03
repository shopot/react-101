import type { PayloadAction } from '@reduxjs/toolkit';

import { createSliceWithThunks } from '@/lib/redux';
import { counterApi } from '../api/counter-api';
import type { CounterState } from '../types';

const initialState: CounterState = {
  loading: false,
  value: 0,
  error: null,
};

const counterSlice = createSliceWithThunks({
  name: 'counter',
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }),

    decrement: create.preparedReducer(
      (num: number) => ({ payload: num * 2 }),
      (state, action) => {
        state.value -= action.payload;
      }
    ),

    reset: create.reducer((state) => {
      state.value = 0;
    }),

    incrementByAmount: create.asyncThunk(
      async (value: number) => {
        const response = await counterApi.getAmount(value);

        return response.data;
      },
      {
        pending: (state) => {
          state.loading = true;
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error;
        },
        fulfilled: (state, action) => {
          state.value += action.payload;
        },
        settled: (state) => {
          state.loading = false;
        },
      }
    ),
  }),
  selectors: {
    selectCount: (state) => state.value,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export const { selectCount, selectLoading, selectError } = counterSlice.selectors;

export default counterSlice.reducer;
