import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Navigation from './Navigation';
import OrdersList from './OrdersList';

const OrdersHistory = (props) => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [name, setName] = useState();
    const [ordersList, setOrdersList] = useState();

    useEffect(() => {
        props.context.actions.getShop(id)
            .then(res => {
                if (res !== null) {
                    setName(res[0].nome)
                } else {
                    navigate('/notfound')
                }
            })
            .catch(err => {
                console.log(err.message)
                navigate('/error')
            })

        props.context.actions.getOrders(id)
            .then(res => {
                console.log(res)
                if (res !== null) {
                    setOrdersList(res)
                } /* else if (res.status === ) {
                    navigate('/notfound')
                } */
            })
            .catch(err => {
                console.log(err.message)
                navigate('/error')
            })
            
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <React.Fragment>
            <Navigation />
            <div className="orders-history">
                <Link to={`/shop/${id}`}><h3>{name}</h3></Link>
                <h4>Storico Ordini</h4>
                <OrdersList list={ordersList} />
                <Link to={`/add-order/${id}`}>
                    <button className="add-order-btn">Aggiungi Ordine</button>
                </Link>
            </div>
        </React.Fragment>
        
    )
}

export default OrdersHistory;