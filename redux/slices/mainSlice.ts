import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount(state) {
      state.count++;
    },
  },
});

export const { increaseCount } = mainSlice.actions;
export default mainSlice.reducer;
