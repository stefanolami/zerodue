import React, { useState } from 'react';

import ShopsList from './ShopsList';
import Navigation from './Navigation';


const LastAddedShops = (props) => {

    return (
        <React.Fragment>
            <Navigation />
            <h2 className="last-added-title">Ultimi Aggiunti</h2>
            <ShopsList 
                list={props.context.lastAdded} 
                formatDate={props.context.actions.formatDate}
            />
        </React.Fragment>
    )
}

export default LastAddedShops;