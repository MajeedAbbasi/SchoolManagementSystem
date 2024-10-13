import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
  name: "MessageSlice",
  initialState: {
    messageSlice: 0,
    messages: [],
  },
  reducers: {
    setMessageCount: (state, action) => {
      if (action.payload == 1) {
        state.messageSlice += action.payload;
      } else {
        state.messageSlice = action.payload;
      }
    },
    setMessages: (state, action) => {
      if (action.payload === 0) {
        state.messages = [];
      }
      state.messages.push(action.payload);
    },
  },
});
export const { setMessageCount, setMessages } = MessageSlice.actions;
export default MessageSlice.reducer;
