import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mySearchStr: "",
};

const userSearch = createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    searchFill: (state, action) => {
      state.mySearchStr = action.payload;
    },
  },
});

export const { searchFill } = userSearch.actions;
export default userSearch.reducer;
