import { configureStore } from "@reduxjs/toolkit";
import paymentSlice from "./features/paymentSlice";
import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    payment: paymentSlice,
  },
});

export { store };
