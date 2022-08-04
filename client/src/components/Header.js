import React from "react";
import {Link} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";
import Search from './Search'

const Header = () => {
    return (
        <header>
            <Search />
            <Link to="/">
                <img className="logo" alt="Zerodue Logo" src={logo} />
            </Link>
            <Link to="/add" className="addLink">
                <button className="addLinkBtn">Aggiungi Negozio</button>
            </Link>  
        </header>
    )
}

export default Header;