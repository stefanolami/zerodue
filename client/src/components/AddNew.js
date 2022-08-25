import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import italia from '../geography';

import SelectComponent from "./SelectComponent";

const AddNew = (props) => {

    const navigate = useNavigate();

    const [nome, setNome] = useState();
    const [indirizzo, setIndirizzo] = useState();
    const [cap, setCap] = useState();
    const [città, setCittà] = useState();
    const [provincia, setProvincia] = useState();
    const [regione, setRegione] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [telefonoReferente, setTelefonoReferente] = useState();
    const [contattato, setContattato] = useState();
    const [riContattato, setRiContattato] = useState();
    const [compra, setCompra] = useState();
    const [imbustato, setImbustato] = useState();
    const [sfuso, setSfuso] = useState();
    const [note, setNote] = useState();
    const [errors, setErrors] = useState();

    const submit = (e) => {
        e.preventDefault();
        const shop = {
            nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note
        }
        if (nome) {
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
                /* navigate('/error'); */
            })
        } else {
            setErrors("Inserisci un nome");
        }
    }

    const [selectedOption, setSelectedOptions] = useState("");
    

    return (
        <div>
            <h2>Aggiungi Negozio</h2>
            {
                !errors ? (
                    <React.Fragment></React.Fragment>
                ) : (
                    <div className="validationErrors">
                        <h3>Errore di Validazione</h3>
                        <p>{errors}</p>
                    </div>
                )
            }
            <form className="addForm" onSubmit={submit}>
                <div className="formDiv">
                    <div className="formDiv1">
                        <input type="text" placeholder="Nome" id="name" onChange={(e) => setNome(e.target.value)} />
                        <input type="text" placeholder="Indirizzo" id="address" onChange={(e) => setIndirizzo(e.target.value)} />
                        <input type="text" placeholder="Cap" id="zip" onChange={(e) => setCap(e.target.value)} />
                        <input type="text" placeholder="Città" id="city" onChange={(e) => setCittà(e.target.value)} />
                        <SelectComponent
                            options={italia.italia}
                            onChange={(item) => setRegione(item)}
                            placeholder={"Regione"}
                            selectedKey={selectedOption}
                        />
                        <SelectComponent
                            options={regione ? italia.italia[regione] : null}
                            onChange={(item) => setProvincia(item)}
                            placeholder={"Provincia"}
                            selectedKey={selectedOption}
                        />
                        {/* <input type="text" placeholder="Provincia" id="prov" onChange={(e) => setProvincia(e.target.value)} />
                        <input type="text" placeholder="Regione" id="reg" onChange={(e) => setRegione(e.target.value)} /> */}
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
                <button className="addBtn" type="submit">Aggiungi</button>
            </form>
        </div>
    )
}

export default AddNew;