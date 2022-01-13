import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: new Date().toLocaleString(),
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTime(state, action) {
      state.time = action.payload;
    },
  },
});

export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;
