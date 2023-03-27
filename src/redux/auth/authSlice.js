import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, singIn, singOut, singUp } from './operation';

const initialState = {
  name: '',
  token: '',
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(singUp.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(singIn.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(singOut.fulfilled, (state, action) => {
        state.name = '';
        state.token = '';
        state.isLogin = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.name = action.payload.name;
        state.isLogin = true;
      });
  },
});

export default authSlice.reducer;
