import React from "react";
import {Link} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";
import Search from './Search'

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img className="logo" alt="Zerodue Logo" src={logo} />
            </Link>
            <div className="subHeader">
                <Search />
                <Link to="/add" className="addLink">
                    <button className="addLinkBtn">Aggiungi</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;