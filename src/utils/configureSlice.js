import { createSlice } from "@reduxjs/toolkit";

const configureSlice = createSlice({
  name: "configure",
  initialState: {
    BookmarkBooks: [],
  },
  reducers: {},
});

export const {} = configureSlice.actions;
export default configureSlice.reducer;
