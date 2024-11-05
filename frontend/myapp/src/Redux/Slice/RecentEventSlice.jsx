import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slideArr: [
    {
      id: 1,
      imgS: "/ecom1.png",
      slideTitle: "Slide 1",
    },
    {
      id: 2,
      imgS: "/ecom2.png",
      slideTitle: "Slide 2",
    },
    {
      id: 3,
      imgS: "/ecom3.png",
      slideTitle: "Slide 3",
    },
  ],
};

const recentSlide = createSlice({
  name: "RecentSlide",
  initialState,
  reducers: {},
});

export default recentSlide.reducer;
