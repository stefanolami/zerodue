import React from 'react';
import {Link} from 'react-router-dom'

import filterIcon from '../images/filter-icon.png';
import searchIcon from "../images/search-icon.png";

const Search = () => {
    return (
        <div className="searchDiv">
            <input type="text" className="searchInput" placeholder="Search" />
            <button type="submit" className="searchBtn"><img src={searchIcon} alt="Search icon" className="searchIcon" /></button>
            <Link to="/advsearch" className="filterLink"><img src={filterIcon} alt="Filter icon" className="filterIcon" /></Link>
        </div>
    )
}

export default Search;