const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use = cors();
app.use = express.json();









const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(`the application is running on localhost:${PORT} at ${time}`)
});