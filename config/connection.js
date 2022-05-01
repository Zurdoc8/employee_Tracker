const mysql = require('mysql2');
require ('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME
},
console.log(`SUCCESS, now connected to ${process.env.DB_NAME}`)
);


module.exports = connection;
