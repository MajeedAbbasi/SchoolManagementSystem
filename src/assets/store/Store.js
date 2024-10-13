import { configureStore } from "@reduxjs/toolkit";
import StdActionSlice from "../Slices/StdActionSlice";
import ThrActionSlice from "../Slices/ThrActionSlice";
import BookSlice from "../Slices/BookSlice";
import NotificationSlice from "../Slices/NotificationSlice";
import MessageSlice from "../Slices/MessageSlice";
const Store = configureStore({
  reducer: {
    stdAction: StdActionSlice,
    tchrAction: ThrActionSlice,
    BookSlice: BookSlice,
    NotificationSlice: NotificationSlice,
    MessageSlice: MessageSlice,
  },
});
export default Store;
