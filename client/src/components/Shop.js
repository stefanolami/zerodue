import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';

const Shop = (props) => {

    const { id } = useParams();
    const [shop, setShop] = useState(null);
    const navigate = useNavigate()

    const deleteShop = (id) => {
        props.context.actions.deleteShop(id)
            .then(res => {
                if (res === true) {
                    navigate('/');
                } else {
                    navigate('/error');
                }
            })
            .catch(err => {
                console.log(err.message);
                navigate('/error')
            })
    }

    useEffect(() => {
        props.context.actions.getShop(id)
            .then(res => {
                if (res !== null) {
                    setShop(res[0])
                    console.log(shop)
                } else {
                    navigate('/notfound')
                }
            })
            .catch(err => {
                console.log(err.message)
                navigate('/error')
            })
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <React.Fragment>
            {
                shop ? (
                    <React.Fragment>
                        <div className="shopDiv">
                            <div className="shopInfo">
                                <h2>{shop.nome}</h2>
                                <p>{shop.indirizzo}  {shop.città}  {shop.cap}  {shop.provincia}  {shop.regione}</p>
                                {
                                    shop.email ? (
                                        <p><strong>Email:</strong> {shop.email}</p>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                                {
                                    shop.telefono ? (
                                        <p><strong>Telefono:</strong> {shop.telefono}</p>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                                {
                                    shop.telefonoReferente ? (
                                        <p><strong>Tel. Referente:</strong> {shop.telefonoReferente}</p>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                                {
                                    shop.note ? (
                                        <p className="note"><strong>Note:</strong> {shop.note}</p>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                            </div>
                            <div className="shopBusiness">
                                {
                                    shop.contattato === 1 ? (
                                        <p><strong>Contattato</strong></p>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                                {
                                    shop.riContattato === 1 ? (
                                        <p><strong>RiContattare</strong></p>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                                {
                                    shop.compra === 1 ? (
                                        <p><strong>Compra:</strong> {
                                            shop.imbustato === 1 ? (
                                                "Imbustato "
                                            ) : (
                                                <React.Fragment></React.Fragment>
                                            )
                                        }
                                        {
                                            shop.sfuso === 1 ? (
                                                "Sfuso "
                                            ) : (
                                                <React.Fragment></React.Fragment>
                                            )
                                        }</p>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                            </div>
                        </div>
                        <div className="shopBtns">
                                <Link to="/update">
                                    <button className="updateBtn">Aggiorna</button>
                                </Link>
                                
                                <button className="deleteBtn" onClick={() => deleteShop(id)}>Cancella</button>
                                
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment></React.Fragment>
                )
            }
        </React.Fragment>
        
        
    )
}

export default Shop;