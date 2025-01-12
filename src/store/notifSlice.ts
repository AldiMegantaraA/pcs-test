import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckNotif, Notification } from '../types';

const initialState: CheckNotif = {
    isNotif: false,
    notificationData: [] as Notification[]
}

const notifSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      checkNotif: (state, action: PayloadAction<Notification[]>) => {
        state.notificationData = action.payload;
        state.notificationData.map((item) => {
            if(!item.is_read) {
                state.isNotif = true
            }
        })
      },
    },
});

export const { checkNotif } = notifSlice.actions;
export default notifSlice.reducer;