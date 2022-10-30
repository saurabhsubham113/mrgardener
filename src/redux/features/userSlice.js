import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  items: JSON.parse(localStorage.getItem("cart")) || [],
  price: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail(state, action) {
      state.user = action.payload;
    },
    setItems(state, action) {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItems(state, action) {
      state.items = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { setUserDetail, setItemCount, setItems, setPrice, removeItems } =
  userSlice.actions;

export default userSlice.reducer;
