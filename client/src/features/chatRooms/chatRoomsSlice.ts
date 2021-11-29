/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ErrorMessage, Error } from 'utils/types/interfaces';
import { sleeper } from 'utils';
import { mergeChatRoomWithCreator } from 'utils/roomsUtils';
import { RootState } from 'store';
import { ChatRoomsState, ChatRoom, ChatRoomPreview } from './types';

const initialState = {
  chatRooms: [],
  areFetchingRooms: false,
  isRoomCreating: false,
  roomSignInId: '',
  error: {
    errorMessage: '',
  },
} as ChatRoomsState;

export const fetchChatRooms = createAsyncThunk('chatrooms/fetchById', async (_, { rejectWithValue }) => {
  try {
    await sleeper(1000);
    const {
      data: { chatRooms },
    } = await axios.get('http://192.168.100.146:5000/api/chat/chatrooms');
    return chatRooms;
  } catch (err) {
    const {
      response: { data, code },
    } = err as Error;
    const customError = { code, errorMessage: data } as ErrorMessage;
    return rejectWithValue(customError);
  }
});

export const createChatRoom = createAsyncThunk('chatrooms/createRoom', async (roomData: ChatRoomPreview, { getState, rejectWithValue }) => {
  const {
    auth: { login },
  } = getState() as { auth: { login: string } };

  const roomWithCreator = mergeChatRoomWithCreator(roomData, { createdBy: login });

  try {
    const {
      data: { createdRoom },
    } = await axios.post('http://192.168.100.146:5000/api/chat/chatrooms', roomWithCreator);
    return createdRoom;
  } catch (err) {
    const {
      response: { data, code },
    } = err as Error;

    const customError = { code, errorMessage: data } as ErrorMessage;
    return rejectWithValue(customError);
  }
});

export const signInToRoom = createAsyncThunk(
  '/chatrooms/signIn',
  async (roomCredentials: Required<Pick<ChatRoom, 'password'>>, { getState, rejectWithValue }) => {
    const {
      chatRooms: { roomSignInId },
    } = getState() as RootState;
    const { password } = roomCredentials;
    try {
      const response = await axios.post(`http://192.168.100.146:5000/api/chat/chatrooms/${roomSignInId}`, { password });

      return response;
    } catch (err) {
      const {
        response: { data, code },
      } = err as Error;
      const customError = { code, errorMessage: data } as ErrorMessage;

      return rejectWithValue(customError);
    }
  },
);

export const chatRoomsSlice = createSlice({
  name: 'chatRooms',
  initialState,
  reducers: {
    setRoomSignInId: (state, action: PayloadAction<ChatRoom['id']>) => {
      state.roomSignInId = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchChatRooms.pending, state => {
      state.areFetchingRooms = !state.areFetchingRooms;
    });
    builder.addCase(fetchChatRooms.fulfilled, (state, action) => {
      state.areFetchingRooms = !state.areFetchingRooms;
      state.chatRooms = action.payload;
    });
    builder.addCase(fetchChatRooms.rejected, state => {
      state.areFetchingRooms = !state.areFetchingRooms;
    });
    builder.addCase(createChatRoom.pending, state => {
      state.isRoomCreating = !state.isRoomCreating;
    });
    builder.addCase(createChatRoom.fulfilled, (state, action) => {
      state.isRoomCreating = !state.isRoomCreating;
      state.chatRooms = [...state.chatRooms, action.payload];
    });
    builder.addCase(createChatRoom.rejected, state => {
      state.isRoomCreating = !state.isRoomCreating;
    });
  },
});

export const { setRoomSignInId } = chatRoomsSlice.actions;

export default chatRoomsSlice.reducer;
