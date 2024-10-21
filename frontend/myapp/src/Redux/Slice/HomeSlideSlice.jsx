import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slideArr: [
    {
      id: 1,
      imgS: "https://cdn.pixabay.com/photo/2021/08/30/10/18/drone-6585450_1280.jpg",
      slideTitle: "Slide 1",
    },
    {
      id: 2,
      imgS: "https://cdn.pixabay.com/photo/2018/11/30/14/16/drone-3847867_1280.jpg",
      slideTitle: "Slide 2",
    },
    {
      id: 3,
      imgS: "https://cdn.pixabay.com/photo/2019/05/15/11/24/dji-4204801_1280.jpg",
      slideTitle: "Slide 3",
    },
    {
      id: 4,
      imgS: "https://cdn.pixabay.com/photo/2017/03/27/12/38/aerial-2178436_1280.jpg",
      slideTitle: "Slide 4",
    },
  ],
};

const homeSlide = createSlice({
  name: "HomeSlide",
  initialState,
  reducers: {},
});

export default homeSlide.reducer;
