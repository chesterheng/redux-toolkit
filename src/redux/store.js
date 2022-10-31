import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export { store };

// @reduxjs/toolkit consists of few libraries
// - redux (core library, state management)
// - immer (allows to mutate state)
// - redux-thunk (handles async actions)
// - reselect (simplifies reducer functions)
