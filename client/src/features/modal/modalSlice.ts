/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalKind, ModalState } from './types';

const initialState = {
  selectedModal: '',
} as ModalState;

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSelectedModal: (state, action: PayloadAction<ModalKind>) => {
      state.selectedModal = action.payload;
    },
    closeModal: state => {
      state.selectedModal = '';
    },
  },
});

export const { openSelectedModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
