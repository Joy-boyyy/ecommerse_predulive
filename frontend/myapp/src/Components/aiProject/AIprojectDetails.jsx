import React, { useEffect, useState } from "react";
import AI_projects from "../../Redux/aiProjectData/aiProjects.js";
import { useParams } from "react-router-dom";
import MainHeader from "../Header/MainHeader.jsx";
function AIprojectDetails() {
  const [isWishlisted, setWishlist] = useState(false);
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project based on the param (assuming param is an id or slug)
    // console.log(id)
    const foundProject = AI_projects[id];
    setProject(foundProject);
  }, [id]);

  function handleClick() {
    setWishlist((prev) => !prev);
  }

  if (!project) return <div>Loading...</div>;
  // console.log(project);

  return (
    <>
      <MainHeader />

      <div className="w-full h-screen p-5 md:px-28">
        <div className="sm:flex justify-start items-center gap-2">
          <div className="rounded-xl my-3 overflow-hidden md:max-w-[30%] min max-h-[50%]">
            <img
              src={project.image}
              alt="Project-Image"
              className="w-full h-full"
            />
          </div>
          <div className="xs:p-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-2">
              {project.title}
            </h1>
            <div className="flex justify-between items-center md:block">
              <p className="font-semibold md:text-md lg:text-xl">
                Price: <span>Rs {project.price} </span>
              </p>
              <div className="flex justify-start space-x-3 items-center">
                <button className="text-white bg-[#4285F4] rounded-md py-1 px-2 md:py-2 md:px-4 md:mt-3 lg:py-3 lg:px-6">
                  Buy Now
                </button>
                <button
                  className="bg-[#4285F4] rounded-md py-1 px-2 md:py-2 md:px-4 md:mt-3 lg:py-3 lg:px-6"
                  onClick={handleClick}
                >
                  {isWishlisted ? <Heart1 /> : <Heart2 />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="my-1">
            <h2 className="sm:text-xl font-bold">Introduction : </h2>
            {/* <br /> */}
            <hr />
            <p className="pl-5">{project.introduction}</p>
          </div>
          <div>
            <h2 className="sm:text-xl font-bold">Technology :</h2>
            <hr />
            <p className="pl-5">{project.technology}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIprojectDetails;

function Heart1() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#fff"
      height="25px"
      width="25px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 471.701 471.701"
      xmlSpace="preserve"
    >
      <g>
        <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z" />
      </g>
    </svg>
  );
}

function Heart2() {
  return (
    <svg
      height="25px"
      width="25px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          style={{ fill: "#FF6647" }}
          d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566 c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566 c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418 c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0 c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936 C512,137.911,498.388,101.305,474.655,74.503z"
        ></path>
        <path
          style={{ fill: "#E35336" }}
          d="M160.959,401.243c-36.618-30.304-65.836-62.565-86.845-95.889 c-26.529-42.083-39.981-85.961-39.981-130.418c0-37.025,13.612-73.631,37.345-100.433c21.44-24.213,49.775-39.271,81.138-43.443 c-5.286-0.786-10.653-1.189-16.082-1.189c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936 c0,44.458,13.452,88.335,39.981,130.418c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146 c2.203,0.988,4.779,0.988,6.981,0c0.689-0.308,5.586-2.524,13.577-6.588C251.254,463.709,206.371,438.825,160.959,401.243z"
        ></path>{" "}
      </g>
    </svg>
  );
}
