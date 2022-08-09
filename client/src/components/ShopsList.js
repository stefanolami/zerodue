import React from 'react';

const ShopsList = (props) => {
    return (
        <div className="shopsListDiv">
            <ul className="shopsList">
                {
                    props.context.shopsList.length > 0 ? (
                        props.context.shopsList.map((shop, index) => {
                            return (
                                <li key={index}>
                                    <div className="shopsListName">{shop.nome}</div>
                                    <div className="shopsListAddress">{shop.indirizzo} {shop.cap}</div>
                                    <div className="shopsListCittà">{shop.città}</div>
                                    <div className="shopsListMail">{shop.email}</div>
                                </li>
                            )
                            
                        })
                    ) : (
                        <React.Fragment></React.Fragment>
                    )
                }
            </ul>
        </div>
    )
}

export default ShopsList;