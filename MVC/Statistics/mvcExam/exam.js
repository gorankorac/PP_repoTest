
var examModule = (function() {

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
 
  // createExam(examObject) {
  //   var exam = new Exam (examObject)
  // }
  }

  function createExam(subject, student, grade) {
    return new Exam (subject, student, grade)
  }

  // function clearInputs2() {
  //   subject = '';
  //   name = '';
  //   inputGrade.value = '';
  //   errorInput.textContent = '';
  // }
  
  return {
      createExam: createExam,
      // clearInputs2: clearInputs2
  }

})();


// var a = new Subject('JavaScript')
// console.log(a.getSubjectName());

// var b = new Student('Pera', 'Kojot');
// console.log(b.getStudentData());

// var l = new Exam(a, b, '8');
// console.log(l);
// console.log(l.getExamInfo());

// var u = new Exam(new Subject('matis'), new Student('kolo', 'kojot'), '8');
//  console.log(u);
//  console.log(u.getExamInfo());
// console.log(u.hasPassed());
