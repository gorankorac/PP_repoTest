//  var Subject = require('./subject');
//  var Student = require('./student');
//  var Exam = require('./exam')
//  import Exam from './exam';

var formModule = (function() { 

var inputSubject = document.querySelector('.dva-1');
var inputName = document.querySelector('.imemoje');
var inputGrade = document.querySelector('.ocena');



var errorInput = document.querySelector('.errors')



function collectData() {
  
     var subValue = inputSubject.value;
     var nameValue = inputName.value;
     var gradeValue = inputGrade.value;
  
  return {
       subject: subValue,
       name: nameValue,
       grade: gradeValue
  }
     
  
  }
  function createElement(exam) {
    var examLi = document.createElement('li');
    examLi.textContent = exam.getExamInfo();
    return examLi;
  }

  function setError(error) {
    errorInput.textContent = error;
  }

  function append() {
    if(gradeValue>5) {
      ullista.appendChild(createElement)
    } else {
      ullista2.appendChild(createElement)
    }
  }
  function clearInputs() {
    inputSubject.value = '';
    inputName.value = '';
    inputGrade.value = '';
    errorInput.textContent = '';
    
  }

// function createExam(e) {
//   var exam = new Exam (new Subject (subValue), new Student     (nameValue), gradeValue);
//   console.log(exam);
//         console.log(exam.getExamInfo());
//      var examLi = document.createElement('li');
//          console.log(examLi, 'check');
//          examLi.textContent = exam.getExamInfo();
//     if(exam.hasPassed()) {
//             ullista.appendChild(examLi);
//           } else {
//               ullista2.appendChild(examLi)
//          }
//     if(exam.hasPassed()) {
//              pass++;
//              brojac.textContent = pass;
//          } else {
//              failed++;
//              brojac2.textContent = failed;
//          }

//             exam.clearInputs();     

//     }
    return {
       collectData: collectData,
       createElement: createElement,
       setError: setError,
       clearInputs: clearInputs
      //  ullista: ullista,
      //  ullista2: ullista2
      // createExam: createExam
     }
    
    })();
    
         
    
         
         


 




