import { createSlice } from '@reduxjs/toolkit';
import { IState } from 'types';

const initialState: IState = {
  user: null,
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
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

export const { login, logout, updateTodo, addToList, removeFromList } =
  todoSlice.actions;

export default todoSlice.reducer;
