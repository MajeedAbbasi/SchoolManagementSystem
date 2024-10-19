import { configureStore } from "@reduxjs/toolkit";
import StdActionSlice from "../Slices/StdActionSlice";
import ThrActionSlice from "../Slices/ThrActionSlice";
import BookSlice from "../Slices/BookSlice";
import NotificationSlice from "../Slices/NotificationSlice";
import MessageSlice from "../Slices/MessageSlice";
import PaymentSlice from "../Slices/PaymentSlice";
import AccessSlice from "../Slices/AccessSlice";
const Store = configureStore({
  reducer: {
    stdAction: StdActionSlice,
    tchrAction: ThrActionSlice,
    BookSlice: BookSlice,
    NotificationSlice: NotificationSlice,
    MessageSlice: MessageSlice,
    PaymentSlice: PaymentSlice,
    AccessSlice: AccessSlice,
  },
});
export default Store;
