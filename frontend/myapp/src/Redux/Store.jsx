import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/ProductSlice";
import userSearch from "./Slice/SearchSlice";
import collectionSelected from "./Slice/CollectionSelectore";
import wishlist from "./Slice/WishlistSlice";
import myCartSlice from "./Slice/CartSlice";
import homeSlide from "./Slice/HomeSlideSlice";
import recentSlide from "./Slice/RecentEventSlice";
import orderHisSlide from "./Slice/OrderHistorySlice";

const store = configureStore({
  reducer: {
    productSlice,
    userSearch,
    collectionSelected,
    wishlist,
    myCartSlice,
    homeSlide,
    recentSlide,
    orderHisSlide,
  },
});

export default store;
