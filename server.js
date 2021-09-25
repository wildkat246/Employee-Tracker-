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
}

function viewAllRoles() {
    console.log("view roles");
}