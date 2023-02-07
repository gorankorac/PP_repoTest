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

var brojac = document.querySelector('.counter-passed');
var brojac2 = document.querySelector('.counter-failed');
var errorInput = document.querySelector('.errors')

var pass = 0;
var failed = 0;

function add(e) {
  try { e.preventDefault();
    var subValue = inputSubject.value;
    var nameValue = inputName.value;
    var gradeValue = inputGrade.value;
    
    if (subValue === '' || nameValue === '' || gradeValue === '') throw new Error('Missing inputs !')

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
    
    if(ex.hasPassed()) {
      pass++;
      brojac.textContent = pass;
    } else {
      failed++;
      brojac2.textContent = failed;
    }
      // cistaci idu ovde
      ex.clearInputs();
    } 
    catch(error) {
      console.log(error.message);
      errorInput.textContent = error.message;
    }

}

//  var t =  add();
//  console.log(t);

 btn.addEventListener('click', add)




