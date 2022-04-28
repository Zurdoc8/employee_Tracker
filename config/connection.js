const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',

    user: 'root',

    password: '12345678',

    database: 'employee_tracker'
},
console.log('SUCCESS, now connected to employee_tracker database')
);


module.exports = connection;
