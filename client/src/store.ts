import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authReducer from 'features/auth/authSlice';

// Use `configureStore` function to create the store:
export const store = configureStore({
  reducer: {
    // Specify our reducer in the reducers object:
    auth: authReducer,
  },
});

// Define the `RootState` as the return type:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
