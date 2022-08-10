import React from "react";
import {Link} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";
import Search from './Search'

import withContext from '../Context';

const SearchWithContext = withContext(Search);


const Header = () => {
    return (
        <header>
            <SearchWithContext />
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