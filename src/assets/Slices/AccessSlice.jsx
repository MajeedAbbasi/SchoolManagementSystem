import { createSlice } from "@reduxjs/toolkit";
let login = JSON.parse(localStorage.getItem("login")) || [];

const AccessSlice = createSlice({
  name: "AccessSlice",
  initialState: {
    access: login,
  },
  reducers: {
    setAccess: (state, action) => {
      state.access = action.payload;
    },
  },
});
export const { setAccess } = AccessSlice.actions;
export default AccessSlice.reducer;
