import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

import Navigation from './Navigation';

import searchIcon from "../images/search-icon.png";

const Search = (props) => {

    const [query, setQuery] = useState();

    const navigate = useNavigate()

    const searchShops = (e, query) => {
        e.preventDefault();
        props.context.actions.searchShops(query)
            .then(res => props.context.actions.setShopsList(res))
            .catch(err => console.log(err.message))
        console.log("searched");
        navigate(`/search/${query}`);
    }

    return (
        <React.Fragment>
            <Navigation />
            <form className="search-div" onSubmit={(e) => searchShops(e, query)}>
                <input type="text" className="search-input" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" className="search-btn"><img src={searchIcon} alt="Search icon" className="searchIcon" /></button>
            </form>
        </React.Fragment>
        
    )
}

export default Search;