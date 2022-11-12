import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signinlink";
import SignedOutLinks from "./signoutlink";
import { connect } from "react-redux";
const Navbar = (props) => {
    const {auth}=props
    return (
        <nav className=" w-full fixed top-0 bg-slate-800 flex sm:justify-evenly justify-start sm:px-3 py-3 px-1 items-center font-sans z-50">
            <div className="w-1/4 text-left sm:text-3xl text-xl font-semibold">
                <Link to="/" className="">BuddyBlog</Link>
            </div>
            <div className="">
            {auth.uid?<SignedInLinks/>:<SignedOutLinks/>}
            </div>
            
            
        </nav>
    )
}
const mapStateToProps=(state)=>{
   
    return{
        auth:state.firebase.auth,

    }
}
export default connect(mapStateToProps)(Navbar)