const inquirer = require('inquirer');
const mysql = require('mysql');
const mysql2 = require('mysql2');
const constable = require('console.table');
const connect = require('./config/connection');

connection.connect((err) => {
    if (err) throw error;
    console.log('');

    promptUser();
});

const promptUser = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Please select an action from the following options:',
            choices: [
                'View Departments',
                'View Title',
                'View Employees',
                'Add Department',
                'Add Title',
                'Add Employee',
                'EXIT HERE'
            ],
        }
    ])
    .then ((answers) => {
        switch (answers.choice) {

            case 'View Departments':

                viewDepartments();
                break;

            case 'View Title':

                viewTitle();
                break;

            case 'View Employees':

                viewEmployees();
                break;
            case 'Add Department':

                addDepartment();
                break;

            case 'Add Title':

                addTitle();
                break;
            
            case 'Add Employee':

                addEmployee();
                break;

            case 'EXIT HERE':

                exitHere();
                break;
        }
    }
)
}

function viewDepartments() {
    const req = "SELECT * FROM department";
    db.query(req, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option',
                choices: [
                    'Return to Main Menu',
                    'Quit'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.choice){
                case 'Main Menu':
                    start();
                    break;
                    case 'Quit':
                        Quit();
            }
        })
    })
}

function viewTitle() {
    const req = "SELECT * FROM job_title";
    db.query(req, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Titles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option',
                choices: [
                    'Return to Main Menu',
                    'Quit'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.choice){
                case 'Main Menu':
                    start();
                    break;
                    case 'Quit':
                        Quit();
            }
        })
    })
}

function viewEmployees() {
    const req = "SELECT * FROM employees";
    db.query(req, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Employees");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'select an option',
                choices: [
                    'Return to Main Menu',
                    'Quit'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.choice){
                case 'Main Menu':
                    start();
                    break;
                    case 'Quit':
                        Quit();
            }
        })
    })
}
