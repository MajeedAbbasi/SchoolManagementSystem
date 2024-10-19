import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
  name: "PaymentSlice",
  initialState: {
    paymentUpdate: [],
  },
  reducers: {
    setPaymentUpdate: (state, action) => {
      let paymentdata = JSON.parse(localStorage.getItem("paymentData"));
      let value = paymentdata.filter((e) => {
        return e.ID === action.payload;
      });
      state.paymentUpdate = value;
    },
  },
});
export const { setPaymentUpdate } = PaymentSlice.actions;
export default PaymentSlice.reducer;
