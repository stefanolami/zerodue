import React from "react";
import {Link} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";
import Search from './Search'

import withContext from '../Context';

const SearchWithContext = withContext(Search);


const Header = (props) => {
    return (
        <header>
            <div className="logoDiv">
                <Link to="/" className="zeroDue">
                    <img className="logo" alt="Zerodue Logo" src={logo} />
                </Link>
            </div>
                {
                    props.context.authenticatedUser ? (
                        <div className="headerDiv">
                            <SearchWithContext />
                            <div className="headerBtnsDiv">
                                <Link to="/add" className="addLink">
                                    <button className="addLinkBtn">Aggiungi Negozio</button>
                                </Link>
                                <Link to="/last-added" className="lastAddedLink">
                                    <button className="lastAddedBtn">Ultimi Aggiunti</button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )
                }       
        </header>
    )
}

export default Header;