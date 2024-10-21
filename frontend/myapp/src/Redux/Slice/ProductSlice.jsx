import { createSlice } from "@reduxjs/toolkit";
import AllProducts from "./AllProductData";

const productSlice = createSlice({
  name: "product",
  initialState: AllProducts,
  reducers: {},
});

export default productSlice.reducer;
