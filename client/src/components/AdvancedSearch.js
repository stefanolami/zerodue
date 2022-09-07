import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Navigation from "./Navigation";
import Form from "./Form";
import ShopsList from "./ShopsList";

const AdvancedSearch = (props) => {

    const navigate = useNavigate();

    const [shopsList, setShopsList] = useState();
    const [showList, setShowList] = useState(false);

    const submit = (e, shop) => {
        e.preventDefault();
        let query = `?1=1`;

        if (shop.nome) {
            query += `&nome=${shop.nome}`;
        }
        if (shop.indirizzo) {
            query += `&indirizzo=${shop.indirizzo}`;
        }
        if (shop.cap) {
            query += `&cap=${shop.cap}`;
        }
        if (shop.città) {
            query += `&città=${shop.città}`;
        }
        if (shop.provincia) {
            query += `&provincia=${shop.provincia}`;
        }
        if (shop.regione) {
            query += `&regione=${shop.regione}`;
        }
        if (shop.email) {
            query += `&email=${shop.email}`;
        }
        if (shop.telefono) {
            query += `&telefono=${shop.telefono}`;
        }
        if (shop.telefonoReferente) {
            query += `&telefonoReferente=${shop.telefonoReferente}`;
        }
        if (shop.contattato) {
            query += `&contattato=${shop.contattato}`;
        }
        if (shop.riContattato) {
            query += `&riContattato=${shop.riContattato}`;
        }
        if (shop.compra) {
            query += `&compra=${shop.compra}`;
        }
        if (shop.sfuso) {
            query += `&sfuso=${shop.sfuso}`;
        }
        if (shop.imbustato) {
            query += `&imbustato=${shop.imbustato}`;
        }
        if (shop.note) {
            query += `&note=${shop.note}`;
        }

        props.context.actions.searchAdvanced(query)
            .then(res => {
                if (res === null) {
                    navigate("/notfound")
                } else {
                    setShopsList(res)
                }
            })
            .catch(err => {
                console.log(err.message);
                navigate('/error');
            })
        navigate({
            pathname: '/advanced-search',
            search: `${query}`
        })
        setShowList(true);
    }

    const newSearch = () => {
        setShopsList(null);
        setShowList(false);
    }

    useEffect(() => {

        if (window.location.search) {
            props.context.actions.searchAdvanced(window.location.search)
                .then(res => {
                    if (res === null) {
                        navigate("/notfound")
                    } else {
                        setShopsList(res)
                    }
                })
                .catch(err => {
                    console.log(err.message);
                    navigate("/error")
                })
            setShowList(true);
        } else {
            setShopsList(null);
            setShowList(false);
        }
        
        // eslint-disable-next-line
    }, [window.location.search])

    return (
        <React.Fragment>
            <Navigation />
            {
                showList ? (
                    <button className="advanced-search-btn" onClick={() => newSearch()}>Nuova Ricerca</button>
                ) : (
                    <Form 
                        submit={submit}
                        title="Ricerca Avanzata"
                        button="Cerca"
                        update={false}
                    />
                )
            }
            {
                showList ? (
                    <ShopsList
                        list={shopsList} 
                        formatDate={props.context.actions.formatDate}
                    />
                ) : (
                    null
                )
            }
        </React.Fragment>
    )
}

export default AdvancedSearch;