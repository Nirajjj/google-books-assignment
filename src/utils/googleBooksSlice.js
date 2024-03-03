import { createSlice } from "@reduxjs/toolkit";

const googleBooksSlice = createSlice({
  name: "books",
  initialState: {
    firstBooks: [],
    error: null,
  },
  reducers: {
    addFirstBooks: (state, action) => {
      state.firstBooks = [...state.firstBooks, ...action.payload];
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addFirstBooks, addError } = googleBooksSlice.actions;
export default googleBooksSlice.reducer;
