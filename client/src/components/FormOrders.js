import React, { useState, useEffect } from 'react';


const FormOrders = (props) => {

    const [orderDate, setOrderDate] = useState();
    const [invoiceCode, setInvoiceCode] = useState();
    const [invoiceDate, setInvoiceDate] = useState();

    const submit = (e) => {
        e.preventDefault();
        const order = {
            orderDate, invoiceCode, invoiceDate
        }
        props.submit(e, order);
    }

    /* const fixDate = (date) => {
        let subDate = date.substring(0, 10);
        let lastDayString = subDate.slice(9);
        let lastDayInt = parseInt(lastDayString);
        lastDayInt += 1;
        let newDayString = lastDayInt.toString();
        let newSubDate = subDate.substring(0, 9);
        let newDate = newSubDate.concat('', newDayString);
        return newDate;
    } */

    /* useEffect(() => {
        if (props.update) {
            props.getShop(props.id)
            .then(res => {
                if (res !== null) {
                    setNome(res[0].nome);
                    setIndirizzo(res[0].indirizzo);
                    setCap(res[0].cap);
                    setCittà(res[0].città);
                    setProvincia(res[0].provincia);
                    setRegione(res[0].regione);
                    setEmail(res[0].email);
                    setTelefono(res[0].telefono);
                    setTelefonoReferente(res[0].telefono_referente);
                    setNomeReferente(res[0].nome_referente);
                    setContattato(res[0].contattato);
                    if (res[0].ultimo_contatto) {
                        setUltimoContatto(fixDate(res[0].ultimo_contatto));
                    }
                    setCompra(res[0].compra);
                    setCliente(res[0].cliente)
                    setSfuso(res[0].sfuso);
                    setBuste(res[0].buste);
                    setNote(res[0].note);
                } else {
                    navigate('/notfound')
                }
            })
            .catch(err => {
                console.log(err.message);
                navigate('/error');
            })
        }
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) */

    return (
        <div>
            <h2>Aggiungi Ordine</h2>
            <form className="form-orders" spellCheck="false" onSubmit={submit}>
                <div className="form-orders-div">
                    <label>&nbsp;Data Ordine
                        <input type="date" onChange={(e) => setOrderDate(e.target.value)} />
                    </label>
                    <label>&nbsp;Data Fattura
                        <input type="date" onChange={(e) => setInvoiceDate(e.target.value)} />
                    </label>
                    <label>&nbsp;Codice Fattura
                        <input type="text" onChange={(e) => setInvoiceCode(e.target.value)} />
                    </label>
                    
                </div>
                <button className="form-orders-btn" type="submit">Aggiungi</button>
            </form>
        </div>
    )
}

export default FormOrders;