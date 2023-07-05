import { configureStore } from '@reduxjs/toolkit';
import commentsSlice from './slices/commentsSlice';
import productsSlice from './slices/productsSlice';


export const store = configureStore({
  reducer: {
    products: productsSlice,
    comments: commentsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;