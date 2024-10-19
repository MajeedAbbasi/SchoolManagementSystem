import { createSlice } from "@reduxjs/toolkit";

const AccessSlice = createSlice({
  name: "AccessSlice",
  initialState: {
    access: false,
  },
  reducers: {
    setAccess: (state, action) => {
      state.access = action.payload;
    },
  },
});
export const { setAccess } = AccessSlice.actions;
export default AccessSlice.reducer;
