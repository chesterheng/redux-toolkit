import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../data/cartItems";

const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

// name
// actions object
// getinitialState function
// reducer function
// caseReducers object
const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

console.log(cartSlide);
const { reducer, actions } = cartSlide;

// Action creators are generated for each case reducer function
const { clearCart } = actions;

export { reducer as cartReducer, clearCart };
