import React from "react";
import ProjectList from "../projects/projectlist";
import Notifications from "./notifications";
import { useNavigate } from "react-router-dom";
import { compose } from "redux";
import { connect, } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const Dashboard=(props)=> {

        const {projects,auth}=props
        const navigate=useNavigate()

        if(!auth.uid)return navigate('/signin')
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <Notifications/>
                    </div>
                </div>
            </div>
        )
    
}
const mapStateToprops=(state)=>{
   return{
    projects:state.firestore.ordered.projects,
    auth:state.firebase.auth
   }
}
export default compose(
    connect(mapStateToprops),
    firestoreConnect([
        {collection:"projects"}
    ])
)(Dashboard)