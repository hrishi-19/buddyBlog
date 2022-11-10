import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signinlink";
import SignedOutLinks from "./signoutlink";
const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container left">
                <Link to="/" className="brand-logo left">myPlan</Link>
            </div>
            <SignedInLinks/>
            <SignedOutLinks/>
        </nav>
    )
}
export default Navbar