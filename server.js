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
    inquirer.prompt([{
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
        ]
    }])
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
            
        }   

        if (choices === 'VIEW ALL DEPARTMENTS') {
            showAllEmployees();
          }
    
          if (choices === 'SHOW ALL DEPARTMENTS') {
            showAllDepartments();
          }
    
          if (choices === 'VIEW EMPLOYEE BY DEPARTMENT') {
            viewEmployeeByDepartment();
          }
    
          if (choices === 'ADD EMPLOYEE') {
            addEmployee();
          }
    
          if (choices === 'DELETE EMPLOYEE') {
            deleteEmployee();
          }
    
          if (choices === 'UPDATE EMPLOYEE') {
            updateEmployee();
          }
    
          if (choices === 'UPDATE MANAGER') {
            updateManager();
          }
    
          if (choices === 'SHOW JOB TITLES') {
            showJob_titles();
          }
    
          if (choices === 'ADD JOB TITLE') {
            addJob_title();
          }
    
          if (choices === 'DELETE JOB TITLE') {
            deleteJob_title();
          }
    
          if (choices === 'ADD DEPARTMENT') {
            addDepartment();
          }
    
          if (choices === 'REMOVE DEPARTMENT') {
            removeDepartment();
          }
    
          if (choices === 'EXIT HERE') {
            connection.end();
          }
        });
    };

