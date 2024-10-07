import { createSlice } from "@reduxjs/toolkit";

const StdActionSlice = createSlice({
  name: "stdAction",
  initialState: {
    stdAction: null,
    stdUpdate: null,
  },
  reducers: {
    setView: (state, action) => {
      state.stdAction = action.payload;
    },
    setUpdate: (state, action) => {
      state.stdUpdate = action.payload;
    },
  },
});
export const { setView, setUpdate } = StdActionSlice.actions;
export default StdActionSlice.reducer;
