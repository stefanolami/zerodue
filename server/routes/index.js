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
}))

module.exports = router;