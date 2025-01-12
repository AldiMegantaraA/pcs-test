import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AttendanceState } from '../types';

const initialState: AttendanceState = {
    checkInTime: null,
    checkOutTime: null,
    workingHours: '00:00:00',
    isCheckedIn: false,
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    checkIn: (state) => {
      state.checkInTime = new Date().toISOString();
      state.isCheckedIn = true;
      state.checkOutTime = null;
    },
    checkOut: (state) => {
      state.checkOutTime = new Date().toISOString();
      state.isCheckedIn = false;
    },
    updateWorkingHours: (state, action: PayloadAction<string>) => {
      state.workingHours = action.payload;
    },
  },
});

export const { checkIn, checkOut, updateWorkingHours } = attendanceSlice.actions;
export default attendanceSlice.reducer;