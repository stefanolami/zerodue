import React, { useState, useEffect } from 'react';

import ShopsList from './ShopsList';
import Navigation from './Navigation';
import SelectComponent from './SelectComponent';


const LastAddedShops = (props) => {

    const [limit, setLimit] = useState(10);
    const [list, setList] = useState();
    const [limitOptions] = useState([5, 10, 20, 50, 100])

    useEffect(() => {
        props.context.actions.getLastAdded(limit)
            .then(res => {
                if (res !== null) {
                    console.log('setting list')
                    setList(res)
                } else {
                    console.log('No Shops found')
                }
            })
            .catch(err => {
                console.log(err.message)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit])


    return (
        <React.Fragment>
            <Navigation />
            <h2 className="last-added-title">Ultimi Aggiunti</h2>
            <div className="list-filter">
            <SelectComponent
                options={limitOptions}
                onChange={(item) => setLimit(item)}
                value={limit || ""}
                label="Quantità"
            />
            </div>
            <ShopsList 
                list={list} 
                formatDate={props.context.actions.formatDate}
            />
        </React.Fragment>
    )
}

export default LastAddedShops;