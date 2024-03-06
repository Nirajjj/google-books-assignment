import { createSlice } from "@reduxjs/toolkit";

const googleBooksSlice = createSlice({
  name: "books",
  initialState: {
    categoryBooks: {},
    error: null,
    queryBooks: {},
    queryValue: null,
    bookInfoState: false,
    oneBook: null,
    bookmarkBooks: [],
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
    toggleBookInfoState: (state, action) => {
      state.bookInfoState = action.payload;
    },
    addOneBook: (state, action) => {
      state.oneBook = action.payload;
    },
    addBookMarkBooks: (state, action) => {
      const existingindex = state.bookmarkBooks.findIndex(
        (book) => book.id === action.payload.id
      );
      if (existingindex !== -1) {
        state.bookmarkBooks = state.bookmarkBooks.filter(
          (book, index) => index !== existingindex
        );
      } else {
        state.bookmarkBooks = [...(state.bookmarkBooks || []), action.payload];
      }
      // state.bookmarkBooks = action.payload;
    },
  },
});

export const {
  addFirstBooks,
  addError,
  addCategoryBooks,
  addQueryBooks,
  addQueryValue,
  toggleBookInfoState,
  addOneBook,
  addBookMarkBooks,
} = googleBooksSlice.actions;
export default googleBooksSlice.reducer;
