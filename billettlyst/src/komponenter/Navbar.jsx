import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/">Billettlyst</Link>
            </div>
            <div className="nav-center">
                <Link to="/category/musikk">Musikk</Link>
                <Link to="/category/sport">Sport</Link>
                <Link to="/category/teater">Teater</Link>
            </div>
            <div className="nav-right">
                <Link to="/dashboard">Logg inn</Link>
            </div>
        </nav>
    );
}


