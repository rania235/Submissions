"select name from students"
"SELECT * FROM students
WHERE age > 30;"



"SELECT name FROM students
WHERE age > 30  and gender='F';"


"SELECT Points FROM students
WHERE students.Name ='Alex';"

"INSERT INTO students (Name, Age, Gender, Points)
values ("rania",24,"F",900);"

UPDATE students
set Points = '500'
WHERE students.Name= "Basma"


UPDATE students
set Points = '190'
WHERE students.Name= "Alex"


create table graduates(
	ID Integer  Not Null Primary key, Auto incerement,
	Name Text Not Null Unique,
	Age Integer
	Gender Text
	Points Integer
	Graduation Text 
);


INSERT INTO graduates (Name,Age ,Gender,Points,Graduation)
VALUES 
   ("layal",18,"F","350","08/09/2018");



   DELETE from students where Name ='Layal'






select e.Name, c.Name, Date from companies c join employees e on e.Company = c.Name

SELECT employees.Name
from employees
INNER JOIN companies on companies.Name = employees.Company
where Date<2000;



select companies.Name 
from companies  join employees on Company = companies.Name
where employees.Role = 'Graphic Designer'


SELECT name FROM students
WHERE Points= (select max(Points) from students)


select avg (Points) from students

select count (Name) from students
where Points = 500


select  (Name) from students
where Name like '%s%'


select Name from students order by Points desc







