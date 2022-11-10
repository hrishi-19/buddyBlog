import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = (props) => {
   const id = useParams().id
   console.log(id)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title -{id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic sunt beatae officiis incidunt, praesentium nam atque iste esse consequuntur repudiandae tenetur alias voluptate quod ea, qui harum suscipit in.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Hrishikesh</div>
                <div>10 september 10am</div>
                </div> 
            </div>
        </div>
    )
}

export default ProjectDetails