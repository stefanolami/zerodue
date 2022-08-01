import React from "react";

const Aggiungi = () => {
    return (
        <form className="addForm">
            <div className="formDiv1">
                <input type="text" placeholder="Nome" id="name" />
                <input type="text" placeholder="Luogo" id="place" />
                <input type="tel" placeholder="Telefono" id="telephone" />
                <input type="tel" placeholder="Telefono Referente" id="telephoneOpt" />
                <input type="email" placeholder="E-mail" id="email" />
                <textarea placeholder="Note">
                </textarea>
                <input type="submit" value="Aggiungi" className="aggiungiBtn" />
            </div>
            <div className="formDiv2">
                <label>
                    Compra
                    <div>
                        Si <input type="radio" value="compraSi" name="compra" />
                        No <input type="radio" value="compraNo" name="compra" />
                    </div>
                </label>
                <label>
                    Come
                    <div>
                        Buste <input type="checkbox" value="compraBuste" name="compraCome" />
                        Sfuso <input type="checkbox" value="compraSfuso" name="compraCome" />
                    </div>
                </label>
                <label>
                    Contattato
                    <div>
                        Si <input type="radio" value="contattatoSi" name="contattato" />
                        No <input type="radio" value="contattatoNo" name="contattato" />
                    </div>
                </label>
                <label>
                    Ri*Contattato
                    <div>
                        Si <input type="radio" value="contattatoSi" name="riContattato" />
                        No <input type="radio" value="contattatoNo" name="riContattato" />
                    </div>
                </label>
            </div>
        </form>
    )
}

export default Aggiungi;