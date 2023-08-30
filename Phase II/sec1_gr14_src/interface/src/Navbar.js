import React from "react";
import {Link} from "react-router-dom";
import "./nav.css";
import logo from './logo.png';

function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" />
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/manageProducts">Products</Link></li>
                <li><Link to="/manageUsers">Users</Link></li>
            </ul>
            <nav className="loginbtn">
                <Link to="/login"><b>Login</b></Link>
            </nav>
        </nav>
    )
}
export default Navbar;