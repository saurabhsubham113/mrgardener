import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  paymentResponse: {},
  error: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    paymnetLoading(state) {
      state.isLoading = true;
    },
    paymentSuccess(state, action) {
      state.isLoading = false;
      state.paymentResponse = action.payload;
    },
    paymentError(state) {
      state.isLoading = false;
      state.error = true;
    },
    paymentReset(state) {
      state.isLoading = false;
      state.paymentResponse = {};
      state.error = null;
    },
  },
});

export const { paymnetLoading, paymentSuccess, paymentError, paymentReset } =
  paymentSlice.actions;

export default paymentSlice.reducer;
