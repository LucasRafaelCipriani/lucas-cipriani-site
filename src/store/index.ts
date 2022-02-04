import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from '../slices/globalSlice';

const store = configureStore({
  reducer: {
    globalReducer,
  },
});

export default store;
