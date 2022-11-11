import React from "react";
import ProjectSummary from "./projectsummary";
import { Link } from "react-router-dom";

const ProjectList=({projects})=>{
    return(
        <div className="project-list section">
        {projects && projects.map(item=>
            
            <Link to={'project/'+item.id}> <ProjectSummary key={item.id} project={item}/></Link>
           
        
        )}
        </div>
    )
}
export default ProjectList