const inquirer = require('inquirer');
const db = require('./config/connection');
const mysql = require('mysql');
const { connection } = require ('./db');

db.connect(async function () {
    promptUser();
})

// connection.connect((err) => {
//     if (err) throw error;
//     console.log('');

//     promptUser();
// });

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
        console.log(answers);
        switch (answers.choices) {
            

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

                Quit();
                break;
            
            default: 
            promptUser();
        }
    }
)
}

function viewDepartments() {
    console.log('error')
    const req = "SELECT * FROM department";
    db.query(req, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'select an option',
                choices: [
                    {name:'Return to Main Menu',
                    value:'menu'},
                    'Quit'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.choices){
                case 'menu':
                    promptUser();
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
                name: 'choices',
                message: 'select an option',
                choices: [
                    {name:'Return to Main Menu',
                    value:'menu'},
                    'Quit'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.choices){
                case 'menu':
                    promptUser();
                    break;
                    case 'Quit':
                        Quit();
            }
        })

    })
}

function viewEmployees() {
    const req = "SELECT * FROM employee";
    db.query(req, function(err, res) {
        if (err) throw err;
        console.log("Viewing All Employees");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choices',
                message: 'select an option',
                choices: [
                    {name:'Return to Main Menu',
                    value:'menu'},
                    {name:'Quit',
                    value:'Quit'}
                ]
            }
        ])
        .then((answer) => {
            console.log(answer)
            switch (answer.choices) {
                case 'menu':
                    promptUser();
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
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choices',
                    message: 'select an option',
                    choices: [
                        {name:'Return to Main Menu',
                        value:'menu'},
                        'Quit'
                    ]
                }
            ])
            .then((answer) => {
                switch (answer.choices){
                    case 'menu':
                        promptUser();
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
        connection.query('INSERT INTO job_title(title, salary) VALUES (?,?)',
        [res.title, res.salary]), 
        function(err, res) {
            if (err) throw err;
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choices',
                    message: 'select an option',
                    choices: [
                        {name:'Return to Main Menu',
                        value:'menu'},
                        'Quit'
                    ]
                }
            ])
            .then((answer) => {
                switch (answer.choices){
                    case 'menu':
                        promptUser();
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
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option',
                    choices: [
                        {name:'Return to Main Menu',
                        value:'menu'},
                        'Quit'
                    ]
                }
            ])
            .then((answer) => {
                switch (answer.choices){
                    case 'menu':
                        promptUser();
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
