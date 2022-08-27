import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import Navigation from './Navigation';
import ShopsList from './ShopsList';

import searchIcon from "../images/search-icon.png";

const Search = (props) => {

    const [query, setQuery] = useState();
    const [shopsList, setShopsList] = useState();

    const navigate = useNavigate()

    const searchShops = (e, query) => {
        const newQuery = `?query=${query}`;
        e.preventDefault();
        props.context.actions.searchShops(newQuery)
            .then(res => setShopsList(res))
            .catch(err => console.log(err.message))
        console.log("searched");
        navigate({
            pathname: '/search',
            search: `${newQuery}`
        })
    }

    useEffect(() => {

        if (window.location.search) {
            props.context.actions.searchShops(window.location.search)
                .then(res => {
                    if (res === null) {
                        navigate("/notfound")
                    } else {
                        setShopsList(res)
                    }
                })
                .catch(err => console.log(err.message))
            console.log("searched on render")
        } else {
            setShopsList(null)
        }
        
        // eslint-disable-next-line
    }, [window.location.search])

    return (
        <React.Fragment>
            <Navigation />
            <div className="search">
                <form className="search-div" spellCheck="false" onSubmit={(e) => searchShops(e, query)}>
                    <input type="text" className="search-input" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                    <button type="submit" className="search-btn"><img src={searchIcon} alt="Search icon" className="searchIcon" /></button>
                </form>
                <ShopsList list={shopsList} />
            </div>
            
        </React.Fragment>
        
    )
}

export default Search;