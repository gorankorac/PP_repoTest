// var Subject = require('./subject');
// var Student = require('./student');


// function Exam ( ime, name, surname, grade) {

//    Subject.call(this, ime);
//    Student.call(this, name, surname);
//   // this.subject = subject;
//   // this.student = student;
//   this.grade = grade;

// }





//  Exam.prototype = Object.create(Subject.prototype);
//  Exam.prototype.constructor = Exam;

//  Exam.prototype = Object.create(Student.prototype);
//  Exam.prototype.constructor = Exam;

//  Exam.prototype.getExamInfo = function () {
//   return this.subject.getSubjectName() + ' ' + this.student.getStudentData(); 
// }

// var l = new Exam('oto','HHH','RRRR', 'QQQQQ');
// console.log(l);
// console.log(l.getExamInfo());

//  var Subject = require('./subject');
//  var Student = require('./student');

//  import Subject from './subject';
//  import Student from './student';

class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = +grade;
  }
  getExamInfo() {
    return this.subject.getSubjectName() + ' ' + this.student.getStudentData()+ ' ' + this.grade;
  }
  hasPassed() {
   return this.grade > 5 ? true : false;
  }
}

// export default Exam;

var a = new Subject('JavaScript')
console.log(a.getSubjectName());

var b = new Student('Pera', 'Kojot');
console.log(b.getStudentData());

var l = new Exam(a, b, '8');
console.log(l);
console.log(l.getExamInfo());

var u = new Exam(new Subject('matis'), new Student('kolo', 'kojot'), '8');
 console.log(u);
 console.log(u.getExamInfo());
console.log(u.hasPassed());