SE db_employee_tracker;

DROP TABLE IF EXISTS employee;

DROP TABLE IF EXISTS department;

DROP TABLE IF EXISTS job_title;

----- Create Department table -----
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

----- Create job_title Table -----
CREATE TABLE job_title (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

----- Create Employee Table -----
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (job_title_id) REFERENCES job_title(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);

SELECT * FROM employee_tracker;
