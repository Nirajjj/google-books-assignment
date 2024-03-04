import { createSlice } from "@reduxjs/toolkit";

const googleBooksSlice = createSlice({
  name: "books",
  initialState: {
    categoryBooks: {},
    error: null,
    queryBooks: {},
    queryValue: null,
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
    addQueryBooks: (state, action) => {
      const { query, books } = action.payload;
      state.queryBooks[query] = [
        ...(state.queryBooks[query] || []),
        ...(books || []),
      ];
    },
    addQueryValue: (state, action) => {
      state.queryValue = action.payload;
    },
  },
});

export const {
  addFirstBooks,
  addError,
  addCategoryBooks,
  toggleQuery,
  addQueryBooks,
  addQueryValue,
} = googleBooksSlice.actions;
export default googleBooksSlice.reducer;
