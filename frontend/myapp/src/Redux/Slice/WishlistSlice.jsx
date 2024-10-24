import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishArr: [],
};

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishList: (state, actions) => {
      state.wishArr = actions.payload; // Set the entire array at once
    },
    addWishList: (state, actions) => {
      if (state.wishArr.includes(actions.payload)) {
        const gotINdex = state.wishArr.indexOf(actions.payload);
        state.wishArr.splice(gotINdex, 1);
      } else {
        console.log("ready to push");
        state.wishArr.push(actions.payload);
      }
    },
  },
});

export const { addWishList, setWishList } = wishlist.actions;

export default wishlist.reducer;
