import { createSlice } from "@reduxjs/toolkit";

const NotificationSlice = createSlice({
  name: "NotificationSlice",
  initialState: {
    notification: 0,
    notifications: [],
  },
  reducers: {
    setNotification: (state, action) => {
      if (action.payload == 1) {
        state.notification += action.payload;
      } else {
        state.notification = action.payload;
      }
    },
    setNotifications: (state, action) => {
      if (action.payload == 0) {
        state.notifications = [];
      } else {
        state.notifications.push(action.payload);
      }
    },
  },
});
export const { setNotification, setNotifications } = NotificationSlice.actions;
export default NotificationSlice.reducer;
