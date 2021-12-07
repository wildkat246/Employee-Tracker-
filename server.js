require('dotenv').config();
const dotEnv = require("dotenv").config();
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const inquirer = require('inquirer');
const cTable = require('console.table');

const app = express();
const PORT = process.env.PORT || 3306;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

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
    connection.query("SELECT department_table.id 'ID', department_table.department_name 'Department Name' FROM department_table", 
    function (err, res) {
        if (err) throw err;
        console.table(res);
        startUp();
      });
}

function viewAllRoles() {
    connection.query(`SELECT role_table.id "ID", role_table.title "Title", role_table.salary "Salary", department_table.department_name "Department Name" FROM role_table JOIN department_table ON department_table.id = role_table.department_id`, function (err, res) {
        if (err) throw err;
        console.table(res);
        startUp();
      });
}