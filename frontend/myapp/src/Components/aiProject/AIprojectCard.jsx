import React from "react";
import { useNavigate } from "react-router-dom";

export default function AIprojectCard(props) {
  // console.log(props);

  const navigate = useNavigate();
  return (
    <>
      <div className="border rounded-2xl shadow-xl min-w-60 xs:max-w-60 flex justify-center items-center xs:flex-col p-5">
        <div
          onClick={() =>
            navigate("/ai-project-details/" + props.id || "ai-projects")
          }
          className="w-[50%] xs:w-[100%] h-[50%] rounded-xl overflow-hidden mr-2 xs:mr-0 cursor-pointer"
        >
          <img
            src={props.image || "/ai.jpeg"}
            alt="AI-Projectimage"
            className=" w-full h-full"
          />
        </div>
        <div className="text-left">
          <h1
            className="text-md font-bold cursor-pointer my-2"
            onClick={() => navigate(`/ai-project-details/${props.id}`)}
          >
            {props.title}
          </h1>
          <div className="flex justify-between items-center mt-2 gap-2">
            <p className="font-semibold ">
              Price: <span>Rs {props.price}</span>
            </p>
            <button className="text-white bg-[#4285F4] rounded-md py-1 px-2">
              {" "}
              Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
