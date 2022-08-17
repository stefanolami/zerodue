'use strict';

const auth = require('basic-auth');
const bcrypt = require('bcrypt');
const db = require('../database').db;

// Middleware to authenticate the request using Basic Authentication.
exports.authenticateUsers = async (req, res, next) => {
    let message;

    const credentials = auth(req);

    if (credentials) {
        const userCall = await db.promise().query(
            'SELECT * FROM users WHERE username = ?', credentials.name, (err, result) => {
                if (err) {
                    console.log(err.sqlMessage);
                    res.send(err);
                } else {
                    return result
                }
            }
        );
        const user = userCall[0][0];
        if (user) {
            const authenticated = bcrypt.compareSync(credentials.pass, user.password);
            if (authenticated) {
                console.log(`Authentication successful for username: ${user.username}`);
                req.currentUser = user;
            } else {
                message = `Authentication failure for username: ${user.username}`;
            }
        } else {
            message = `User not found for username : ${credentials.name}`;
        }
    } else {
        message = 'Auth header Not Found';
    }

    if (message) {
        console.warn(message);
        res.status(401).json({ message: 'Access Denied' });
    } else {
        next(); 
    }
}