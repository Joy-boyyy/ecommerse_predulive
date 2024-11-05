import React from "react";
import AIprojectCard from "./AIprojectCard";
import AI_projects from "../../Redux/aiProjectData/aiProjects";
import MainHeader from "../Header/MainHeader";
const AIprojectPage = () => {
  return (
    <>
      <MainHeader />
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-5 gap-3 justify-center items-center h-full w-full py-10">
        {AI_projects.map((project, i) => (
          <AIprojectCard key={i} id={i} {...project} />
        ))}
      </div>
    </>
  );
};

export default AIprojectPage;
