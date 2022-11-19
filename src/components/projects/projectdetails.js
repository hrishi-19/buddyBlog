import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from "moment/moment";
import article from "../../images/article.jpg"
let id = ""

const ProjectDetails = (props) => {
    id = useParams().id
    const { project } = props
    if (project) {
        return (
            <div className="w-full  bg-white/70">
                <div className='w-full h-96 text-center flex flex-col justify-center items-start p-5' style={{ background: `url(${article})`, backgroundPosition: "50% 50%", backgroundSize: "cover" }}>
                    <p className="text-6xl text-white font-bold">{project.title}</p>
                    <p className="text-slate-300 text-xl">{moment(project.createdAt.toDate()).calendar()}</p>
                </div>
                <div className=' text-slate-500 text-xl w-full'>
                    <p className='font-sans text-wrap indent-8 text-start px-6 leading-relaxed '>{project.content}</p>
                </div>
                <div className='text-gray-500 text-2xl text-start p-6'>
                    <span className='text-3xl'>Author</span><p> {project.authorFirstName} {project.authorLastName}</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null

    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: "projects"
        }
    ])
)(ProjectDetails)