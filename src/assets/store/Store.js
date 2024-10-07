import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "../Slices/SearchSlice";
import StdActionSlice from "../Slices/StdActionSlice";
import ThrActionSlice from "../Slices/ThrActionSlice";
const Store = configureStore({
  reducer: {
    search: SearchSlice,
    stdAction: StdActionSlice,
    tchrAction: ThrActionSlice,
  },
});
export default Store;
