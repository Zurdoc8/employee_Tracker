USE employee_tracker;

INSERT INTO department (department_name)
VALUES 
( "Management"),
( "Sales"),
( "Engineering"),
( "Finance"),
( "Legal");

INSERT INTO job_title (title, salary, department_id)
VALUES 
( "Regional Manager", 250000, 1),
( "Assistant Reg Manager", 100000, 1),
( "Sales Team Manager", 85000, 2),
( "Sales Specialist", 50000, 2),
( "Senior Software Engineer", 220000, 3),
( "Junior Software Engineer", 650000, 3),
( "Account Manager", 100000, 4),
( "Assistant Accountant", 70000, 4),
( "Legal Team Lead", 200000, 5),
( "Lawyer", 90000, 5);

INSERT INTO employee (first_name, last_name, job_title_id, manager_id)
VALUES 
( "Michael", "Scott", 1, NULL),
( "Dwight", "Schrute", 2, 1),
( "James", "Halpert", 3, NULL),
( "Kevin", "Malone", 4, 3),
( "Andy", "Bernard", 5, NULL),
( "Stanley", "Hudson", 6, 5),
( "Ryan", "Howard", 7, NULL),
( "Kelly", "Kapoor", 8, 7),
( "Angela", "Martin", 9, NULL),
( "Oscar", "Martinez", 10, 9);
