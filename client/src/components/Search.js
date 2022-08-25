import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

import filterIcon from '../images/filter-icon.png';
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
        <form className="searchDiv" onSubmit={(e) => searchShops(e, query)}>
            <input type="text" className="searchInput" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" className="searchBtn"><img src={searchIcon} alt="Search icon" className="searchIcon" /></button>
            <Link to="/advsearchform" className="filterLink"><img src={filterIcon} alt="Filter icon" className="filterIcon" /></Link>
        </form>
    )
}

export default Search;