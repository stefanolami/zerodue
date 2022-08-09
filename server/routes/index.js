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

module.exports = router;