import React from "react";
import {Link} from 'react-router-dom';
import logo from "../images/zerodue-logo.jpg";

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
                            <button className="header-btn" onClick={props.context.actions.signOut}>Disconnetti</button>
                        </div>
                    ) : (
                        null
                    )
                }       
        </header>
    )
}

export default Header;