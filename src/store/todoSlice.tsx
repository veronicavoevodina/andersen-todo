import { createSlice } from '@reduxjs/toolkit';
import { ITodoState } from 'types';

export const initialState: ITodoState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    updateTodo: (state, action) => {
      state.todo = state.todo.map((el) => {
        if (el.id === action.payload.id) {
          el = action.payload;
        }
        return el;
      });
    },
    addToList: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    removeFromList: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
  },
});

export const { updateTodo, addToList, removeFromList } = todoSlice.actions;

export default todoSlice.reducer;
