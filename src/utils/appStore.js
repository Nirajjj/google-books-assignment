import { configureStore } from "@reduxjs/toolkit";
// import googleBooksReducer from "./googleBooksSlice";
import googleBooksReducer from "./googleBooksSlice";

const appStore = configureStore({
  reducer: {
    books: googleBooksReducer,
  },
});

export default appStore;
