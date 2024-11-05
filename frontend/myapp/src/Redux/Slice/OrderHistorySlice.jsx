import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userOrders: [],
};

const orderHisSlide = createSlice({
  name: "orderHistorySlide",
  initialState,
  reducers: {
    setUserOrders(state, action) {
      const { allOrders, orderDetails, orderDate } = action.payload;

      console.log("=--->", allOrders);
      console.log("orderDetails =--->", orderDetails);
      console.log(" orderDate=--->", orderDate);

      if (!allOrders || !orderDetails || !orderDate) {
        console.log("No any order details");
        return;
      }

      const userOrder = allOrders;
      const bookTime = orderDate;
      const userAddress = orderDetails;
      state.userOrders.push({ userOrder, bookTime, userAddress });
    },
  },
});

export const { setUserOrders } = orderHisSlide.actions;

export default orderHisSlide.reducer;
