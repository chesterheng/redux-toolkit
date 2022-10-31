import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const modalSlide = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

const { reducer, actions } = modalSlide;
const { openModal, closeModal } = actions;

export { reducer as modalReducer, openModal, closeModal };
