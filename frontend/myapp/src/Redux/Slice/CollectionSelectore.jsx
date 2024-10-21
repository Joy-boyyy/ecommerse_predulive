import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCollection: "",
};

const collectionSelected = createSlice({
  name: "collectionSelected",
  initialState,
  reducers: {
    collectionFilter: (state, action) => {
      state.selectedCollection = action.payload;
    },
  },
});

export const { collectionFilter } = collectionSelected.actions;
export default collectionSelected.reducer;
