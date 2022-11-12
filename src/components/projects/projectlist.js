import React from "react";
import ProjectSummary from "./projectsummary"

const ProjectList=({projects})=>{
    return(
        <div className="flex justify-center flex-wrap px-2 ">
        {projects && projects.map(item=>
            
            <ProjectSummary key={item.id} project={item}/>
           
        
        )}
        </div>
    )
}
export default ProjectList