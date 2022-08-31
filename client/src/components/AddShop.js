import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

import Navigation from "./Navigation";
import Form from "./Form";

const AddShop = (props) => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState();

    const submit = (e, shop) => {
        e.preventDefault();
        
        if (shop.nome) {
            props.context.actions.createShop(shop)
            .then(res => {
                if (res) {
                    navigate("/")
                } else if (res.status === 400) {
                    setErrors("Inserisci un nome");
                }
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            setErrors("Inserisci un nome");
        }
    }

/*     const [selectedOption, setSelectedOptions] = useState("");
 */    

    return (
        <React.Fragment>
            <Navigation />
            <Form 
                submit={submit}
                errors={errors}
                title="Aggiungi Negozio"
                button="Aggiungi"
                update={false}
            />
        </React.Fragment>
    )
}

export default AddShop;