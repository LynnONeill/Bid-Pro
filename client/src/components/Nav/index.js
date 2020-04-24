import React, { useState, useContext } from "react";
import { Nav, NavItem } from 'react-bootstrap';
import AuthContext from '../../utils/AuthContext';
import { useHistory, useLocation, Link } from 'react-router-dom';

function Navbar() {

    const history = useHistory();
    const location = useLocation();
    const {isLoggedIn, handleLogout} = useContext(AuthContext);

    // logout function
    function logoutClick (obj) {
        handleLogout(obj, () => {
            history.push('/login')
        })        
    }
    return(
    <div>
        <Nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/Home">
                Bid-Pro
            </Link>
            <div className="navmenu">
                <Link className="navbar-text navOps"
                onClick={() => logoutClick()}>Logout</Link>
            </div>
        </Nav> 
        <div className="subNav">
          <Link className="subNavItem" to="/Home">Home</Link>
          <Link className="subNavItem" to="/Admin">Admin</Link>
          <Link className="subNavItem" to="/Client">Clients</Link>
          <Link className="subNavItem" to="/AddClient">Add Client</Link>
          <Link className="subNavItem" to="/Project">Project</Link>
          <Link className="subNavItem" to="/Product">Product</Link>
        </div>
    </div>
    );
}

export default Navbar;