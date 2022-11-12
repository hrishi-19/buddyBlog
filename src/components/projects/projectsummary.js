import React from "react";
import moment from "moment/moment";
import { data } from "../../data";
import { Link } from "react-router-dom";


const ProjectSummary = ({project}) => {
    const images=data;
    const rand=Math.round(Math.random(0,1)*images.length-1)
   
    return (
        <div className="bg-white text-slate-600 rounded-lg sm:w-1/4 h-auto w-4/5 ml-5 mt-10 shadow-md shadow-slate-200/50 text-left hover:text-slate-200 hover:bg-violet-600" >
            <div className="flex flex-col justify-start rounded-lg overflow-hidden  ">
                <img className="w-full h-72 object-center object-cover" src={images[rand]} alt={"image"+rand}/>
                
               <div className="font-sans px-3 py-4">
               
               <p className="text-md font-light text-left">{moment(project.createdAt.toDate()).calendar()}</p>
               <span className=" text-3xl font-bold py-2">{project.title}</span>
               <p className=" text-xl font-semibold">Posted by {project.authorFirstName} {project.authorLastName}</p>
              
               <p className="text-lg font-semibold text-blue-400"><Link to={"project/"+project.id}>Read more</Link></p>
               </div>
            </div>
        </div>
    )
}
export default ProjectSummary