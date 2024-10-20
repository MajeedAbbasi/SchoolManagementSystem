import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
  name: "PaymentSlice",
  initialState: {
    paymentUpdate: [],
    expenseUpdate: [],
  },
  reducers: {
    setPaymentUpdate: (state, action) => {
      if (action.payload == null) {
        state.paymentUpdate = [];
      } else {
        let paymentdata = JSON.parse(localStorage.getItem("paymentData")) || [];
        let value = paymentdata.filter((e) => {
          return e.ID === action.payload;
        });
        state.paymentUpdate = value;
      }
    },
    setExpenseUpdate: (state, action) => {
      if (action.payload == null) {
        state.expenseUpdate = [];
      } else {
        let addExpense = JSON.parse(localStorage.getItem("addExpense")) || [];
        let value = addExpense.filter((e) => {
          return e.uniqueid === action.payload;
        });
        state.expenseUpdate = value;
      }
    },
  },
});
export const { setPaymentUpdate, setExpenseUpdate } = PaymentSlice.actions;
export default PaymentSlice.reducer;
