import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  isLoading: true,
  isError: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProducts(state) {
      state.isLoading = true;
    },
    successproducts(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },
    errorProducts(state) {
      state.isLoading = false;
      state.isError = true;
    },
    resetProducts(state) {
       state.product = [];
    },
  },
});

export const { loadProducts, successproducts, errorProducts, resetProducts } =
  productSlice.actions;

export default productSlice.reducer;
