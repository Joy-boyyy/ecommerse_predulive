import React from "react";

import { BsTools } from "react-icons/bs";
import { MdOutlineBuild } from "react-icons/md";
import Slides from "./Slides";

const RecentProjects = () => {
  return (
    <div className="w-[100%] mt-4 flex gap-2 pl-2 pr-2">
      <div className="rounded-md pt-2 basis-[20%] border-r shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]">
        <div className="text-center text-[1.5rem] font-bold mb-3">
          <h1>Upcomming Projects...</h1>
        </div>
        <div className="w-[100%]">
          <ul className="w-[100%] flex  flex-col pl-2 gap-4">
            <li className="flex gap-2 items-center border-b pb-2 hover:bg-slate-100 cursor-pointer">
              <div className="border-[7px] rounded-full p-1">
                <img
                  src="https://cdn.pixabay.com/photo/2024/01/24/11/22/ai-8529399_1280.jpg"
                  alt="AI_Image"
                  className="w-[3rem] h-[3rem] rounded-full"
                />
              </div>
              <span>AI projects</span>
            </li>
            <li className="flex gap-2 items-center border-b pb-2 hover:bg-slate-100 cursor-pointer">
              <div className="border-[7px] rounded-full p-1">
                <img
                  src="https://cdn.pixabay.com/photo/2017/01/31/15/07/aerial-2024891_1280.png"
                  alt="Cheapest Drone"
                  className="w-[3rem] h-[3rem] rounded-full"
                />
              </div>

              <span>Cheapest DRONE</span>
            </li>
            <li className="flex gap-2 items-center border-b pb-2 hover:bg-slate-100 cursor-pointer">
              <span className="rounded-full border-[7px] p-3">
                <BsTools size={30} />
              </span>
              <span>Request on Service</span>
            </li>
            <li className="flex gap-2 items-center border-b pb-2 hover:bg-slate-100 cursor-pointer">
              <span className="rounded-full border-[7px] p-3">
                <MdOutlineBuild size={30} />
              </span>
              <span>Custome Drone</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="basis-[80%]">
        <Slides />
      </div>
    </div>
  );
};

export default RecentProjects;
