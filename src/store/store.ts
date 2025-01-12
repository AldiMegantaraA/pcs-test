import { configureStore } from '@reduxjs/toolkit';
import attendanceReducer from './attendanceSlice';
import notifReducer from './notifSlice';

export const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
    notif: notifReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;