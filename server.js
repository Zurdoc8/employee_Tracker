const inquirer = require('inquirer');
// const mysql = require('mysql');
// const mysql2 = require('mysql2');
const constable = require('console.table');
const connection = require('./config/connection');

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
        constable(res);
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
        constable(res);
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
        constable(res);
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

function addDepartment() {
    console.log("Which department would you like to Create?");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter New Department Name',
            name: 'department_name'
        }
    ])
    .then(function (res) {
        connection.query('INSERT INTO department(department_name) VALUES (?)',
        [res.department_name]), 
        function(err, res) {
            if (err) throw err;
            constable(res);
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
        }
    })
}

function addTitle() {
    console.log("Which title would you like to Create?");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter New Title Name',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter Salary',
            name: 'salary'
        },
        {
            type: 'input',
            message: 'Enter Department ID',
            name: 'department_id'
        }
    ])
    .then(function (res) {
        connection.query('INSERT INTO job_title(title, salary, department_id) VALUES (?,?,?)',
        [res.title, res.salary, res.department_id]), 
        function(err, res) {
            if (err) throw err;
            constable(res);
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
        }
    })
}

function addEmployee() {
    console.log("Please enter employee information you wish to create");
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter New Employee First Name',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'Enter New Employee Last Name',
            name: 'last_name'
        },
        {
            type: 'input',
            message: 'Enter New Employee Job Title',
            name: 'job_title_id'
        },
        {
            type: 'input',
            message: 'Enter New Employee Manager',
            name: 'manager_id'
        }
    ])
    .then(function (res) {
        connection.query('INSERT INTO employee(first_name, last_name, job_title_id, manager_id) VALUES (?,?,?,?)',
        [res.first_name, res.last_name, res.job_title_id, res.manager_id]), 
        function(err, res) {
            if (err) throw err;
            constable(res);
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
        }
    })
}

function Quit() {
    console.log('Adios');
    process.exit();
}
