import { createSlice } from "@reduxjs/toolkit";

const ThrActionSlice = createSlice({
  name: "tchrAction",
  initialState: {
    tchrAction: null,
    tchrUpdate: null,
  },
  reducers: {
    setView: (state, action) => {
      state.tchrAction = action.payload;
    },
    setUpdate: (state, action) => {
      state.tchrUpdate = action.payload;
    },
  },
});
export const { setView, setUpdate } = ThrActionSlice.actions;
export default ThrActionSlice.reducer;
