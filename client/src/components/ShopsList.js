import React from 'react';
import { Link } from 'react-router-dom';

const ShopsList = (props) => {

    const checkString = (string) => {
        if (string) {
            if (string.length > 25) {
                const newString = string.substring(0, 25)
                return newString + '...'
            } else {
                return string
            }
        } 
    }

    const checkStringCity = (string) => {
        if (string) {
            if (string.length > 15) {
                const newString = string.substring(0, 15)
                return newString + '...'
            } else {
                return string
            }
        } 
    }

    return (
        <div className="shopsList">
            {
                props.list.length > 0 ? (
                    props.list.map((shop, index) => {
                        return (
                            <Link to={`/shop/${shop.id}`} key={index} style={{textDecoration: 'none'}}>
                                <div className="shopsListDiv">
                                    <div className="shopsListName">{checkString(shop.nome)}</div>
                                    <div className="shopsListAddress">{checkString(shop.indirizzo)}</div>
                                    <div className="shopsListCittà">{checkStringCity(shop.città)} {shop.cap}</div>
                                    <div className="shopsListMail">{checkString(shop.email)}</div>
                                </div>
                            </Link>
                        )
                        
                    })
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
        </div>
    )
}

export default ShopsList;