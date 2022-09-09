import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="container-fluid">
            <div className="navbar">
                <NavBar/>
                <NavLink to='/'>Home</NavLink>
            </div>
        </div>
    )
}

export default NavBar