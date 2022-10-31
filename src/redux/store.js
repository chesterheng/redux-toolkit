import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cartSlice";
import { modalReducer } from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export { store };

// @reduxjs/toolkit consists of few libraries
// - redux (core library, state management)
// - immer (allows to mutate state)
// - redux-thunk (handles async actions)
// - reselect (simplifies reducer functions)
