import React, { useState } from 'react';

import ShopsList from './ShopsList';
import Navigation from './Navigation';


const LastAddedShops = (props) => {

    const [show, setShow] = useState(false)

    return (
        <React.Fragment>
            <Navigation />
            <h2 className="last-added-title">Ultimi Aggiunti</h2>
            <ShopsList list={props.context.lastAdded} />
        </React.Fragment>
    )
}

export default LastAddedShops;