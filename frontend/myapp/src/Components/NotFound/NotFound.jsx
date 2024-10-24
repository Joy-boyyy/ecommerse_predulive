import React from "react";
import MainHeader from "../Header/MainHeader";
import Footer from "../Footer/Footer";

const NotFound = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <MainHeader />
      <div className="w-[100%] flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/404-error-concept-illustration_335657-5553.jpg?t=st=1729763116~exp=1729766716~hmac=c16cd86dc7879f506ba2c02c3c7d4b50935741fa2dc0ae0572ef84c05053fb46&w=740"
          alt="not found"
          className="w-[50%] h-[50%]"
        />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
