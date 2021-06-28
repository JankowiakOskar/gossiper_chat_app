import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from 'features/auth/authSlice';
import chatRoomsReducer from 'features/chatRooms/chatRoomsSlice';
import modalReducer from 'features/modal/modalSlice';
import errorReducer from 'features/error/errorSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chatRooms: chatRoomsReducer,
    modal: modalReducer,
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
