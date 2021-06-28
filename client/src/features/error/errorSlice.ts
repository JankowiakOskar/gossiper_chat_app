/* eslint-disable no-param-reassign */
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorMessage } from 'utils/types/interfaces';

const isRejectedAction = (action: AnyAction) => action.type.endsWith('rejected');

const initialState = {
  errorMessage: '',
  code: '',
} as ErrorMessage;

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    deleteError: state => {
      state.errorMessage = '';
      state.code = '';
    },
  },
  extraReducers: builder => {
    builder.addMatcher(isRejectedAction, (state, action: PayloadAction<ErrorMessage | undefined>) => {
      if (action.payload) {
        state.errorMessage = action.payload.errorMessage;
      } else {
        state.errorMessage = 'Something went wrong';
      }
    });
  },
});

export const { deleteError } = errorSlice.actions;

export default errorSlice.reducer;
