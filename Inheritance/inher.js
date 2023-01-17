function Person (name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.fullName = function () {
  return this.name + ' ' + this.surname;
}

Person.prototype.printInfo = function () {
  console.log(this.fullName());
}

var pera = new Person ('Pera', 'Peric')
pera.printInfo();

function Programmer (name, surname, favouriteLanguage) {
  Person.call (this, name, surname);
  this.favouriteLanguage = favouriteLanguage;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

console.log(Programmer.prototype);
console.log(Person.prototype);

Programmer.prototype.printInfo = function () {
  var fullName = this.fullName();
  console.log(fullName + ' ' + this.favouriteLanguage);
}

var laza = new Programmer('Laza', 'Lazic', 'JS')
laza.printInfo();

