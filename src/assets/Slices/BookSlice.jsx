import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
  name: "BookSlice",
  initialState: {
    BookUpdate: null,
  },
  reducers: {
    setUpdate: (state, action) => {
      state.BookUpdate = action.payload;
    },
  },
});
export const { setUpdate } = BookSlice.actions;
export default BookSlice.reducer;
