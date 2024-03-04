import { createSlice } from "@reduxjs/toolkit";

const googleBooksSlice = createSlice({
  name: "books",
  initialState: {
    categoryBooks: {},
    error: null,
  },
  reducers: {
    addFirstBooks: (state, action) => {
      const category = "fiction";
      state.categoryBooks[category] = [
        ...(state.categoryBooks[category] || []),
        ...(action.payload || []),
      ];
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
    addCategoryBooks: (state, action) => {
      const { category, books } = action.payload;
      state.categoryBooks[category] = [
        ...(state.categoryBooks[category] || []),
        ...(books || []),
      ];
    },
  },
});

export const { addFirstBooks, addError, addCategoryBooks } =
  googleBooksSlice.actions;
export default googleBooksSlice.reducer;
