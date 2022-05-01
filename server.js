const inquirer = require('inquirer');
const db = require('./config/connection');
const { connection } = require ('./db');

db.connect(async function () {
    promptUser();
})

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
                    {name:'Quit',
                    value:'Quit'}
                ]
            }
        ])
        .then((answers) => {
            switch (answers.choices){
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
                    {name:'Quit',
                    value:'Quit'}
                ]
            }
        ])
        .then((answers) => {
            switch (answers.choices){
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
        .then((answers) => {
            console.log(answers)
            switch (answers.choices) {
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
    .then(function (data) {
        const req = "INSERT INTO department(department_name) VALUES (?)"
        db.query(req, [data.department_name], function(err, res) {
            console.log("New Department added successfully");
            if (err) throw err;
            console.table(data);
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
            .then((answers) => {
                switch (answers.choices){
                    case 'menu':
                        promptUser();
                        break;
                        case 'Quit':
                            Quit();
                }
            })
        })
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
    .then(function (data) {
        db.query('INSERT INTO job_title(title, salary, department_id) VALUES (?,?,?)',
        [data.title, data.salary, data.department_id], 
        function(err, res) {
            if (err) throw err;
            console.table(data);
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
            .then((answers) => {
                switch (answers.choices){
                    case 'menu':
                        promptUser();
                        break;
                        case 'Quit':
                            Quit();
                }
            })
        })
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
    .then(function (data) {
        connection.query('INSERT INTO employee(first_name, last_name, job_title_id, manager_id) VALUES (?,?,?,?)',
        [data.first_name, data.last_name, data.job_title_id, data.manager_id], 
        function(err, res) {
            if (err) throw err;
            console.table(data);
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
            .then((answers) => {
                switch (answers.choices){
                    case 'menu':
                        promptUser();
                        break;
                        case 'Quit':
                            Quit();
                }
            })
        })
    })
}

function Quit() {
    console.log('Adios');
    process.exit();
}
