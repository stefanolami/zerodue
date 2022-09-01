import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

import Navigation from "./Navigation"
import FormOrders from "./FormOrders"


const AddOrder = (props) => {

    const { id } = useParams();

    const navigate = useNavigate()

    const submit = (e, order) => {
        e.preventDefault();
        
        const shopId = id;

        const fullOrder = { ...order, shopId};
        
        props.context.actions.createOrder(fullOrder)
        .then(res => {
            if (res.status === 201) {
                navigate(`/orders-history/${id}`)
            } else if (res.status === 400) {
                console.log(res);
                navigate('/error')
            }
        })
        .catch(err => {
            console.log(err);
        })
        
            
        
    }

    return (
        <React.Fragment>
            <Navigation />
            <FormOrders
                submit={submit}
             />
        </React.Fragment> 
    )
}

export default AddOrder;