import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type StoreType = typeof store;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
