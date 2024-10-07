import { configureStore } from "@reduxjs/toolkit";
import StdActionSlice from "../Slices/StdActionSlice";
import ThrActionSlice from "../Slices/ThrActionSlice";
import BookSlice from "../Slices/BookSlice";
const Store = configureStore({
  reducer: {
    stdAction: StdActionSlice,
    tchrAction: ThrActionSlice,
    BookSlice: BookSlice,
  },
});
export default Store;
