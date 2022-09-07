import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import Form from "./Form";
import Navigation from "./Navigation";

const UpdateShop = (props) => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState();
    const [submitted, setSubmitted] = useState(false);

    const { id } = useParams();

    const submit = (e, shop) => {
        e.preventDefault();
        if (shop.nome) {
            props.context.actions.updateShop(id, shop)
                .then(res => {
                    if (res === true) {
                        setSubmitted('Negozio Aggiornato!')
                        setTimeout(() => navigate(-1, { replace: true }), 1500)
                    } else if (res.status === 400) {
                        setErrors("Inserisci un nome");
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    navigate('/error');
                })
        } else {
            setErrors("Inserisci un nome");
        }
    }

    return (
        <React.Fragment>
            <Navigation />
            <Form
                submit={submit}
                errors={errors}
                id={id}
                getShop={props.context.actions.getShop}
                title="Aggiorna Negozio"
                button="Aggiorna"
                update={true}
                submitted={submitted}
            />
        </React.Fragment>
        
    )
}

export default UpdateShop;