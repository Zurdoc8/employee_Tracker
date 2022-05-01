const connection = require('../config/connection');

class db {

    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.query(
            'SELECT * FROM employee.employees'
        );
    }
}

module.exports = new db(connection);