import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navigation from './Navigation';

const NotFound = () => {

    const navigate = useNavigate();

    window.onpopstate = () => {
        navigate(-1, { replace: true });
    }

    return (
        <React.Fragment>
            <Navigation />
            <div className="notFound">
                <h1>Error 404</h1>
                <h3>Sorry, we couldn't find what you're looking for</h3>
            </div>
        </React.Fragment>
    )
}

export default NotFound;