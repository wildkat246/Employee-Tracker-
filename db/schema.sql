DROP DATABASE IF EXISTS departments_db;

CREATE DATABASE departments_db;

USE departments_db;

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT 
  manager_id NOT NULL;
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);