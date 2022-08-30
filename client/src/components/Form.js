import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import italia from '../geography';

import SelectComponent from "./SelectComponent";


const Form = (props) => {

    const navigate= useNavigate();

    const [dataContatto, setDataContatto] = useState()
    const [nome, setNome] = useState();
    const [indirizzo, setIndirizzo] = useState();
    const [cap, setCap] = useState();
    const [città, setCittà] = useState();
    const [provincia, setProvincia] = useState();
    const [regione, setRegione] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [telefonoReferente, setTelefonoReferente] = useState();
    const [nomeReferente, setNomeReferente] = useState();
    const [contattato, setContattato] = useState();
    const [riContattato, setRiContattato] = useState();
    const [cliente, setCliente] = useState();
    const [compra, setCompra] = useState();
    const [imbustato, setImbustato] = useState();
    const [sfuso, setSfuso] = useState();
    const [note, setNote] = useState();

    const [selectedOption, setSelectedOptions] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const shop = {
            nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, nomeReferente, contattato, riContattato, compra, imbustato, sfuso, note
        }
        props.submit(e, shop);
    }

    useEffect(() => {
        if (props.update) {
            props.getShop(props.id)
            .then(res => {
                if (res !== null) {
                    console.log(res[0])
                    setNome(res[0].nome);
                    setIndirizzo(res[0].indirizzo);
                    setCap(res[0].cap);
                    setCittà(res[0].città);
                    setProvincia(res[0].provincia);
                    setRegione(res[0].regione);
                    setEmail(res[0].email);
                    setTelefono(res[0].telefono);
                    setTelefonoReferente(res[0].telefonoReferente);
                    setNomeReferente(res[0].nomeReferente);
                    setContattato(res[0].contattato);
                    setRiContattato(res[0].riContattato);
                    setCompra(res[0].compra);
                    setSfuso(res[0].sfuso);
                    setImbustato(res[0].imbustato);
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
    }, [])

    return (
        <div>
            <h2>{props.title}</h2>
            {
                !props.errors ? (
                    <React.Fragment></React.Fragment>
                ) : (
                    <div className="validationErrors">
                        <h3>Errore di Validazione</h3>
                        <p>{props.errors}</p>
                    </div>
                )
            }
            <form className="form" spellCheck="false" onSubmit={submit}>
                <div className="form-div">
                    <div className="form-div-1">
                        <label>&nbsp;Nome 
                            <input type="text" id="name" value={nome || ""} onChange={(e) => setNome(e.target.value)} />
                        </label>
                        <label>&nbsp;Indirizzo 
                            <input type="text" id="address" value={indirizzo || ""} onChange={(e) => setIndirizzo(e.target.value)} />
                        </label>
                        <label>&nbsp;Cap 
                            <input type="text" id="zip" value={cap || ""} onChange={(e) => setCap(e.target.value)} />
                        </label>
                        <label>&nbsp;Città 
                            <input type="text" id="city" value={città || ""} onChange={(e) => setCittà(e.target.value)} />
                        </label>
                        <SelectComponent
                            options={italia.italia}
                            onChange={(item) => setRegione(item)}
                            selectedKey={selectedOption}
                            value={regione || ""}
                            label="Regione"
                        />
                        <SelectComponent
                            options={regione ? italia.italia[regione] : null}
                            onChange={(item) => setProvincia(item)}
                            selectedKey={selectedOption}
                            value={provincia || ""}
                            label="Provincia"
                        />
                        {/* <input type="text" placeholder="Provincia" id="prov" value={provincia || ""} onChange={(e) => setProvincia(e.target.value)} />
                        <input type="text" placeholder="Regione" id="reg" value={regione || ""} onChange={(e) => setRegione(e.target.value)} /> */}
                        
                        <label>&nbsp;Note 
                            <textarea className="textarea" value={note || ""} onChange={(e) => setNote(e.target.value)}>
                            </textarea>
                        </label>
                        
                    </div>
                    <div className="form-div-2">
                        <label>&nbsp;Email 
                            <input type="email" id="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>&nbsp;Telefono 
                            <input type="tel" id="telephone" value={telefono || ""} onChange={(e) => setTelefono(e.target.value)} />
                        </label>
                        <label>&nbsp;Telefono Referente
                            <input type="tel" value={telefonoReferente || ""} id="telephoneRef" onChange={(e) => setTelefonoReferente(e.target.value)} />
                        </label>
                        <label>&nbsp;Nome Referente
                            <input type="text" value={nomeReferente || ""} id="nomeReferente" onChange={(e) => setNomeReferente(e.target.value)} />
                        </label>
                        <div className="form-business-div">
                            <label>
                                Cliente 
                                <div>
                                    <input className="radio-si" type="radio" value="1" checked={cliente === 1 ? true : false} name="cliente" onChange={(e) => setCliente(1)} />
                                    <span className="radio-span si">Si</span>
                                    <input className="radio-no" type="radio" value="0" checked={cliente === 0 ? true : false} name="cliente" onChange={(e) => setCliente(0)} />
                                    <span className="radio-span no">No</span>
                                </div>
                            </label>
                            <label>
                                Compra 
                                <div>
                                    <input className="radio-si" type="radio" value="1" checked={compra === 1 ? true : false} name="compra" onChange={(e) => setCompra(1)} />
                                    <span className="radio-span si">Si</span>
                                    <input className="radio-no" type="radio" value="0" checked={compra === 0 ? true : false} name="compra" onChange={(e) => setCompra(0)} />
                                    <span className="radio-span no">No</span>
                                </div>
                            </label>
                            <label>
                                Buste
                                <div>
                                    <input className="radio-si" type="radio" value="1" checked={imbustato === 1 ? true : false} name="compraImbustato" onChange={(e) => setImbustato(1)} />
                                    <span className="radio-span si">Si</span>
                                    <input className="radio-no" type="radio" value="0" checked={imbustato === 0 ? true : false} name="compraImbustato" onChange={(e) => setImbustato(0)} />
                                    <span className="radio-span no">No</span>
                                </div>
                            </label>
                            <label>
                                Sfuso
                                <div>
                                    <input className="radio-si" type="radio" value="1" checked={sfuso === 1 ? true : false} name="compraSfuso" onChange={(e) => setSfuso(1)} />
                                    <span className="radio-span si">Si</span>
                                    <input className="radio-no" type="radio" value="0" checked={sfuso === 0 ? true : false} name="compraSfuso" onChange={(e) => setSfuso(0)} />
                                    <span className="radio-span no">No</span>
                                </div>
                            </label>
                            <label>
                                Contattato
                                <div>
                                    <input className="radio-si" type="radio" value="1" checked={contattato === 1 ? true : false} name="contattato" onChange={(e) => setContattato(1)} />
                                    <span className="radio-span si">Si</span>
                                    <input className="radio-no" type="radio" value="0" checked={contattato === 0 ? true : false} name="contattato" onChange={(e) => setContattato(0)} />
                                    <span className="radio-span no">No</span>
                                </div>
                            </label>
                            
                        </div>
                        {
                                contattato === 1 ? (
                                    <div className="datepicker-div">
                                        <label>Ultimo Contatto
                                            <input type="date" value={dataContatto || null} onChange={(e) => setDataContatto(e.target.value)} />
                                        </label>
                                    </div>
                                ) : (
                                    null
                                )
                            }
                    </div>
                </div>
                <button className="addBtn" type="submit">{props.button}</button>
            </form>
        </div>
    )
}

export default Form;