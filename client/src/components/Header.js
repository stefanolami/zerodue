import React from "react";
import {NavLink} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";

const Header = () => {
    return (
        <header>
        <NavLink exact to="/">
            <img className="logo" alt="Zerodue Logo" src={logo} />
        </NavLink>
        </header>
    )
}

export default Header;