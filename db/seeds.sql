USE employee_tracker;

----DEPARTMEMENT----

INSERT INTO department (name)
VALUES (Management);

INSERT INTO department (name)
VALUES (Sales);

INSERT INTO department (name)
VALUES (Engineering);

INSERT INTO department (name)
VALUES (Finance);

INSERT INTO department (name)
VALUES (Legal);

----JOB TITLE----

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Regional Manager", 250000, 1);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Assistant TO the Regional Manager", 100000, 1);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Sales Team Manager", 85000, 2);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Sales Specialist", 50000, 2);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Senior Software Engineer", 220000, 3);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Junior Software Engineer", 650000, 3);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Account Manager", 100000, 4);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Assistant Accountant", 70000, 4);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Legal Team Lead", 200000, 5);

INSERT INTO job_title (title, salary, department_id)
VALUES ( "Lawyer", 90000, 5);
