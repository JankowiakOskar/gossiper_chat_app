import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from 'features/auth/authSlice';
import chatRoomsReducer from 'features/chatRooms/chatRoomsSlice';

export const store = configureStore({
  reducer: {
    // Specify our reducer in the reducers object:
    auth: authReducer,
    chatRooms: chatRoomsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
