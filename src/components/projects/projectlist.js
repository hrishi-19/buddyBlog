import React from "react";
import ProjectSummary from "./projectsummary";

const ProjectList=({projects})=>{
    return(
        <div className="project-list section">
        {projects && projects.map(item=>
            <ProjectSummary key={item.id} project={item}/>
        
        )}
        </div>
    )
}
export default ProjectList