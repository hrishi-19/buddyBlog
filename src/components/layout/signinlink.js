import React from "react";
import { connect } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";
const SignedInLinks = (props) => {
    return (
        <ul className="text-slate-200 font-semibold  flex items-center">
        <li><NavLink to="/create" className="sm:text-xl text-md">New Blog</NavLink></li>
        <li><Link onClick={props.signOut} className="sm:text-xl text-md">logout</Link></li>
        <li><NavLink to="/" className="sm:w-14 sm:h-14 w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">{props.profile.initials}</NavLink></li>
        </ul>
    )
}
const mapStateToProps=(state)=>{
    return{
        profile:state.firebase.profile
    }
}
const mapDispathToProps=(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(mapStateToProps,mapDispathToProps)(SignedInLinks)