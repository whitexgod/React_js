import "./Nav.css"
import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
    return( 
        <div className="header fixed-top scrolling-navbar">
            <h3 className="header-h3">Tuhin's Portfolio</h3>
            <nav>
                <ul className="nav__links">
                    <li className="nav">
                        <Link className="nav" to="/">About</Link>
                    </li>
                    <li className="nav">
                        <Link className="nav" to="/project">Projects</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/contact"><button className="btn btn-sm btn-light">Contact Me</button></Link>
        </div>
    )
}

export default Nav;