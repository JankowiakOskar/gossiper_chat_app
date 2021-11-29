/* eslint-disable no-param-reassign */
import axios from 'axios';
import { saveItemInLS, getItemFromLS } from 'utils/storageHelpers';
import { setAuthAxiosConfig } from 'services/authAxios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorMessage, Error } from 'utils/types/interfaces';
import { ProcessStatus } from 'utils/types/enums';
import { AuthState, AuthTokenType, UserData } from './types';

const initialState = {
  authToken: '',
  login: '',
  authProcess: ProcessStatus.Idle,
} as AuthState;

export const signUp = createAsyncThunk<AuthState, UserData, { rejectValue: ErrorMessage }>(
  'auth/signUp',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('http://192.168.100.146:5000/api/user/register', userData);
      return data;
    } catch (err) {
      const {
        response: { data, code },
      } = err as Error;
      const customErr = { code, errorMessage: data };
      return rejectWithValue(customErr);
    }
  },
);

export const logIn = createAsyncThunk<AuthState, UserData, { rejectValue: ErrorMessage }>(
  'auth/logIn',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('http://192.168.100.146:5000/api/user/login', userData);
      const { authToken } = data;
      saveItemInLS('auth-token', authToken);
      setAuthAxiosConfig(authToken);
      return data;
    } catch (err) {
      const {
        response: { data, code },
      } = err as Error;
      const customErr = { code, errorMessage: data };
      return rejectWithValue(customErr);
    }
  },
);

export const checkOutLoggedIn = createAsyncThunk('auth/checkCredentials', async (_, { rejectWithValue }) => {
  const authToken: AuthTokenType | null = getItemFromLS('auth-token');
  if (!authToken) return {};
  setAuthAxiosConfig(authToken);
  try {
    const { data } = await axios.post('http://192.168.100.146:5000/api/user');
    return data;
  } catch (err) {
    const {
      response: { data, code },
    } = err as Error;
    const customErr = { code, errorMessage: data } as ErrorMessage;
    return rejectWithValue(customErr);
  }
});

export const authSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    logOut: state => {
      state.authToken = '';
      state.login = '';
      localStorage.removeItem('auth-token');
      setAuthAxiosConfig('');
    },
    setIdleAuthProcess: state => {
      state.authProcess = ProcessStatus.Idle;
    },
  },
  extraReducers: builder => {
    builder.addCase(signUp.pending, state => {
      state.authProcess = ProcessStatus.Started;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.authProcess = ProcessStatus.Success;
      state.login = action.payload.login;
    });
    builder.addCase(signUp.rejected, state => {
      state.authProcess = ProcessStatus.Rejected;
    });

    builder.addCase(logIn.pending, state => {
      state.authProcess = ProcessStatus.Started;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.authProcess = ProcessStatus.Success;
      state.authToken = action.payload.authToken;
      state.login = action.payload.login;
    });
    builder.addCase(logIn.rejected, state => {
      state.authProcess = ProcessStatus.Rejected;
    });
    builder.addCase(checkOutLoggedIn.pending, state => {
      state.authProcess = ProcessStatus.Started;
    });
    builder.addCase(checkOutLoggedIn.fulfilled, (state, action) => {
      state.authProcess = ProcessStatus.Success;
      state.authToken = action.payload.authToken;
      state.login = action.payload.login;
    });
    builder.addCase(checkOutLoggedIn.rejected, state => {
      state.authProcess = ProcessStatus.Rejected;
      state.authToken = '';
    });
  },
});

export const { logOut, setIdleAuthProcess } = authSlice.actions;

export default authSlice.reducer;
