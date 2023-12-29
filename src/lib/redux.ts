import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';

// This name is up to you
export const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
