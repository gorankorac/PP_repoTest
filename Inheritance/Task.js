function Person (name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.getFullName = function () {
  return this.name + ' ' + this.surname;
}

function Employee (name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
  return this.getFullName() + ' ' + this.salary;
}

Employee.prototype.getSalary = function () {
  console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
  return this.salary * 1.1
}

function Developer (name, surname, job, salary, specalization) {
  Employee.call(this, name, surname, job, salary);
  this.specalization = specalization
} 

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
  console.log(this.specalization); 
}

function Manager (name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  console.log(this.department);
}

Manager.prototype.changeDepartment = function (rundom) {
  return this.department = rundom
}