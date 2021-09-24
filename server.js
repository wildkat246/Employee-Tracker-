const mysql = require('mysql2');

//Creating connection 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });