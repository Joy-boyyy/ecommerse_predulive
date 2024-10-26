import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartArr: [],
  totalNumberItems: 0,
  totalPrice: 0,
};

const myCartSlice = createSlice({
  name: "myCartSlice",
  initialState,
  reducers: {
    cardPush: (state, action) => {
      const { Id, Amount, Title, Image, productAmount = 1 } = action.payload;

      const findVar = state.cartArr.findIndex((findProp) => findProp.id === Id);

      if (findVar < 0) {
        state.cartArr.push({
          id: Id,
          price: Amount,
          totalAmount: productAmount,
          imgs: Image,
          title: Title,
        });
      } else {
        state.cartArr[findVar].totalAmount += 1;
      }
    },

    cardInc: (state, action) => {
      const id = action.payload;
      const findVar = state.cartArr.findIndex((findProp) => findProp.id === id);
      if (findVar > -1) {
        state.cartArr[findVar].totalAmount += 1;
      }
    },

    cardDesc: (state, action) => {
      const id = action.payload;
      const findVar = state.cartArr.findIndex((findProp) => findProp.id === id);
      if (findVar > -1) {
        if (state.cartArr[findVar].totalAmount > 1) {
          state.cartArr[findVar].totalAmount -= 1;
        }
      }
    },

    // delete card

    cardDel: (state, action) => {
      const id = action.payload;

      state.cartArr = state.cartArr.filter(
        (filterProp) => filterProp.id !== id
      );
    },

    //  total cart item

    countCartItem: (state) => {
      state.totalNumberItems = state.cartArr.reduce(
        (fst, sec) => fst + sec.totalAmount,
        0
      );
    },

    //-------- total cart price
    totalPriceFun: (state) => {
      state.totalPrice = state.cartArr.reduce((fst, sec) => {
        return fst + sec.totalAmount * sec.price;
      }, 0);
    },

    // ---- ---all cart empty
    doEmpty: (state, action) => {
      state.cartArr = action.payload;
    },
  },
});

export const {
  cardPush,
  cardDel,
  cardInc,
  cardDesc,
  countCartItem,
  totalPriceFun,
  doEmpty,
} = myCartSlice.actions;
export default myCartSlice.reducer;
