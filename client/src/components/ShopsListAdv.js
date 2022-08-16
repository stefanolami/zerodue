import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShopsListAdv = (props) => {

    const navigate = useNavigate();

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

    useEffect(() => {
        props.context.actions.searchAdvanced(window.location.search)
            .then(res => {
                if (res === null) {
                    navigate("/notfound")
                } else {
                    props.context.actions.setShopsList(res)
                }
            })
            .catch(err => console.log(err.message))
        console.log("searched")
        // eslint-disable-next-line
    }, [])

    console.log(window.location.search)

    return (
        <div className="shopsList">
            {
                props.context.shopsList.length > 0 ? (
                    props.context.shopsList.map((shop, index) => {
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

export default ShopsListAdv;