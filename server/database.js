const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'shaman90',
    database: 'zerodue'
})

exports.db = db;