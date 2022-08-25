import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShopsList = (props) => {

    const query = useParams()

    const [list, setList] = useState()

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

    /* useEffect(() => {
        if (props.listName === "shopsList") {
            console.log("setting list to shops")
            
            setList(props.context.shopsList)
            
            
            console.log(list)
            console.log(props.context.shopsList)
        } else if (props.listName === "lastAdded") {
            setList(props.context.lastAdded);
        }
        // eslint-disable-next-line
    }, [list]) */

    useEffect(() => {
        setTimeout(() => {
            if (props.listName === "shopsList") {
                console.log("setting list to shops")
                setList(props.context.shopsList)
                
                
                console.log(list)
                console.log(props.context.shopsList)
            } else if (props.listName === "lastAdded") {
                setList(props.context.lastAdded);
            }
        }, 100)
        
        // eslint-disable-next-line
    }, [query, list])

    return (
        <div className="shopsList">
            {
                list ? (
                    list.length > 0 ? (
                    list.map((shop, index) => {
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
                ) : (
                    <React.Fragment></React.Fragment>

                )
                
            }
        </div>
    )
}

export default ShopsList;