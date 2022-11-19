import React from "react";
import ProjectList from "../projects/projectlist";
import { useNavigate } from "react-router-dom";
import { compose } from "redux";
import { connect, } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import bg from '../../images/bgImage.jpg'

const Dashboard = (props) => {
   
    const { projects, auth } = props
    const navigate = useNavigate()

    if (!auth.uid) return navigate('/signin')
    return (
        <div className="w-full  py-16 flex justify-center min-h-screen " style={{background:`url(${bg})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}}>
            <div className="w-full" >
                <ProjectList projects={projects} />
            </div>


        </div>
    )

}
const mapStateToprops = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,

    }
}
export default compose(
    connect(mapStateToprops),
    firestoreConnect([
        { collection: "projects"},
        { collection: "user" }
    ])
)(Dashboard)