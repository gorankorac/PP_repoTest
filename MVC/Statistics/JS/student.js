


// function Student (name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// Student.prototype.getStudentData = function() {
//   return this.name + ' ' + this.surname;
// }

// module.exports = Student;

// var m = new Student ('Goti', 'Kojot');
// console.log(m.getStudentData());

class Student {
  constructor(fullname) {
    this.name = fullname.split(' ')[0];
    this.surname = fullname.split(' ')[1];
  }
  getStudentData() {
    return this.name + ' ' + this.surname;
  }
}

// module.exports = Student;

// var m = new Student ('Goti', 'Kojot');
// console.log(m.getStudentData());