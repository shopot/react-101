import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store';

import { counterApi } from '../api/counter-api';

export interface CounterState {
  value: number;
}

// First, create the thunk
export const incrementByAmount = createAsyncThunk('counter/incrementByAmount', async () => {
  const response = await counterApi.getAmount();

  return response.data;
});

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount.fulfilled, (state, { payload }) => {
      state.value += payload;
    });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

// Selectors
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
