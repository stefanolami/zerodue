import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AdvancedSearch = (props) => {
    const navigate = useNavigate();

    const [nome, setNome] = useState(null);
    const [indirizzo, setIndirizzo] = useState(null);
    const [cap, setCap] = useState(null);
    const [città, setCittà] = useState(null);
    const [provincia, setProvincia] = useState(null);
    const [regione, setRegione] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefono, setTelefono] = useState(null);
    const [telefonoReferente, setTelefonoReferente] = useState(null);
    const [contattato, setContattato] = useState(null);
    const [riContattato, setRiContattato] = useState(null);
    const [compra, setCompra] = useState(null);
    const [imbustato, setImbustato] = useState(null);
    const [sfuso, setSfuso] = useState(null);
    const [note, setNote] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        const shop = {
            nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note
        }
        props.context.actions.searchAdvanced(shop)
            .then(res => {
                if (res === null) {
                    navigate("/notfound")
                } else {
                    props.context.actions.setShopsList(res)
                    navigate("/search")
                }

            })
            .catch(err => console.log(err.message))
        console.log("searched")
    }

    return (
        <div>
            <h2>Ricerca Avanzata</h2>
            <form className="addForm" onSubmit={submit}>
                <div className="formDiv">
                    <div className="formDiv1">
                        <input type="text" placeholder="Nome" id="name" onChange={(e) => setNome(e.target.value)} />
                        <input type="text" placeholder="Indirizzo" id="address" onChange={(e) => setIndirizzo(e.target.value)} />
                        <input type="text" placeholder="Cap" id="zip" onChange={(e) => setCap(e.target.value)} />
                        <input type="text" placeholder="Città" id="city" onChange={(e) => setCittà(e.target.value)} />
                        <input type="text" placeholder="Provincia" id="prov" onChange={(e) => setProvincia(e.target.value)} />
                        <input type="text" placeholder="Regione" id="reg" onChange={(e) => setRegione(e.target.value)} />
                        <input type="tel" placeholder="Telefono" id="telephone" onChange={(e) => setTelefono(e.target.value)} />
                        <input type="tel" placeholder="Telefono Referente" id="telephoneRef" onChange={(e) => setTelefonoReferente(e.target.value)} />
                        <input type="email" placeholder="E-mail" id="email" onChange={(e) => setEmail(e.target.value)} />
                        <textarea placeholder="Note" onChange={(e) => setNote(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="formDiv2">
                        <label>
                            Compra 
                            <div>
                                Si <input type="radio" value="1" name="compra" onChange={(e) => setCompra(e.target.value)} />
                                No <input type="radio" value="0" name="compra" onChange={(e) => setCompra(e.target.value)} />
                            </div>
                        </label>
                        <label>
                            Come
                            <div>
                                Buste <input type="checkbox" value="1" name="compraCome" onChange={(e) => setImbustato(e.target.value)} />
                                Sfuso <input type="checkbox" value="1" name="compraCome" onChange={(e) => setSfuso(e.target.value)} />
                            </div>
                        </label>
                        <label>
                            Contattato
                            <div>
                                Si <input type="radio" value="1" name="contattato" onChange={(e) => setContattato(e.target.value)} />
                                No <input type="radio" value="0" name="contattato" onChange={(e) => setContattato(e.target.value)} />
                            </div>
                        </label>
                        <label>
                            RiContattato
                            <div>
                                Si <input type="radio" value="1" name="riContattato" onChange={(e) => setRiContattato(e.target.value)} />
                                No <input type="radio" value="0" name="riContattato" onChange={(e) => setRiContattato(e.target.value)} />
                            </div>
                        </label>
                    </div>
                </div>
                <button className="addBtn" type="submit">Cerca</button>
            </form>
        </div>
    )
}

export default AdvancedSearch;