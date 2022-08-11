import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from 'react-router-dom';

const UpdateShop = (props) => {

    const navigate = useNavigate();

    const { id } = useParams();

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
                if (res === true) {
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

    useEffect(() => {
        props.context.actions.getShop(id)
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
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h2>Aggiorna Negozio</h2>
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
                        <input type="text" placeholder="Nome" id="name" value={nome || ""} onChange={(e) => setNome(e.target.value)} />
                        <input type="text" placeholder="Indirizzo" id="address" value={indirizzo || ""} onChange={(e) => setIndirizzo(e.target.value)} />
                        <input type="text" placeholder="Cap" id="zip" value={cap || ""} onChange={(e) => setCap(e.target.value)} />
                        <input type="text" placeholder="Città" id="city" value={città || ""} onChange={(e) => setCittà(e.target.value)} />
                        <input type="text" placeholder="Provincia" id="prov" value={provincia || ""} onChange={(e) => setProvincia(e.target.value)} />
                        <input type="text" placeholder="Regione" id="reg" value={regione || ""} onChange={(e) => setRegione(e.target.value)} />
                        <input type="tel" placeholder="Telefono" id="telephone" value={telefono || ""} onChange={(e) => setTelefono(e.target.value)} />
                        <input type="tel" placeholder="Telefono Referente" value={telefonoReferente || ""} id="telephoneRef" onChange={(e) => setTelefonoReferente(e.target.value)} />
                        <input type="email" placeholder="E-mail" id="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} />
                        <textarea placeholder="Note" value={note || ""} onChange={(e) => setNote(e.target.value)}>
                        </textarea>
                    </div>
                    <div className="formDiv2">
                        <label>
                            Compra 
                            <div>
                                Si <input type="radio" value="1" checked={compra === 1 || "1" ? true : false} name="compra" onChange={(e) => setCompra(1)} />
                                No <input type="radio" value="0" checked={compra === 0 || "0" ? true : false} name="compra" onChange={(e) => setCompra(0)} />
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
                                Si <input type="radio" value="checked" name="contattato" onChange={(e) => setContattato(e.target.value)} />
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
                <button className="updateBtn" type="submit">Aggiorna</button>
            </form>
        </div>
    )
}

export default UpdateShop;