const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const inquirer = require('inquirer');
const cTable = require('console.table');


const app = express();
const PORT = process.env.PORT || 3306;

//Creating connection 
//const connection = mysql.createConnection({
  //  host: 'localhost',
    //user: 'root',
   // database: 'test'
  //});

inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "what you like to do?",
            choices: [
                {
                    name: "view all departments",
                    value: "VIEW-ALL-DEPARTMENTS"
                },
                {
                    name: "view all roles",
                    value: "VIEW-ALL-ROLES"
                },
                {
                    name: "view all employees",
                    value: "VIEW-ALL-EMPLOYEES"
                },
                {
                    name: "add a employee",
                    value: "ADD-A-EMPLOYEE"
                },
                {
                    name: "add a department",
                    value: "ADD-A-DEPARTMENT"
                },
                {
                    name: "add a employee",
                    value: "ADD-A-EMPLOYEE"
                },
                {
                    name: "update a employee",
                    value: "UPDATE-A-EMPLOYEE"
                },
            ]
        }
  ])
  .then((answers) => {
    var choice = answers.choice;

    switch(choice) {
        case "VIEW-ALL-DEPARTMENTS":
            viewAllDepartments();
            break;
        case "VIEW-ALL-ROLES":
            viewAllRoles();  
            break;
        case "VIEW-ALL-EMPLOYEES":
            viewAllEmployees();
            break;
        case "ADD-A-EMPLOYEE":
            viewAllEmployee();
            break;
        case "ADD-A-DEPARTMENT":
            viewAllDepartment();
            break;
        case "ADD-A-EMPLOYEE":
            viewAllEmployee();
            break;
        case "UPDATE-A-EMPLOYEE":
            viewAllUpdateEmployee();
            break;
        default:
          // code block
      }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

function viewAllDepartments() {
    console.log("view departs");
    //make sure database has seeds 
    //query the database to find the employees
    //use console.table to log variable for the departments
}

function viewAllRoles() {
    console.log("view roles");
}