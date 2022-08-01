import React from "react";
import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul className="main-nav">
                <li>
                    <NavLink exact to="/cerca">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/aggiungi">
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    );
};

export default Home;