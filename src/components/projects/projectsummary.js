import React from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";



const ProjectSummary = ({ project }) => {


    return (
        <div className="bg-black/80 text-white/80 sm:w-1/4 h-96 min-h-full w-4/5 ml-5 mt-10 rounded-lg " >
          


                <div className="font-sans px-3 py-4  w-full h-full flex flex-col ">

                    <p className="text-md font-semibold text-left basis-1/4">{moment(project.createdAt.toDate()).calendar()}</p>
                    <p className=" sm:text-4xl text-2xl font-bold  text-left basis-2/4 ">{project.title}</p>
                   <div className="basis-1/4">
                   <p className=" text-xl font-semibold text-left ">Posted by {project.authorFirstName} {project.authorLastName}</p>
                   <p className="text-lg  text-white/80 text-left hover:text-fuchsia-500 w-max"><Link to={"project/" + project.id}>Read full article</Link></p>
                   </div>
              
                </div>
                
               
            
        </div>
    )
}
export default ProjectSummary