import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signinlink";
import SignedOutLinks from "./signoutlink";
import { connect } from "react-redux";
const Navbar = (props) => {
    const {auth}=props
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container left">
                <Link to="/" className="brand-logo left">myPlan</Link>
            </div>
            {auth.uid?<SignedInLinks/>:<SignedOutLinks/>}
            
            
        </nav>
    )
}
const mapStateToProps=(state)=>{
   
    return{
        auth:state.firebase.auth,

    }
}
export default connect(mapStateToProps)(Navbar)