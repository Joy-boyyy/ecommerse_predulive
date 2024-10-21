import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishArr: [],
};

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishList: (state, actions) => {
      if (state.wishArr.includes(actions.payload)) {
        const gotINdex = state.wishArr.indexOf(actions.payload);
        state.wishArr.splice(gotINdex, 1);
      } else {
        state.wishArr.push(actions.payload);
      }
    },
  },
});

export const { addWishList } = wishlist.actions;

export default wishlist.reducer;
