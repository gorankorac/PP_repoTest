

var studentModule = (function () { 

class Student {
  constructor(fullname) {
    this.name = fullname.split(' ')[0];
    this.surname = fullname.split(' ')[1];
  }
  getStudentData() {
    return this.name + ' ' + this.surname;
  }
} 
function createStudent(student) {
  return new Student(student);
}
return {
  createStudent: createStudent
}
})();



// var m = new Student ('Goti', 'Kojot');
// console.log(m.getStudentData());