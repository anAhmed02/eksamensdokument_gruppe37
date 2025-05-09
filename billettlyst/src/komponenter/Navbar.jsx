import React from "react";
import { link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <link to="/">Billetlyst</link>
            <link to="/category/musikk">Musikk</link>
            <link to="/category/sport">Sport</link>
            <link to="/category/teater">Teater</link>
            <link to="/dashboard">Logg inn</link>
        </nav>
    );
}


export default Navbar;