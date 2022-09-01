import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                props.list ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Indirizzo</th>
                                <th>Città</th>
                                <th>Contattato</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.list.length > 0 ? (
                                    props.list.map((shop, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <Link to={`/shop/${shop.id}`} key={index} style={{textDecoration: 'none'}}>{checkString(shop.nome)}</Link>
                                                </td>
                                                <td>
                                                    <Link to={`/shop/${shop.id}`} key={index} style={{textDecoration: 'none'}}>{checkString(shop.indirizzo)}</Link>
                                                </td>
                                                <td>
                                                    <Link to={`/shop/${shop.id}`} key={index} style={{textDecoration: 'none'}}>{checkStringCity(shop.città)} {shop.cap}</Link>
                                                </td>
                                                <td>
                                                    <Link to={`/shop/${shop.id}`} key={index} style={{textDecoration: 'none'}}>{props.formatDate(shop.ultimo_contatto)}</Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    null
                                )
                            }
                        </tbody>
                    </Table>
                ) : (
                    null
                )
            }
        </div>
    )
}

export default ShopsList;