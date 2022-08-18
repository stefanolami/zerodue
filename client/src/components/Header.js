import React from "react";
import {Link} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";
import Search from './Search'

import withContext from '../Context';

const SearchWithContext = withContext(Search);


const Header = (props) => {
    return (
        <header>
            {
                props.context.authenticatedUser ? (
                    <SearchWithContext />
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
            <Link to="/" className="zeroDue">
                <img className="logo" alt="Zerodue Logo" src={logo} />
            </Link>
            {
                props.context.authenticatedUser ? (
                    <Link to="/add" className="addLink">
                        <button className="addLinkBtn">Aggiungi Negozio</button>
                    </Link>
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
              
        </header>
    )
}

export default Header;