import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from 'types';

export const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
