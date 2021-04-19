/* eslint-disable no-param-reassign */
import axios from 'axios';
import { saveItemInLS, getItemFromLS } from 'utils/storageHelpers';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, UserData, ErrorMessage } from './types';

const initialState = {
  authToken: '',
  login: '',
  isAuthenticate: false,
} as AuthState;

export const signUp = createAsyncThunk<AuthState, UserData>('auth/signUp', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('http://192.168.100.17:5000/api/user/register', userData);
    return data;
  } catch (err) {
    const {
      response: { data, code },
    } = err;
    const customErr = { code, errorMessage: data } as ErrorMessage;
    return rejectWithValue(customErr);
  }
});

export const logIn = createAsyncThunk<AuthState, UserData, { rejectValue: ErrorMessage }>(
  'auth/logIn',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('http://192.168.100.17:5000/api/user/login', userData);
      const { authToken } = data;
      saveItemInLS<string>('auth-token', authToken);
      return data;
    } catch (err) {
      const {
        response: { data, code },
      } = err;
      const customErr = { code, errorMessage: data } as ErrorMessage;
      return rejectWithValue(customErr);
    }
  },
);

export const checkOutLoggedIn = createAsyncThunk('auth/checkOutLoggedIn', async (_, { rejectWithValue }) => {
  const authToken = getItemFromLS('auth-token');
  if (authToken === null) return rejectWithValue({ errorMessage: 'You are logged out' } as ErrorMessage);
  const config = {
    headers: {
      'auth-token': authToken,
    },
  };
  try {
    const { data } = await axios.get('http://192.168.100.17:5000/api/user/checkLoggedIn', config);
    return data;
  } catch (err) {
    const {
      response: { data, code },
    } = err;
    const customErr = { code, errorMessage: data } as ErrorMessage;
    return rejectWithValue(customErr);
  }
});

export const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    logOut: state => {
      localStorage.removeItem('auth-token');
      state.authToken = '';
      state.login = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.isAuthenticate = !state.isAuthenticate;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isAuthenticate = !state.isAuthenticate;
      state.login = action.payload.login;
    });

    builder.addCase(logIn.pending, state => {
      state.isAuthenticate = !state.isAuthenticate;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isAuthenticate = !state.isAuthenticate;
      state.authToken = action.payload.authToken;
      state.login = action.payload.login;
    });
    builder.addCase(checkOutLoggedIn.pending, state => {
      state.isAuthenticate = !state.isAuthenticate;
    });
    builder.addCase(checkOutLoggedIn.fulfilled, (state, action) => {
      state.isAuthenticate = !state.isAuthenticate;
      state.authToken = action.payload.authToken;
      state.login = action.payload.login;
    });
    builder.addCase(checkOutLoggedIn.rejected, state => {
      state.isAuthenticate = !state.isAuthenticate;
      state.authToken = '';
    });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
