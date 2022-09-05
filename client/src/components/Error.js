import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navigation from './Navigation';

const Error = () => {

    const navigate = useNavigate();

    window.onpopstate = () => {
        console.log('going back')
        navigate("/");
    }

    return (
        <React.Fragment>
            <Navigation />
            <div className="error">
                <h1>Error</h1>
                <h3>Sorry, an unexpected error has occurred</h3>
            </div>
        </React.Fragment>
        
    )
}

export default Error;