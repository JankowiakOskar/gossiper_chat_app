/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorMessage } from 'utils/types/interfaces';
import { sleeper } from 'utils';
import { ChatRoomsState, ChatRoom, ChatRoomPreview } from './types';

const initialState = {
  chatRooms: [],
  isLoading: false,
  error: {
    errorMessage: '',
  },
} as ChatRoomsState;

export const fetchChatRooms = createAsyncThunk<ChatRoom[]>('chatrooms/fetchById', async (_, { rejectWithValue }) => {
  try {
    await sleeper(1000);
    const {
      data: { chatRooms },
    } = await axios.get('http://192.168.100.17:5000/api/chat/chatrooms');
    return chatRooms;
  } catch (err) {
    const {
      response: { data, code },
    } = err;
    const customError = { code, errorMessage: data } as ErrorMessage;
    return rejectWithValue(customError);
  }
});

export const createChatRoom = createAsyncThunk<ChatRoom[], ChatRoomPreview>(
  'chatrooms/createRoom',
  async (roomData, { rejectWithValue }) => {
    const newChatRoom: ChatRoom = {
      ...roomData,
      users: [],
      messages: [],
    };
    try {
      const {
        data: { chatRooms },
      } = await axios.put('http://192.168.100.17:5000/api/chat/chatrooms/create', newChatRoom);
      return chatRooms as ChatRoom[];
    } catch (err) {
      const {
        response: { data, code },
      } = err;
      const customError = { code, errorMessage: data } as ErrorMessage;
      return rejectWithValue(customError);
    }
  },
);

export const chatRoomsSlice = createSlice({
  name: 'chatRooms',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchChatRooms.pending, state => {
      state.isLoading = !state.isLoading;
    });
    builder.addCase(fetchChatRooms.fulfilled, (state, { payload }) => {
      state.isLoading = !state.isLoading;
      state.chatRooms = [...payload];
    });
    builder.addCase(fetchChatRooms.rejected, (state, action) => {
      state.isLoading = !state.isLoading;
    });
  },
});

export default chatRoomsSlice.reducer;
