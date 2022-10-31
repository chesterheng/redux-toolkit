import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../data/cartItems";
import { getCartItems } from "../services/cart";

const initialState = {
  cartItems: [],
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
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(({ id }) => id !== payload);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find(({ id }) => id === payload.id);
      cartItem.amount++;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(({ id }) => id === payload.id);
      cartItem.amount--;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = cartSlide;

// Action creators are generated for each case reducer function
const { clearCart, removeItem, increase, decrease, calculateTotals } = actions;

export {
  reducer as cartReducer,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
};
