const express = require('express');
const db = require('../database').db;
const router = express.Router();
const {asyncHandler} = require('../middleware/async-handler')

/* router.post('/create',async (req, res) => {

    const {
        nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note
    } = req.body

    db.query(
        'INSERT INTO shops (nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note], (err, result) => {
            if (err) {
                if (err.code === "ER_BAD_NULL_ERROR") {
                    console.log("ciaoooooo")
                    console.log(err.sqlMessage)
                    res.status(400).send(err.sqlMessage)
                } else {
                    console.log(err)
                    res.status(500).send(err)
                }
            } else {
                console.log('values inserted')
                res.status(201).send('values inserted')
            }
        }
    )
}) */

router.post('/create',asyncHandler(async (req, res) => {

    const {
        nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note
    } = req.body

    db.query(
        'INSERT INTO shops (nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note], (err, result) => {
            if (err) {
                if (!req.body.nome) {
                    console.log(err.sqlMessage)
                    res.status(400).send(err.sqlMessage)
                } else {
                    console.log(err)
                    res.status(500).send(err)
                }
            } else {
                console.log('values inserted')
                res.status(201).send('values inserted')
            }
        }
    )
}));

router.get('/shops/:place', asyncHandler(async (req, res) => {
    
    const place = req.params.place;

    db.query(
        'SELECT * FROM shops WHERE provincia = ?', place, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                res.send(err);
            } else {
                res.status(200).send(result);
            }
        }
    )
}))

router.get('/shop/:id', asyncHandler(async (req, res) => {

    const id = req.params.id;

    db.query(
        'SELECT * FROM shops WHERE id = ?', id, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                res.send(err);
            } else if (result.length === 0) {
                res.status(404).send('Shop not found')
            } else {
                console.log(result)
                res.status(200).send(result);
            }
        }
    )
}))


router.get('/search/:query', asyncHandler( async (req, res) => {

    const query = req.params.query;

    db.query(
        'SELECT * FROM shops WHERE nome LIKE "%' + query + '%" OR indirizzo LIKE "%' + query + '%" OR cap = ? OR città = ? OR provincia = ? OR regione = ? OR email = ? OR telefono = ? OR telefonoReferente = ? OR note  = ?',
        [query, query, query, query, query, query, query, query, query, query], (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                res.send(err);
            } else if (result.length === 0) {
                res.status(404).send('Nothing found')
            } else {
                console.log(result)
                res.status(200).send(result);
            }
        }
    )
}))

/* router.post('/advsearch', asyncHandler( async (req, res) => {

    
    const {nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note} = req.body

    console.log(req.body)

    db.query(
        'SELECT * FROM shops WHERE nome LIKE "%' + nome + '%" AND indirizzo LIKE "%' + indirizzo + '%" AND cap = ? AND città = ? AND provincia = ? AND regione = ? AND email = ? AND telefono = ? AND telefonoReferente = ? AND note  = ?',
        [nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note], (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                res.send(err);
            } else if (result.length === 0) {
                res.status(404).send('Nothing found')
            } else {
                console.log(result)
                res.status(200).send(result);
            }
        }
    )
})) */

router.post('/advsearch', asyncHandler( async (req, res) => {

    let dbQuery = 'SELECT * FROM shops WHERE 1=1';
    let inputs = [];

    const {nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, note} = req.body

    let contattato = req.body.contattato;
    let riContattato = req.body.riContattato;
    let compra = req.body.compra;
    let imbustato = req.body.imbustato;
    let sfuso = req.body.sfuso;

    console.log(req.body)

    if (nome !== null) {
        dbQuery += ' AND nome LIKE "%' + nome + '%"';
        inputs.push(nome);
    }
    if (indirizzo !== null) {
        dbQuery += ' AND indirizzo LIKE "%' + indirizzo + '%"';
        inputs.push(indirizzo);
    }
    if (cap !== null) {
        dbQuery += ' AND cap = ?';
        inputs.push(cap);
    }
    if (città !== null) {
        dbQuery += ' AND città = ?';
        inputs.push(città);
    }
    if (provincia !== null) {
        dbQuery += ' AND provincia = ?';
        inputs.push(provincia);
    }
    if (regione !== null) {
        dbQuery += ' AND regione = ?';
        inputs.push(regione);
    }
    if (email !== null) {
        dbQuery += ' AND email = ?';
        inputs.push(email);
    }
    if (telefono !== null) {
        dbQuery += ' AND telefono LIKE "%' + telefono + '%"';
        inputs.push(telefono);
    }
    if (telefonoReferente !== null) {
        dbQuery += ' AND telefonoReferente LIKE "%' + telefonoReferente + '%"';
        inputs.push(telefonoReferente);
    }
    if (contattato !== null) {
        contattato = parseInt(contattato);
        dbQuery += ` AND contattato = ${contattato}`;
        inputs.push(contattato);
    }
    if (riContattato !== null) {
        riContattato = parseInt(riContattato)
        dbQuery += ` AND riContattato = ${riContattato}`;
        inputs.push(riContattato);
    }
    if (compra !== null) {
        compra = parseInt(compra)
        dbQuery += ` AND compra = ${compra}`;
        inputs.push(compra);
    }
    if (imbustato !== null) {
        imbustato = parseInt(imbustato)
        dbQuery += ` AND imbustato = ${imbustato}`;
        inputs.push(imbustato);
    }
    if (sfuso !== null) {
        sfuso = parseInt(sfuso)
        dbQuery += ` AND sfuso = ${sfuso}`;
        inputs.push(sfuso);
    }
    if (note !== null) {
        dbQuery += ' AND note LIKE "%' + note + '%"';
        inputs.push(note);
    }

    console.log(inputs);
    
    console.log(dbQuery);

    db.query(dbQuery, inputs, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                res.send(err);
            } else if (result.length === 0) {
                res.status(404).send('Nothing found')
            } else {
                console.log(result);
                res.status(200).send(result);
            }
        }
    )
}))

router.delete('/shop/:id', asyncHandler( async (req, res) => {

    const id = req.params.id;

    db.query(
        'DELETE FROM shops WHERE id = ?', id, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
                res.send(err);
            } else {
                res.status(204).send('Shop Deleted')
            }
        }
    )
}))

router.put('/shop/:id', asyncHandler( async (req, res) => {

    const id = req.params.id;

    const {
        nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note
    } = req.body

    db.query(
        'UPDATE shops SET nome = ?, indirizzo = ?, cap = ?, città = ?, provincia = ?, regione = ?, email = ?, telefono = ?, telefonoReferente = ?, contattato = ?, riContattato = ?, compra = ?, imbustato = ?, sfuso = ?, note = ? WHERE id = ?',
        [nome, indirizzo, cap, città, provincia, regione, email, telefono, telefonoReferente, contattato, riContattato, compra, imbustato, sfuso, note, id], (err, result) => {
            if (err) {
                if (!req.body.nome) {
                    console.log(err.sqlMessage)
                    res.status(400).send(err.sqlMessage)
                } else {
                    console.log(err)
                    res.status(500).send(err)
                }
            } else {
                console.log('values inserted')
                res.status(201).send('values inserted')
            }
        }
    )

}))

module.exports = router;