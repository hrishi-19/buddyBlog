import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
let id=""

const ProjectDetails = (props) => {
   id = useParams().id
   const{project}=props
    if(project){
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                    <div>{project.authorFirstName}</div>
                    <div>{project.authorLastName}</div>
                    <div>10 september 10am</div>
                    </div> 
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    const projects=state.firestore.data.projects;
    const project=projects?projects[id]:null
    
    return{
        project:project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:"projects"
        }
    ])
)(ProjectDetails)