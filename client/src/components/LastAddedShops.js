import React, { useState } from 'react';

import ShopsList from './ShopsList';


const LastAddedShop = (props) => {

    const [show, setShow] = useState(false)

    return (
        <div className="lastAddedDiv">
            <button className="lastAddedBtn" onClick={() => show ? setShow(false) : setShow(true)}>Ultimi Aggiunti</button>
            {
                show ? (
                    <ShopsList list={props.context.lastAdded} />
                ) : (
                    <React.Fragment>

                    </React.Fragment>
                )
            }
        </div>
    )
}

export default LastAddedShop;