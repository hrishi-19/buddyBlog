import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";
const SignedInLinks = (props) => {
    return (
        <ul className="right">
        <li><NavLink to="/create">New Project</NavLink></li>
        <li><a onClick={props.signOut}>logout</a></li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">HK</NavLink></li>
        </ul>
    )
}
const mapDispathToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispathToProps)(SignedInLinks)