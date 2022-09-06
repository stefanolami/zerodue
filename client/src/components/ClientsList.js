import React, {useState, useEffect} from "react";

import ShopsList from "./ShopsList";
import Navigation from "./Navigation";
import SelectComponent from "./SelectComponent";
import sortIcon from '../images/icon-sort.jpg';


const ClientsList = (props) => {

    const [list, setList] = useState();
    const [orderBy, setOrderBy] = useState("nome");
    const [direction, setDirection] = useState("ASC");
    const [orderByOptions] = useState(["nome", "città", "provincia", "regione", "email", "ultimo contatto"]);

    useEffect(() => {
        props.context.actions.getClients(orderBy, direction)
            .then(res => {
                if (res !== null) {
                    console.log('setting list')
                    setList(res)
                } else {
                    console.log('No Shops found')
                }
            })
            .catch(err => {
                console.log(err.message)
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderBy, direction])

    return (
        <React.Fragment>
            <Navigation />
            <div className="clients-list">
                <h2 className="clients-list-title">Lista Clienti</h2>
                <div className="clients-list-selectors">
                    <div className="list-filter clients">
                        <SelectComponent
                            options={orderByOptions}
                            onChange={(item) => setOrderBy(item)}
                            value={orderBy || ""}
                            label="Ordina"
                        />
                    </div>
                    <div className="clients-list-sort">
                        <img src={sortIcon} alt="sort icon" onClick={() => direction === "ASC" ? setDirection("DESC") : setDirection("ASC")} />
                    </div>
                </div>
                <ShopsList 
                    list={list} 
                    formatDate={props.context.actions.formatDate}
                />
            </div>
        </React.Fragment>
            
    )
}

export default ClientsList;