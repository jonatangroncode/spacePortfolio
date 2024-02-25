import React from "react";
import Projectcard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className=" flex flex-col items-center justify-center py-20  ">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20   ">
        My Projects
      </h1>
      <div className=" h-full w-full flex flex-col items-center justify-center  md:flex-row gap-10 px-10 ">
        <div>
        <Projectcard 
        src={"/movieshopfront.png"} 
        title={"lekrnv"} 
        description={"rlkvn"} />
        
        </div>
        <div>
        <Projectcard 
        src={"/movieshopfront.png"} 
        title={"lekrnv"} 
        description={"rlkvn"} />
        
        </div>
       
        <div>
        <Projectcard 
        src={"/movieshopfront.png"} 
        title={"lekrnv"} 
        description={"rlkvn"} />
        
        </div>
       
       
  
       
      </div>
    </div>
  );
};

export default Projects;
