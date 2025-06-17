import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './slices/mainSlice';
import apiSlice from './slices/apiSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      main: mainReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
