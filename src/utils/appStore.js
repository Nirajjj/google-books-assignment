import { configureStore } from "@reduxjs/toolkit";
// import googleBooksReducer from "./googleBooksSlice";
import googleBooksReducer from "./googleBooksSlice";
import configureSlice from "./configureSlice";

const appStore = configureStore({
  reducer: {
    books: googleBooksReducer,
    configure: configureSlice,
  },
});

export default appStore;
