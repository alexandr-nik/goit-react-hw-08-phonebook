import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const singUp = createAsyncThunk(
  'auth/singup',
  async (user, thunkAPI) => {
    try {
      console.log(user);
      const response = await axios.post('/users/signup', user);
      console.log(response);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const singIn = createAsyncThunk(
  'auth/singin',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);  
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const singOut = createAsyncThunk(
  'auth/singOut',
  async (_, thunkAPI) => {
      try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
     const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
     return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);   
  }
);
