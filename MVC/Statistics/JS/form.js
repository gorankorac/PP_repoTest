//  var Subject = require('./subject');
//  var Student = require('./student');
//  var Exam = require('./exam')
//  import Exam from './exam';

var inputSubject = document.querySelector('.dva-1');
var inputName = document.querySelector('.imemoje');
var inputGrade = document.querySelector('.ocena');
var btn = document.querySelector('.btn');

var ullista = document.querySelector('.lista-prosli');
var ullista2 = document.querySelector('.lista-pali');

function add(e) {
  e.preventDefault();
  var subValue = inputSubject.value;
  var nameValue = inputName.value;
  var gradeValue = inputGrade.value;
  // return subValue + ' ' + nameValue + ' ' + gradeValue;

  var ex = new Exam (new Subject (subValue), new Student (nameValue), gradeValue);
  console.log(ex.getExamInfo());
  var exLi = document.createElement('li');
  console.log(exLi, 'akok');
  exLi.textContent = ex.getExamInfo();
  if(ex.hasPassed()) {
    ullista.appendChild(exLi);
  }else {
    ullista2.appendChild(exLi)
  }


}

//  var t =  add();
//  console.log(t);

 btn.addEventListener('click', add)




