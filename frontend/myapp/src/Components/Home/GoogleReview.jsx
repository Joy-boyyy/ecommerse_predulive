import React from "react";
import { IoStar } from "react-icons/io5";
import { FaStarHalfStroke } from "react-icons/fa6";

const GoogleReview = () => {
  return (
    <div className="w-[100%] mb-4 p-4">
      {/* ------------- text section */}
      <div className="text-[2rem] flex mb-2">
        <span className="text-[#4285F4] font-semibold">G</span>
        <span className="text-[#EA4335] font-semibold">o</span>
        <span className="text-[#FBBC05] font-semibold">o</span>
        <span className="text-[#4285F4] font-semibold">g</span>
        <span className="text-[#34A853] font-semibold">l</span>
        <span className="text-[#EA4335] font-semibold">e</span>
        <p className="ml-2 font-bold text-[#8696A7]">
          -Backed Trust in Every Order
        </p>
      </div>

      <div className="w-[100%] flex">
        <div className="basis-[20%]">
          <h1 className="text-[2rem] font-semibold">Excellent</h1>
          <div className="flex gap-2 text-[2rem] text-orange-400">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <FaStarHalfStroke />
          </div>
          <div>
            <p>
              Based on{" "}
              <span className="text-[1rem] font-bold">512 reviews</span>
            </p>
          </div>
          <div className="text-[2rem] flex font-semibold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
        </div>

        <div className="basis-[80%] gap-2 flex overflow-x-auto">
          <img
            src="/images/review1.jpeg"
            alt="review1.jpeg"
            className="w-[20rem]"
          />
          <img
            src="/images/review2.jpeg"
            alt="review2.jpeg"
            className="w-[20rem]"
          />
          <img
            src="/images/review3.jpeg"
            alt="review3.jpeg"
            className="w-[20rem]"
          />
          <img
            className="w-[20rem]"
            src="/images/review4.jpeg"
            alt="review4.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;
