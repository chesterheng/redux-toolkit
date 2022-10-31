import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlide = createSlice({
  name: "cart",
  initialState,
});

// name
// actions object
// getinitialState function
// reducer function

const { reducer } = cartSlide;

export { reducer as cartReducer };
