import React from "react";

const Add = () => {
    return (
        <div className="formDiv">
            <form className="addForm">
                <div className="formDiv1">
                    <input type="text" placeholder="Nome" id="name" />
                    <input type="text" placeholder="Indirizzo" id="address" />
                    <input type="text" placeholder="Cap" id="zip" />
                    <input type="text" placeholder="Città" id="city" />
                    <input type="text" placeholder="Provincia" id="prov" />
                    <input type="text" placeholder="Regione" id="reg" />
                    <input type="tel" placeholder="Telefono" id="telephone" />
                    <input type="tel" placeholder="Telefono Referente" id="telephoneRef" />
                    <input type="email" placeholder="E-mail" id="email" />
                    <textarea placeholder="Note">
                    </textarea>
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
                        RiContattato
                        <div>
                            Si <input type="radio" value="contattatoSi" name="riContattato" />
                            No <input type="radio" value="contattatoNo" name="riContattato" />
                        </div>
                    </label>
                </div>
            </form>
            <button className="addBtn">Aggiungi</button>
        </div>
        
    )
}

export default Add;