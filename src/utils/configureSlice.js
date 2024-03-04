import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
  name: "configure",
  initialState: {
    BookmarkBooks: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload;
    },
    addOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
  },
});

export const { addCategory, addOrderBy } = configureSlice.actions;
export default configureSlice.reducer;
